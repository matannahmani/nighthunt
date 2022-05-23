import Typography from '@mui/material/Typography';
import MuiLink from '@mui/material/Link';

export default function Copyright() {
  return (
    <Typography
      sx={{
        position: 'absolute',
        bottom: 16,
      }}
      mt="auto"
      variant="body2"
      color="text.secondary"
      align="center"
    >
      {'Copyright © '}
      <MuiLink color="inherit" href="https://nighthunt.app/">
        Nighthunt.app
      </MuiLink>{' '}
      {new Date().getFullYear()}.
    </Typography>
  );
}
