import { Chip, Stack, Typography } from '@mui/material';
import Image from 'next/image';
import { useState } from 'react';
import { Box } from '@mui/system';
import ImageWithLoader from './ImageWithLoader';

export type DjCard = {
  name: string;
  photo: string;
  mainGenre: string;
  subGenre: string;
  location: string;
  rank: number;
};
export const isDj = (toBeDetermined: any): toBeDetermined is DjCard => {
  if ((toBeDetermined as DjCard).mainGenre) {
    return true;
  }
  return false;
};

export const DJList: DjCard[] = [
  {
    name: 'DJ Sura',
    photo: '/djsura.jpg',
    mainGenre: 'Hardstyle',
    subGenre: 'Rave',
    location: 'Seoul, Mapo-gu',
    rank: 1,
  },
  {
    name: 'DJ Cream',
    photo: '/djcream.jpg',
    mainGenre: 'Hardstyle',
    subGenre: 'EDM',
    location: 'Seoul, Mapo-gu',
    rank: 10,
  },
  {
    name: 'DJ Gunner 1',
    photo: '/djgunner.jpg',
    mainGenre: 'Hardstyle',
    subGenre: 'Rave',
    location: 'Seoul, Mapo-gu',
    rank: 15,
  },
  {
    name: 'DJ Gunner 2',
    photo: '/djgunner.jpg',
    mainGenre: 'EDM',
    subGenre: 'Techno',
    location: 'Seoul, Mapo-gu',
    rank: 1,
  },
  {
    name: 'DJ Gunner 3',
    photo: '/djgunner.jpg',
    mainGenre: 'EDM',
    subGenre: 'Techno',
    location: 'Seoul, Mapo-gu',
    rank: 1,
  },
  {
    name: 'DJ Gunner 4',
    photo: '/djgunner.jpg',
    mainGenre: 'EDM',
    subGenre: 'Techno',
    location: 'Seoul, Mapo-gu',
    rank: 1,
  },
  {
    name: 'DJ Gunner 5',
    photo: '/djgunner.jpg',
    mainGenre: 'EDM',
    subGenre: 'Techno',
    location: 'Seoul, Mapo-gu',
    rank: 1,
  },
];

export const DjCard = (props: DjCard) => {
  const [isHovering, setHover] = useState(false);

  return (
    <Stack
      onPointerEnter={() => setHover(true)}
      onPointerLeave={() => setHover(false)}
      onMouseUp={() => setHover(false)}
      onMouseDown={() => setHover(true)}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      sx={{
        width: 210,
        height: 336,
      }}
      spacing={1}
    >
      <div style={{ overflow: 'hidden', borderRadius: '4px' }}>
        <ImageWithLoader
          style={{
            transition: 'all 0.2s ease-in-out',
            transform: isHovering ? 'scale(1.05)' : 'scale(1)',
          }}
          quality={100}
          layout={'responsive'}
          width={210}
          height={250}
          objectFit="cover"
          src={props.photo}
        />
      </div>
      <Stack direction="row" alignItems="center" justifyContent="space-between">
        <Typography typography="h6">{props.name}</Typography>
        <Chip
          label={`Rank: ${props.rank}`}
          sx={{ width: 'fit-content' }}
          size="small"
          color="info"
        />
      </Stack>
      <Typography typography="body2" sx={{ my: '3px!important' }}>
        {props.location}
      </Typography>
      <Stack direction="row" spacing={1}>
        <Chip
          label={props.mainGenre}
          sx={{ width: 'fit-content' }}
          size="small"
          color="warning"
        />
        <Chip
          label={props.subGenre}
          sx={{ width: 'fit-content' }}
          size="small"
          color="error"
        />
      </Stack>
    </Stack>
  );
};
export default DjCard;
