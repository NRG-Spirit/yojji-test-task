/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import styles from './HomePage.module.css';
import { useSearchNeoQuery } from '../../redux/neoApi';
import { INeoList } from '../../interfaces';

function HomePage() {
  const currentDate = new Date();
  const [day, setDay] = useState(1);
  const [neoList, setNeoList] = useState<INeoList[]>([]);
  const { data, isLoading } = useSearchNeoQuery({
    date: `${currentDate.getFullYear()}-${currentDate.getMonth()}-${day}`,
  });

  useEffect(() => {
    if (data?.element_count) {
      /*       const keys = Object.keys(data?.near_earth_objects); */
      /*       setNeoList(data?.near_earth_objects[keys[0]]); */
      const newNeoList = neoList;
      newNeoList.push(data?.near_earth_objects);
      if (newNeoList.length > 6) newNeoList.shift();
      setNeoList(newNeoList);
    }
  }, [data]);

  useEffect(() => {
    const timerID = setInterval(() => {
      setDay((prev) => prev + 1);
    }, 5000);
    return () => clearInterval(timerID);
  }, []);
  console.log(neoList);

  return <div className={styles.error}>{neoList.length}{day}</div>;
}

export default HomePage;
