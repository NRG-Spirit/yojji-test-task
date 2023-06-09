/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/control-has-associated-label */
import { AppBar, Typography } from '@mui/material';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';

export default function Footer() {
  return (
    <AppBar
      position="static"
      color="secondary"
      sx={{
        flex: '0 0 auto',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
        m={2}
      >
        <Typography
          variant="subtitle1"
          component="h4"
          sx={{
            color: 'black',
          }}
        >
          2023
        </Typography>
        <Link
          href="https://github.com/NRG-Spirit"
          color="inherit"
          underline="none"
        >
          <Avatar alt="Git" src="./img/git-logo.png" />
        </Link>
      </Box>
    </AppBar>
  );
}
