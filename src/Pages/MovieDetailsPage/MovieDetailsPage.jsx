import { Outlet, useLocation, useNavigate, useParams } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import { getMovieDetails } from '../../js/API';
import {
  Data,
  DataTitle,
  DataWrapper,
  FilmTitle,
  Image,
  Options,
  Section,
  OptionLink,
  Option,
} from './MovieDetailsPage.styled';
import { getGenres } from '../../js/getGenres';
import PageNotFound from '../404/PageNotFound';

const MovieDetailsPage = () => {
  const [film, setFilm] = useState({});
  const [error, setError] = useState(false);
  const { movieId } = useParams();
  const location = useLocation();
  const navigation = useNavigate();
  const goBackPath = useRef(null);
  const isFirstLoad = useRef(true);

  useEffect(() => {
    if (!isFirstLoad.current) return;
    isFirstLoad.current = false;
    goBackPath.current = location.state?.from || null;

    console.log(goBackPath.current);
  }, [location.state?.from]);

  useEffect(() => {
    getMovieDetails(movieId)
      .then(r => setFilm(r))
      .catch(() => setError(true));
  }, [movieId]);

  const handleGoBackClick = () => {
    console.log(goBackPath.current);
    const path = goBackPath.current || '/';
    navigation(path);
  };

  return (
    <>
      {film.title && (
        <Section>
          <Image src={`https://image.tmdb.org/t/p/w500${film.poster_path}`} />
          <DataWrapper>
            <button type="button" onClick={handleGoBackClick}>
              Go back
            </button>
            <FilmTitle>
              {film.title} ({film.release_date.slice(0, 4)})
            </FilmTitle>
            <Data>User score: {Math.round(film.popularity)}%</Data>
            <DataTitle>Overview</DataTitle>
            <Data>{film.overview}</Data>
            <DataTitle>Genres</DataTitle>
            <Data>{getGenres(film.genres)}</Data>
            <DataTitle>Additional information</DataTitle>
            <Options>
              <Option>
                <OptionLink to={'cast'}>Cast</OptionLink>
              </Option>
              <Option>
                <OptionLink to={'reviews'}>Reviews</OptionLink>
              </Option>
            </Options>
            <Outlet />
          </DataWrapper>
        </Section>
      )}

      {error && <PageNotFound />}
    </>
  );
};

export default MovieDetailsPage;
