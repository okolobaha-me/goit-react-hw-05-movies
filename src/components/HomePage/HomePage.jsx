import { getTrend } from '../../js/API';
import { useEffect, useState } from 'react';
import { FilmList } from '../FilmList/FilmList';

const HomePage = () => {
  const [list, setList] = useState([]);

  useEffect(() => {
    getTrend().then(r => setList(r));
  }, []);

  return <FilmList list={list} />;
};

export default HomePage;
