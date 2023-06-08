/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import styles from './HomePage.module.css';
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

  return (
    <div className={styles.wrapper}>
      <div className={styles.head}>
        <div className={styles.cell}>Date</div>
        <div className={styles.cell}>Max diameter of NEO</div>
        <div className={styles.cell}>Number of potentially hazardous NEOs</div>
        <div className={styles.cell}>Closest NEO</div>
        <div className={styles.cell}>Fastest NEO</div>
      </div>
      <div className={styles.data}>
        {neoList.length > 0 &&
          neoList.map((el, idx) => {
            return <Element element={el} key={idx} highlight={highlight} />;
          })}
      </div>
      {isLoading && <div>Loading..</div>}
    </div>
  );
}

export default HomePage;
