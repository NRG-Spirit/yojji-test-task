import { Box, Typography } from '@mui/material';

function TaskPage() {
  return (
    <Box
      sx={{
        flex: '1 0 auto',
        textAlign: 'left',
        paddingLeft: '1rem',
      }}
    >
      <Typography
        variant="h3"
        component="h1"
        sx={{
          textAlign: 'center',
        }}
      >
        Interview task
      </Typography>
      <Typography variant="h6" component="h3">
        Requirements:
      </Typography>
      <ul>
        <li>use React, React hooks, vite, obligatory</li>
        <li>
          use best practices to structure the application, consider that it will
          be extended with additional features in the future
        </li>
        <li>use any React UI Component Library, obligatory</li>
        <li>
          provide means for configuration for different environments (DEV/PROD),
          if have experience! -- hint: use env variable
        </li>
        <li>
          cover partially with unit tests (in order to demonstrate the
          approaches, if have experience)
        </li>
        <li>use github as version control system, obligatory</li>
        <li>
          split your job into several parts and do about 5-10 logical commits
          (do it every 1-2 hours)
        </li>
      </ul>
      <Typography variant="h6" component="h3">
        Initial data:
      </Typography>
      <ul>
        <li>
          use <a href="https://api.nasa.gov">api.nasa.gov</a>
        </li>
        <li>get the API-KEY=*****************, if expired - please register</li>
        <li>
          documentation: <a href="https://api.nasa.gov">https://api.nasa.gov</a>{' '}
          - Browse APIs - Asteroids NeoWs
        </li>
      </ul>
      <Typography variant="h6" component="h3">
        Task:
      </Typography>
      <Typography variant="body1" component="p">
        Create a single page React application with information about near
        orbital objects (NEO), organized in list with a maximum of 6 elements.
        New element should be added every 5 seconds and contain aggregated data
        about a single day. The oldest element should be removed on new element
        if list is full. You should start fetching data from 1st day of the
        month till today. When reach today, start from the 1st day again.
      </Typography>
      <Typography variant="body1" component="p">
        Every element should contain the following data: - max estimated
        diameter of NEO in kilometers for the day (check estimateddiametermax
        property) - number of potentially hazardous NEOs per day (check
        ispotentiallyhazardousasteroid property) - closest NEO (missdistance in
        km) - fastest NEO (relative_velocity in kph)
      </Typography>
      <Typography variant="body1" component="p">
        Elements with the 2 highest numbers of hazard objects should have red
        background and updated with each new element added.
      </Typography>
      <Typography variant="h6" component="h3">
        Submit your work:
      </Typography>
      <ul>
        <li>send link to the git repo</li>
        <li>send link to github pages (to see live demo)</li>
      </ul>
      <Typography variant="body1" component="p">
        PS: Estimated time 4-6 hours(could be less or more depended on code
        quality)
      </Typography>
    </Box>
  );
}

export default TaskPage;
