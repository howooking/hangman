import { Typography } from '@mui/material';

type HeadertextProps = {
  incorrectCount: number;
  wordToGuess: string;
  isWin: boolean;
};

const commentForLooser = (
  incorrectCount: number,
  wordToGuess: string
): string => {
  switch (incorrectCount) {
    case 1:
      return '괜찮아요!';
    case 2:
      return '아직 기회가 많이 남았어요';
    case 3:
      return '3번의 기회가 남았어요';
    case 4:
      return '2번의 기회가 남았어요';
    case 5:
      return '마지막 기회가 남았어요';
    case 6:
      return `정답은 ${wordToGuess}입니다!`;
    default:
      return 'HANGMAN';
  }
};

export default function Headertext({
  incorrectCount,
  wordToGuess,
  isWin,
}: HeadertextProps): JSX.Element {
  return (
    <Typography variant="h5" sx={{ paddingTop: '20px' }}>
      {isWin
        ? '승리하셨습니다!!'
        : commentForLooser(incorrectCount, wordToGuess)}
    </Typography>
  );
}
