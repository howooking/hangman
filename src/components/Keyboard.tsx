/* eslint-disable react/no-array-index-key */
import { Button, Stack, Typography } from '@mui/material';

const KEYS = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z',
];

type KeyboardProps = {
  incorrectLetters: string[];
  guessedLetters: string[];
  handleGuessedLetter: (key: string) => void;
  isWin: boolean;
};

export default function Keyboard({
  incorrectLetters,
  guessedLetters,
  handleGuessedLetter,
  isWin,
}: KeyboardProps): JSX.Element {
  return (
    <Stack
      direction="row"
      flexWrap="wrap"
      gap={1}
      paddingX={10}
      paddingBottom={4}
      maxWidth="700px"
    >
      {KEYS.map((key, index) => (
        <Button
          key={index}
          variant={guessedLetters.includes(key) ? 'contained' : 'outlined'}
          size="large"
          color="secondary"
          onClick={() => handleGuessedLetter(key)}
          disabled={
            incorrectLetters.includes(key) ||
            incorrectLetters.length === 6 ||
            isWin
          }
        >
          <Typography fontSize={20} fontWeight="bold">
            {key}
          </Typography>
        </Button>
      ))}
    </Stack>
  );
}
