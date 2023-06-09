import { Grid, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';
import { INeoList } from '../../interfaces';

interface IProps {
  element: INeoList;
  highlight: number;
}

function Element(props: IProps) {
  const keys = Object.keys(props.element);
  const neo = [...props.element[keys[0]]];
  const maxDiameter = neo.sort((a, b) => {
    return (
      b.estimated_diameter.kilometers.estimated_diameter_max -
      a.estimated_diameter.kilometers.estimated_diameter_max
    );
  })[0];
  const amountHazardousNeo = neo.filter(
    (el) => el.is_potentially_hazardous_asteroid
  ).length;
  const closestNeo = neo.sort((a, b) => {
    return (
      a.close_approach_data[0].miss_distance.astronomical -
      b.close_approach_data[0].miss_distance.astronomical
    );
  })[0];
  const fasterNeo = neo.sort((a, b) => {
    return (
      b.close_approach_data[0].relative_velocity.kilometers_per_hour -
      a.close_approach_data[0].relative_velocity.kilometers_per_hour
    );
  })[0];

  const Item = styled(Paper)(() => ({
    backgroundColor:
      props.highlight <= amountHazardousNeo && amountHazardousNeo > 0
        ? 'red'
        : '#fff',
    display: 'flex',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  }));

  return (
    <Grid container>
      <Grid xs={2} p={1}>
        <Item>{keys[0]}</Item>
      </Grid>
      <Grid xs={3} p={1}>
        <Item>
          {maxDiameter.estimated_diameter.kilometers.estimated_diameter_max}
        </Item>
      </Grid>
      <Grid xs={2} p={1}>
        <Item>{amountHazardousNeo}</Item>
      </Grid>
      <Grid xs={2} p={1}>
        <Item>{closestNeo.name}</Item>
      </Grid>
      <Grid xs={3} p={1}>
        <Item>{fasterNeo.name}</Item>
      </Grid>
    </Grid>
  );
}

export default Element;
