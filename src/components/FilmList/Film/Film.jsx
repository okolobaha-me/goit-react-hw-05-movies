import PropTypes from 'prop-types';
import { Item, Link } from './Film.styled';

export const Film = ({ film }) => {
  return (
    <Item>
      <Link to={`/movies/${film.id}`}>{film.title}</Link>
    </Item>
  );
};

Film.propTypes = {
  film: PropTypes.object.isRequired,
};
