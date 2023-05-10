/* eslint-disable react/no-array-index-key */
import { Box, Divider, Stack, Typography } from '@mui/material';

type HangmanWordProps = {
  guessedLetters: string[];
  wordToGuess: string;
};

export default function HangmanWord({
  guessedLetters,
  wordToGuess,
}: HangmanWordProps): JSX.Element {
  return (
    <Stack
      direction="row"
      gap={3}
      alignItems="center"
      divider={<Divider flexItem orientation="vertical" />}
    >
      {wordToGuess.split('').map((letter, index) => (
        <Box
          key={index}
          borderBottom="7px solid"
          borderColor="secondary.main"
          width={70}
        >
          <Typography
            textAlign="center"
            fontWeight="bold"
            fontSize={70}
            textTransform="uppercase"
            visibility={guessedLetters.includes(letter) ? 'visible' : 'hidden'}
          >
            {letter}
          </Typography>
        </Box>
      ))}
    </Stack>
  );
}
