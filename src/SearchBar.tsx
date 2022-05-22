import {
  Autocomplete,
  Backdrop,
  Checkbox,
  Chip,
  CircularProgress,
  debounce,
  List,
  ListItem,
  Modal,
  Popper,
  TextField,
  Typography,
} from '@mui/material';
import { Box } from '@mui/system';
import ImageWithLoader from './ImageWithLoader';
import { SyntheticEvent, useMemo, useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import IconButton from '@mui/material/IconButton';
import { atom, useAtom } from 'jotai';
import { Close, ErrorOutline } from '@mui/icons-material';
import { Stack, Fade } from '@mui/material';
import Lottie from 'react-lottie';
import * as NotFound from './searchbar404.json';
const SearchBarTriggerAtom = atom(true);

export const SearchBarTrigger = () => {
  const [isTriggred, setIsTriggred] = useAtom(SearchBarTriggerAtom);

  return (
    <IconButton
      sx={{
        display: {
          xs: 'flex',
          // md: 'none',
        },
        my: 'auto',
        width: {
          xs: 24,
          md: 120,
        },
        height: 32,
        border: {
          xs: 'none',
          md: '1px solid rgba(255, 255, 255, 0.23)',
        },
        borderRadius: '4px',
      }}
      onClick={() => setIsTriggred(true)}
      size="large"
      aria-label="search bar trigger"
      aria-controls="menu-serachbar"
      aria-haspopup="true"
    >
      <Typography
        display={{
          xs: 'none',
          md: 'flex',
        }}
        mr={2}
        color="white"
      >
        Search
      </Typography>
      <SearchIcon sx={{ color: 'white' }} />
    </IconButton>
  );
};
const NoOption = () => (
  <>
    <Lottie
      options={{
        loop: true,
        autoplay: true,
        animationData: NotFound,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice',
        },
      }}
    />
    <Typography variant="h6" textAlign="center">
      No results found
    </Typography>
  </>
);

const SearchBar = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isTriggred, setIsTriggred] = useAtom(SearchBarTriggerAtom);

  const [searchValue, setSearchValue] = useState('');
  const [searchOptions, setSearchOptions] = useState([]);

  const onTextChange = (e: SyntheticEvent) => {
    setSearchValue((e.target as HTMLInputElement).value);
  };

  const searchDelayed = debounce(onTextChange, 50);

  const foundResults = searchList.filter((option) =>
    option.title.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <Modal
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
      open={isTriggred}
      onClose={() => setIsTriggred(false)}
    >
      <Fade in={isTriggred}>
        <Box
          sx={{
            height: {
              xs: '100vh',
              sm: 600,
            },
            overflow: 'hidden',
            width: {
              xs: '100vw',
              sm: 700,
            },
            position: 'absolute' as 'absolute',
            top: {
              xs: 0,
              sm: '10%',
            },
            left: {
              xs: 0,
              sm: '50%',
            },
            transform: {
              xs: 0,
              sm: 'translate(-50%, -10%)',
            },
            bgcolor: 'background.paper',
            borderRadius: {
              xs: 0,
              sm: 2,
            },
            boxShadow: 24,
            py: 1,
          }}
        >
          <TextField
            size="medium"
            sx={{ p: 2, borderBottom: '1px solid rgba(255, 255, 255, 0.3)' }}
            variant="standard"
            fullWidth
            onChange={searchDelayed}
            InputProps={{
              disableUnderline: true,
              startAdornment: <SearchIcon sx={{ mr: 1 }} />,
              endAdornment: (
                <>
                  <Close onClick={() => setIsTriggred(false)} />
                  {isLoading ? (
                    <CircularProgress color="inherit" size={20} />
                  ) : null}
                </>
              ),
            }}
            //   label="Free Search"
            placeholder="DJ Sura"
          />
          <List sx={{ pb: 8, maxHeight: '100%', overflowY: 'auto' }}>
            {foundResults.map((option) => (
              <ListItem
                sx={{
                  borderBottom: '1px solid rgba(255, 255, 255, 0.3)',
                  display: 'flex',
                  alignItems: 'center',
                }}
                key={option.title}
              >
                <ImageWithLoader
                  width={120}
                  layout="raw"
                  quality={100}
                  height={120}
                  src={`/${option.img}`}
                />
                <Stack>
                  <Typography variant="h6" ml={2}>
                    {option.title}
                  </Typography>
                  <Stack
                    ml={2}
                    mt={2}
                    justifyContent="flex-start"
                    alignItems="center"
                    flexWrap="wrap"
                    rowGap={1}
                    spacing={1}
                    direction="row"
                  >
                    {TagRender(option)}
                  </Stack>
                </Stack>
              </ListItem>
            ))}

            {foundResults.length === 0 && <NoOption />}
          </List>
        </Box>
      </Fade>
    </Modal>
  );
};

type clubOption = {
  title: string;
  img: string;
  rank: number;
  genres: string[];
  event: boolean;
  isClub: boolean;
};

const TagRender = (opt: clubOption) => {
  return (
    <>
      <Chip
        label={`Rank: ${opt.rank}`}
        sx={{ width: 'fit-content' }}
        size="small"
        color="info"
      />
      {opt.event && (
        <Chip
          label="Upcoming Event"
          sx={{ width: 'fit-content' }}
          size="small"
          color="error"
        />
      )}
      {opt.genres.map((genre) => (
        <Chip
          label={genre}
          sx={{ width: 'fit-content' }}
          size="small"
          color="warning"
        />
      ))}
    </>
  );
};

const searchList = [
  {
    title: 'Temple Hongdae',
    rank: 25,
    img: 'templeclub.png',

    genres: ['EDM', 'Hardstyle', 'Dubstep'],
    event: true,
    isClub: true,
  },
  {
    title: 'Octagon Gangnam',
    rank: 1,
    img: 'octagonclub.png',

    genres: ['EDM', 'Techno', 'Hip-Hop'],
    event: true,
    isClub: true,
  },
  {
    title: 'DJ Sura',
    rank: 5,
    img: 'djsura.jpg',
    genres: ['Dubstep', 'Hardstyle'],
    event: true,
    isClub: false,
  },
  {
    title: 'DJ Cream',
    rank: 17,
    img: 'djcream.jpg',

    genres: ['Base', 'Hardstyle'],
    event: false,
    isClub: false,
  },
  {
    title: 'DJ Gunner',
    rank: 10,
    img: 'djgunner.jpg',

    genres: ['Dubstep', 'Hardstyle'],
    event: false,
    isClub: false,
  },
  {
    title: 'Pumpkin Club',
    rank: 20,
    img: 'pumpkinclub.png',

    genres: ['EDM', 'Tech House'],
    event: false,
    isClub: true,
  },
];

export default SearchBar;
