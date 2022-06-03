import { useEffect, useRef, useState } from 'react';
import { useFormik } from 'formik';
import { createSearchParams, useLocation, useNavigate } from 'react-router-dom';
import { searchMovies } from '../../js/API';
import { FilmList } from '../FilmList/FilmList';
import { Form } from './MoviesPage.styled';

const MoviesPage = () => {
  const [films, setFilms] = useState([]);
  const [query, setQuery] = useState('');
  const location = useLocation();
  const navigate = useNavigate();

  const firstRender = useRef(true);
  const initial = new URLSearchParams(location.search).get('query') ?? '';

  useEffect(() => {
    if (firstRender.current) {
      setQuery(new URLSearchParams(location.search).get('query') ?? '');
      firstRender.current = false;
      return;
    }

    searchMovies(query).then(r => {
      setFilms(r);
    });

    navigate({
      // pathname: 'listing',
      search: createSearchParams({
        query: query,
      }).toString(),
    });
  }, [query]);

  const formik = useFormik({
    initialValues: {
      query: initial,
    },
    onSubmit: values => setQuery(values.query),
  });

  return (
    <>
      <Form onSubmit={formik.handleSubmit}>
        <label>
          <input
            id="query"
            name="query"
            type={'text'}
            value={formik.values.query}
            onChange={formik.handleChange}
          />
        </label>
        <button type={'submit'}>search</button>
      </Form>
      {!!films.length && <FilmList list={films} />}
    </>
  );
};

export default MoviesPage;
