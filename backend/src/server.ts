import express from "express";
import { convertToRoman } from "./converter";
import { logger } from "./observability/logger";
import { metricsMiddleware, register } from "./observability/metrics";
import { startTracing } from "./observability/tracing";

const app = express();
const port = 8080;

startTracing(app);
app.use(metricsMiddleware);

app.get("/romannumeral", (req, res) => {
  const query = req.query.query;
  logger.info('Received query param: ${query}');

  const num = Number(query);
  if (!query || isNaN(num) || num < 1 || num > 3999) {
    logger.warn("Invalid input received");
    return res.status(400).send("Input must be an integer between 1 and 3999.");
  }

  const result = convertToRoman(num);
  logger.info('Converted ${num} to ${result}');

  return res.json({ input: num.toString(), output: result });
});

app.get("/metrics", async (req, res) => {
  res.set("Content-Type", register.contentType);
  res.end(await register.metrics());
});

app.listen(port, () => {

  logger.info('Server running at http://localhost:${port}');

});
