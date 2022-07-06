import PropTypes from 'prop-types';
import { Film } from './Film/Film';
import { List } from './FilmList.styled';

export const FilmList = ({ list }) => {

  return (
    <List>
      {!!list.length && list.map(film => <Film key={film.id} film={film} />)}
    </List>
  );
};

FilmList.propTypes = {
  list: PropTypes.array.isRequired,
};
