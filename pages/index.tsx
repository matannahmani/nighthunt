import { Box, Grid, Stack, Typography } from '@mui/material';
import Container from '@mui/material/Container';
import { GetStaticProps } from 'next';
import { Genre } from '../types/Genre';
import IndexCategory from '../src/IndexCategory';
import { DJList } from '../src/DjCard';

const GenreList: Genre[] = [
  {
    name: 'Techno',
    background: [
      '#50c9c3',
      '-webkit-linear-gradient(to bottom, #50c9c3, #96deda)',
      'linear-gradient(to bottom, #50c9c3, #96deda)',
    ],
    backgroundImage:
      'linear-gradient(164.055deg, rgb(18, 220, 232), rgb(113, 97, 244) 100%)',
    photo: '/images/genres/techno.jpg',
  },
  {
    name: 'House',
    background: [
      '#ddd6f3',
      '-webkit-linear-gradient(to bottom, #faaca8, #ddd6f3)',
      'linear-gradient(to bottom, #faaca8, #ddd6f3)',
    ],
    backgroundImage:
      'linear-gradient(150.255deg, rgb(223, 70, 133), rgb(246, 124, 38) 100%)',
    photo: '/images/genres/house.jpg',
  },
  {
    name: 'Hardstyle',
    background: [
      '#5D4157',
      '-webkit-linear-gradient(to bottom, #A8CABA, #5D4157)',
      'linear-gradient(to bottom, #A8CABA, #5D4157)',
    ],
    backgroundImage:
      'linear-gradient(232.125deg, rgb(255, 185, 0), rgb(255, 142, 0) 100%)',
    photo: '/images/genres/hardstyle.jpg',
  },
  {
    name: 'Drum & Bass',
    background: [
      '#f2709c',
      'webkit-linear-gradient(to bottom, #ff9472, #f2709c)',
      'linear-gradient(to bottom, #ff9472, #f2709c)',
    ],
    backgroundImage:
      'linear-gradient(164.055deg, rgb(245, 158, 24), rgb(243, 95, 20) 100%)',
    photo: '/images/genres/drum-and-bass.jpg',
  },
  {
    name: 'Dance',
    background: [
      '#870000',
      'webkit-linear-gradient(to bottom, #190A05, #870000)',
      'linear-gradient(to bottom, #190A05, #870000)',
    ],
    backgroundImage: 'linear-gradient(131.186deg, #13547a 0%, #80d0c7 100%)',
    photo: '/images/genres/dance.jpg',
  },
  {
    name: 'Hip-Hop',
    background: [
      'ground: #B993D6',
      'webkit-linear-gradient(to bottom, #8CA6DB, #B993D6)',
      'linear-gradient(to bottom, #8CA6DB, #B993D6)',
    ],
    backgroundImage:
      'linear-gradient(164.055deg, rgb(18, 220, 232), rgb(113, 97, 244) 100%)',

    photo: '/images/genres/hip-hop.jpg',
  },
  {
    name: 'Pop',
    background: [
      'ground: #C9FFBF',
      'webkit-linear-gradient(to bottom, #FFAFBD, #C9FFBF)',
      'linear-gradient(to bottom, #FFAFBD, #C9FFBF)',
    ],
    backgroundImage:
      'linear-gradient(150.255deg, rgb(223, 70, 133), rgb(246, 124, 38) 100%)',
    photo: '/images/genres/pop.jpg',
  },
  {
    name: 'Future Rave',
    background: [
      '#606c88',
      'webkit-linear-gradient(to bottom, #3f4c6b, #606c88)',
      'linear-gradient(to bottom, #3f4c6b, #606c88)',
    ],
    backgroundImage:
      'linear-gradient(232.125deg, rgb(255, 185, 0), rgb(255, 142, 0) 100%)',
    photo: '/images/genres/future-rave.jpg',
  },
  {
    name: 'EDM',
    background: [
      '#FBD3E9',
      'webkit-linear-gradient(to bottom, #BB377D, #FBD3E9)',
      'linear-gradient(to bottom, #BB377D, #FBD3E9)',
    ],
    backgroundImage:
      'linear-gradient(164.055deg, rgb(245, 158, 24), rgb(243, 95, 20) 100%)',
    photo: '/images/genres/edm.jpg',
  },
];

const Root = () => {
  return (
    <Container maxWidth="xl" sx={{ mt: 3 }}>
      <Grid container spacing={4}>
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
          <Typography variant="h4" fontWeight={'bold'}>
            Welcome to Night Hunt
          </Typography>
          <Typography mt={0} variant="h6">
            The best place to find your next Adventure
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <IndexCategory title="Categories" list={GenreList} />
        </Grid>
        <Grid item xs={12}>
          <IndexCategory title="Featured DJ" list={DJList} />
        </Grid>
        <Grid item xs={12}>
          <IndexCategory title="Featured Clubs" list={DJList} />
        </Grid>
        <Grid item xs={12}>
          <IndexCategory title="Top EDM" list={DJList} />
        </Grid>
        <Grid item xs={12}>
          <IndexCategory title="Featured Techno" list={DJList} />
        </Grid>
        <Grid item xs={12}>
          <IndexCategory title="Featured House" list={DJList} />
        </Grid>
        <Grid item xs={12}>
          <IndexCategory title="Featured Hardstyle" list={DJList} />
        </Grid>
        <Grid item xs={12}></Grid>
      </Grid>
    </Container>
  );
};

export const getStaticProps: GetStaticProps = () => {
  return {
    props: {},
    revalidate: 1000,
  };
};

export default Root;
