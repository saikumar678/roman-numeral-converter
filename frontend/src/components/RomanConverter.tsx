import React, { useState } from "react";
import {
  TextField,
  Button,
  Heading,
  View,
  Text,
  AlertDialog,
  DialogTrigger,
  Flex
} from "@adobe/react-spectrum";

export default function RomanConverter() {
  const [number, setNumber] = useState("");
  const [result, setResult] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleConvert = async () => {
    try {
      const res = await fetch(`http://localhost:8080/romannumeral?query=${number}`);
      if (!res.ok) {
        throw new Error(await res.text());
      }
      const data = await res.json();
      setResult(data.output);
      setError(null);
    } catch (err: any) {
      setError(err.message);
      setResult(null);
    }
  };

  return (
    <View padding="size-200">
      <Flex direction="column" gap="size-150" maxWidth="size-4600">
        <Heading level={2}>Roman Numeral Converter</Heading>
        <TextField
          label="Enter a number (1 - 3999)"
          value={number}
          onChange={setNumber}
          type="number"
        />
        <Button variant="accent" onPress={handleConvert}>
          Convert
        </Button>

        {result && (
          <Text>
            Result: <strong>{result}</strong>
          </Text>
        )}

        {error && (
          <DialogTrigger isDismissable>
            <Button variant="secondary">Show Error</Button>
            <AlertDialog title="Error" variant="destructive">
              {error}
            </AlertDialog>
          </DialogTrigger>
        )}
      </Flex>
    </View>
  );
}
