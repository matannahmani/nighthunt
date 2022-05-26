import type { NextPage } from 'next';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

import Copyright from '../src/Copyright';
import ResponsiveAppBar from '../src/AppBar';
import Lottie from 'react-lottie';
import * as ComingSoon from '../src/coming-soon.json';

const Home: NextPage = () => {
  return (
    <>
      <Container maxWidth="lg">
        <Box
          sx={{
            my: 4,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Lottie
            options={{
              loop: false,
              autoplay: true,
              animationData: ComingSoon,
              rendererSettings: {
                preserveAspectRatio: 'xMidYMid slice',
              },
            }}
          />
          <Copyright />
        </Box>
      </Container>
    </>
  );
};

export default Home;
