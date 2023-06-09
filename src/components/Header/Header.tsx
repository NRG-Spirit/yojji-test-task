import { AppBar } from '@mui/material';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';

export default function Header() {
  return (
    <AppBar position="static" color="primary">
      <Box sx={{ display: 'flex' }} m={2}>
        <Link href="/" color="inherit" underline="none" mr={1}>
          Home
        </Link>
        <Link href="/task" color="inherit" underline="none">
          Task
        </Link>
      </Box>
    </AppBar>
  );
}
