import { Box, Grid, Stack, Typography } from '@mui/material';
import Container from '@mui/material/Container';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Mousewheel } from 'swiper';
import 'swiper/css';
import 'swiper/css/free-mode';
import Image from 'next/image';

type Genre = {
  name: string;
  background: string[];
  photo: string;
};

const GenreBox = (genre: Genre) => (
  <Stack
    sx={{
      width: 200,
      height: 100,
      background: `${genre.background[2]}`,
      borderRadius: 3,
      ...genre.background.map((bg) => ({ background: `${bg}` })),
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
  </Stack>
);

const GenreList: Genre[] = [
  {
    name: 'Techno',
    background: [
      '#50c9c3',
      '-webkit-linear-gradient(to bottom, #50c9c3, #96deda)',
      'linear-gradient(to bottom, #50c9c3, #96deda)',
    ],
    photo: '/images/genres/techno.jpg',
  },
  {
    name: 'House',
    background: [
      '#ddd6f3',
      '-webkit-linear-gradient(to bottom, #faaca8, #ddd6f3)',
      'linear-gradient(to bottom, #faaca8, #ddd6f3)',
    ],
    photo: '/images/genres/house.jpg',
  },
  {
    name: 'Hardstyle',
    background: [
      '#5D4157',
      '-webkit-linear-gradient(to bottom, #A8CABA, #5D4157)',
      'linear-gradient(to bottom, #A8CABA, #5D4157)',
    ],
    photo: '/images/genres/hardstyle.jpg',
  },
  {
    name: 'Drum & Bass',
    background: [
      '#f2709c',
      'webkit-linear-gradient(to bottom, #ff9472, #f2709c)',
      'linear-gradient(to bottom, #ff9472, #f2709c)',
    ],
    photo: '/images/genres/drum-and-bass.jpg',
  },
  {
    name: 'Dance',
    background: [
      '#870000',
      'webkit-linear-gradient(to bottom, #190A05, #870000)',
      'linear-gradient(to bottom, #190A05, #870000)',
    ],
    photo: '/images/genres/dance.jpg',
  },
  {
    name: 'Hip-Hop',
    background: [
      'ground: #B993D6',
      'webkit-linear-gradient(to bottom, #8CA6DB, #B993D6)',
      'linear-gradient(to bottom, #8CA6DB, #B993D6)',
    ],
    photo: '/images/genres/hip-hop.jpg',
  },
  {
    name: 'Pop',
    background: [
      'ground: #C9FFBF',
      'webkit-linear-gradient(to bottom, #FFAFBD, #C9FFBF)',
      'linear-gradient(to bottom, #FFAFBD, #C9FFBF)',
    ],
    photo: '/images/genres/pop.jpg',
  },
  {
    name: 'Future Rave',
    background: [
      '#606c88',
      'webkit-linear-gradient(to bottom, #3f4c6b, #606c88)',
      'linear-gradient(to bottom, #3f4c6b, #606c88)',
    ],
    photo: '/images/genres/future-rave.jpg',
  },
  {
    name: 'EDM',
    background: [
      '#FBD3E9',
      'webkit-linear-gradient(to bottom, #BB377D, #FBD3E9)',
      'linear-gradient(to bottom, #BB377D, #FBD3E9)',
    ],
    photo: '/images/genres/edm.jpg',
  },
];

type Category = {
  name: string;
};

const Root = () => {
  return (
    <Container maxWidth="xl" sx={{ mt: 3 }}>
      <Grid container spacing={3}>
        <Grid
          item
          xs={12}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            position: 'relative',
          }}
        >
          <Typography variant="h3">Welcome to the Night Hunt</Typography>
          <Typography mt={2} variant="h6">
            The best place to find your next Adventure
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Stack overflow="hidden" spacing={3}>
            <Typography variant="h5" fontWeight="bold">
              Categories
            </Typography>
            <Box width="100%" display="flex" flexDirection="row">
              <Swiper
                direction="horizontal"
                spaceBetween={120}
                slidesPerView={2}
                mousewheel={true}
                freeMode={true}
                modules={[Mousewheel, FreeMode]}
                className="mySwiper"
              >
                {GenreList.map((genre) => (
                  <SwiperSlide key={genre.name}>
                    <GenreBox {...genre} />
                  </SwiperSlide>
                ))}
              </Swiper>
            </Box>
          </Stack>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Root;
