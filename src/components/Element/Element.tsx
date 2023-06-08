import styles from './Element.module.css';
import { INeoList } from '../../interfaces';

interface IProps {
  element: INeoList;
}

function Element(props: IProps) {
  const keys = Object.keys(props.element);
  const neo = [...props.element[keys[0]]];
  const maxDiameter = neo.sort((a, b) => {
    return (
      a.estimated_diameter.kilometers.estimated_diameter_max -
      b.estimated_diameter.kilometers.estimated_diameter_max
    );
  })[0];
  const amountHazardousNeo = neo.filter(
    (el) => el.is_potentially_hazardous_asteroid
  ).length;
  const closestNeo = neo.sort((a, b) => {
    return (
      b.close_approach_data[0].miss_distance.astronomical -
      a.close_approach_data[0].miss_distance.astronomical
    );
  })[0];
  const fasterNeo = neo.sort((a, b) => {
    return (
      a.close_approach_data[0].relative_velocity.kilometers_per_hour -
      b.close_approach_data[0].relative_velocity.kilometers_per_hour
    );
  })[0];

  return (
    <div className={styles.wrapper}>
      <div>{keys[0]}</div>
      <div>{maxDiameter.name}</div>
      <div>{amountHazardousNeo}</div>
      <div>{closestNeo.name}</div>
      <div>{fasterNeo.name}</div>
    </div>
  );
}

export default Element;
