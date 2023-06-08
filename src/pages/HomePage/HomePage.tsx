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
  const { data } = useSearchNeoQuery({
    date: `${currentDate.getFullYear()}-${currentDate.getMonth()}-${day}`,
  });

  useEffect(() => {
    if (data?.element_count) {
      const newNeoList = neoList;
      newNeoList.push(data?.near_earth_objects);
      if (newNeoList.length > 6) newNeoList.shift();
      setNeoList(newNeoList);
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
      {neoList.length > 0 &&
        neoList.map((el, idx) => {
          return <Element element={el} key={idx} />;
        })}
    </div>
  );
}

export default HomePage;
