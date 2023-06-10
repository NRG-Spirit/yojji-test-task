import { AppBar } from '@mui/material';
import { NavLink } from 'react-router-dom';
import Box from '@mui/material/Box';

export default function Header() {
  return (
    <AppBar position="static" color="primary">
      <Box sx={{ display: 'flex' }} m={2}>
        <NavLink to="/" style={{ color: 'white', marginRight: '.5rem' }}>
          Home
        </NavLink>
        <NavLink to="/task" style={{ color: 'white' }}>
          Task
        </NavLink>
      </Box>
    </AppBar>
  );
}
