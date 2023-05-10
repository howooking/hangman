/* eslint-disable no-restricted-syntax */
import { useState } from 'react';
import { Stack, Divider } from '@mui/material';
import words from './assets/wordList.json';
import Headertext from './components/Headertext';
import HangmanDrawing from './components/HangmanDrawing';
import HangmanWord from './components/HangmanWord';
import Keyboard from './components/Keyboard';

export default function App(): JSX.Element {
  const [wordToGuess, setWordToGuess] = useState<string>(() => {
    return words[Math.floor(Math.random() * words.length)];
  });

  const [guessedLetters, setguessedLetters] = useState<string[]>([]);

  const incorrectLetters = guessedLetters.filter(
    (letter) => !wordToGuess.includes(letter)
  );

  const isWin = wordToGuess
    .split('')
    .every((letter) => guessedLetters.includes(letter));

  const handleGuessedLetter = (key: string): void => {
    setguessedLetters([...guessedLetters, key]);
  };

  return (
    <Stack divider={<Divider flexItem />} gap={3} sx={{ alignItems: 'center' }}>
      <Headertext
        incorrectCount={incorrectLetters.length}
        wordToGuess={wordToGuess}
        isWin={isWin}
      />
      <HangmanDrawing incorrectCount={incorrectLetters.length} />
      <HangmanWord guessedLetters={guessedLetters} wordToGuess={wordToGuess} />
      <Keyboard
        incorrectLetters={incorrectLetters}
        guessedLetters={guessedLetters}
        handleGuessedLetter={handleGuessedLetter}
        isWin={isWin}
      />
    </Stack>
  );
}
