import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import AppBar from '@mui/material/AppBar';

export default function LandingAppBar() {
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position='static'>
          <Toolbar>
            <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
              Periate
            </Typography>
            <Button color='inherit'>Sign Up</Button>
            <Button color='inherit'>Logout</Button>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
}
