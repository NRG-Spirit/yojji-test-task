import { Box, Typography } from '@mui/material';

function ErrorPage() {
  return (
    <Box
      sx={{
        flex: '1 0 auto',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
      }}
    >
      <Typography variant="h1" component="h1">
        404
      </Typography>
      <Typography variant="h6" component="h4">
        Sorry, an unexpected error has occurred.
      </Typography>
    </Box>
  );
}

export default ErrorPage;
