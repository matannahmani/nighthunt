import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import { Button, Menu, MenuItem, Stack } from '@mui/material';
import { AccountCircle } from '@mui/icons-material';
import SearchBar from './SearchBar';
import { SearchBarTrigger } from './SearchBar';
import { MouseEvent, useState } from 'react';
const pages = ["Top DJ'S", 'Top Clubs', 'Upcoming Events'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

export default function SearchAppBar() {
  const [isLogged, setLogged] = useState(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleMenu = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar sx={{ height: 64 }}>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{
              mr: 2,
              display: {
                md: 'none',
              },
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            sx={{
              background: '#8D0033',
              padding: '4px',
              mr: 2,
              fontFamily: 'Caesar Dressing',
            }}
            variant="h5"
          >
            NightHunt
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                // onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page}
              </Button>
            ))}
          </Box>
          <SearchBar />
          <Stack spacing={1} direction="row" ml="auto">
            <SearchBarTrigger />
            {isLogged && (
              <>
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  sx={{
                    width: 24,
                    height: 48,
                    color: 'white',
                    display: 'flex',
                  }}
                  onClick={handleMenu}
                  color="inherit"
                >
                  <AccountCircle />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={Boolean(anchorEl)}
                  onClose={handleClose}
                >
                  <MenuItem onClick={handleClose}>Profile</MenuItem>
                  <MenuItem onClick={handleClose}>My account</MenuItem>
                </Menu>
              </>
            )}
          </Stack>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
