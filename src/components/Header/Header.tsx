import { AppBar } from '@mui/material';
import { NavLink } from 'react-router-dom';
import Box from '@mui/material/Box';

export default function Header() {
  return (
    <AppBar position="static" color="primary">
      <Box sx={{ display: 'flex' }} m={2}>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/task">Task</NavLink>
      </Box>
    </AppBar>
  );
}
