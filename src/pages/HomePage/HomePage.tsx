/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { CircularProgress, styled } from '@mui/material';
import { useSearchNeoQuery } from '../../redux/neoApi';
import { INeoList } from '../../interfaces';
import Element from '../../components/Element/Element';

function HomePage() {
  const currentDate = new Date();
  const [day, setDay] = useState(1);
  const [neoList, setNeoList] = useState<INeoList[]>([]);
  const [highlight, setHighlight] = useState(0);
  const { data, isLoading } = useSearchNeoQuery({
    date: `${currentDate.getFullYear()}-${currentDate.getMonth()}-${day}`,
  });

  useEffect(() => {
    if (data?.element_count) {
      const newNeoList = neoList;
      newNeoList.push(data?.near_earth_objects);
      if (newNeoList.length > 6) newNeoList.shift();
      setNeoList(newNeoList);
      let hazard = newNeoList
        .map((el) => {
          const keys = Object.keys(el);
          const neo = [...el[keys[0]]];
          return neo.filter((item) => item.is_potentially_hazardous_asteroid)
            .length;
        })
        .sort((a, b) => b - a);
      const set = new Set(hazard);
      hazard = Array.from(set);
      setHighlight(hazard[1]);
    }
  }, [data]);

  useEffect(() => {
    const timerID = setInterval(() => {
      setDay((prev) => (prev === currentDate.getDate() ? 1 : prev + 1));
    }, 5000);
    return () => clearInterval(timerID);
  }, []);

  const Item = styled(Paper)(() => ({
    backgroundColor: '#618833',
    display: 'flex',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  }));

  return (
    <Box sx={{ flex: '1 0 auto' }} mt={1}>
      <Grid container>
        <Grid xs={2} p={1}>
          <Item>Date</Item>
        </Grid>
        <Grid xs={3} p={1}>
          <Item>Max diameter of NEO</Item>
        </Grid>
        <Grid xs={2} p={1}>
          <Item>Number of potentially hazardous NEOs</Item>
        </Grid>
        <Grid xs={2} p={1}>
          <Item>Closest NEO</Item>
        </Grid>
        <Grid xs={3} p={1}>
          <Item>Fastest NEO</Item>
        </Grid>
      </Grid>
      {neoList.length > 0 &&
        neoList.map((el, idx) => {
          return <Element element={el} key={idx} highlight={highlight} />;
        })}
      {isLoading && <CircularProgress color="secondary" />}
    </Box>
  );
}

export default HomePage;
