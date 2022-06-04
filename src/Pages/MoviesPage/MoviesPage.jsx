import { useEffect, useRef, useState } from 'react';
import { useFormik } from 'formik';
import { createSearchParams, useLocation, useNavigate } from 'react-router-dom';
import { searchMovies } from '../../js/API';
import { FilmList } from '../../components/FilmList/FilmList';
import { Form } from './MoviesPage.styled';
import { Notify } from 'notiflix';

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
  }, [query, location.search, navigate]);

  const formik = useFormik({
    initialValues: {
      query: initial,
    },
    onSubmit: values => {
      const { query } = values;
      if (!query.trim()) {
        Notify.failure('Please enter something in deasch field');
        return;
      }
      setQuery(query.trim());
    },
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
