import { Box } from '@mui/material';

const HEAD = (
  <Box
    sx={{
      width: '50px',
      height: '50px',
      border: '10px solid black',
      borderRadius: '100%',
      position: 'absolute',
      top: '50px',
      right: '-30px',
    }}
  />
);
const BODY = (
  <Box
    sx={{
      width: '10px',
      height: '100px',
      bgcolor: 'black',
      position: 'absolute',
      top: '120px',
      right: 0,
    }}
  />
);
const RIGHT_ARM = (
  <Box
    sx={{
      width: '100px',
      height: '10px',
      bgcolor: 'black',
      position: 'absolute',
      top: '150px',
      right: '-100px',
      rotate: '-30deg',
      transformOrigin: 'left bottom',
    }}
  />
);
const LEFT_ARM = (
  <Box
    sx={{
      width: '100px',
      height: '10px',
      bgcolor: 'black',
      position: 'absolute',
      top: '150px',
      right: '10px',
      rotate: '30deg',
      transformOrigin: 'right bottom',
    }}
  />
);
const RIGHT_LEG = (
  <Box
    sx={{
      width: '100px',
      height: '10px',
      bgcolor: 'black',
      position: 'absolute',
      top: '210px',
      right: '-90px',
      rotate: '60deg',
      transformOrigin: 'left bottom',
    }}
  />
);
const LEFT_LEG = (
  <Box
    sx={{
      width: '100px',
      height: '10px',
      bgcolor: 'black',
      position: 'absolute',
      top: '210px',
      right: 0,
      rotate: '-60deg',
      transformOrigin: 'right bottom',
    }}
  />
);
const BODY_PARTS = [HEAD, BODY, RIGHT_ARM, LEFT_ARM, RIGHT_LEG, LEFT_LEG];

type HangmanDrawingProps = {
  incorrectCount: number;
};

export default function HangmanDrawing({
  incorrectCount,
}: HangmanDrawingProps): JSX.Element {
  return (
    <Box position="relative">
      {BODY_PARTS.slice(0, incorrectCount)}
      <Box
        sx={{
          height: '50px',
          width: '10px',
          bgcolor: 'secondary.main',
          top: 0,
          right: 0,
          position: 'absolute',
        }}
      />
      <Box
        sx={{
          height: '10px',
          width: '200px',
          bgcolor: 'secondary.main',
          ml: '120px',
        }}
      />
      <Box
        sx={{
          height: '400px',
          width: '10px',
          bgcolor: 'secondary.main',
          ml: '120px',
        }}
      />
      <Box sx={{ height: '10px', width: '250px', bgcolor: 'secondary.main' }} />
    </Box>
  );
}
