import styles from './HomePage.module.css';
import { useSearchNeoQuery } from '../../redux/neoApi';

function HomePage() {
  const { data, isLoading } = useSearchNeoQuery({
    startDate: '2023-01-01',
    endDate: '2023-01-01',
  });

  return <div className={styles.error}>Home</div>;
}

export default HomePage;
