import styles from './Element.module.css';
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

  return (
    <div
      className={
        props.highlight <= amountHazardousNeo && amountHazardousNeo > 0
          ? styles.wrapper_highlight
          : styles.wrapper
      }
    >
      <div className={styles.cell}>{keys[0]}</div>
      <div className={styles.cell}>
        {maxDiameter.estimated_diameter.kilometers.estimated_diameter_max}
      </div>
      <div className={styles.cell}>{amountHazardousNeo}</div>
      <div className={styles.cell}>{closestNeo.name}</div>
      <div className={styles.cell}>{fasterNeo.name}</div>
    </div>
  );
}

export default Element;
