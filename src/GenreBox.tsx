import { Stack, Typography, Box } from '@mui/material';
import { Genre } from '../types/Genre';
import CardMask from './CardMask';

export const GenreBox = (genre: Genre) => (
  <Stack
    sx={{
      width: 200,
      height: 100,
      overflow: 'hidden',
      background: `${genre.background[2]}`,
      borderRadius: 3,
      backgroundImage: `${genre.backgroundImage}`,
      transition: 'all 0.2s ease-in-out',
      cursor: 'pointer',
      outline: 'none',
      WebkitTapHighlightColor: 'transparent',

      ':hover': {
        transform: 'scale(1.05)',
      },
      ':focus': {
        transform: 'scale(1.05)',
      },
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}
  >
    <Typography
      fontWeight="bold"
      sx={{ textShadow: '0.5px 0.5px gray' }}
      variant="h6"
    >
      {genre.name}
    </Typography>
    <Box sx={{ position: 'absolute', overflow: 'hidden' }}>
      <CardMask />
    </Box>
  </Stack>
);

export default GenreBox;
