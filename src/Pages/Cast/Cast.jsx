import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getMovieCredits } from '../../js/API';
import { Actors } from './Cast.styled';
import { Actor } from '../../components/Actor/Actor';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    getMovieCredits(movieId).then(r => setCast(r));
  }, [movieId]);

  return (
    <Actors>
      {!!cast.length &&
        cast.slice(0, 12).map(actor => <Actor key={actor.id} actor={actor} />)}
    </Actors>
  );
};

export default Cast;
