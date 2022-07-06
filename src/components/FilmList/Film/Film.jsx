import PropTypes from 'prop-types';
import { Item, Link } from './Film.styled';
import { useLocation } from 'react-router-dom';

export const Film = ({ film }) => {
  const location = useLocation()

  return (
    <Item>
      <Link to={`/movies/${film.id}`} state={{from: `${location.pathname}${location.search}`}}>{film.title}</Link>
    </Item>
  );
};

Film.propTypes = {
  film: PropTypes.object.isRequired,
};
