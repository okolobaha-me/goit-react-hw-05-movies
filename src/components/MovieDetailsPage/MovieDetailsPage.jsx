import { Outlet, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
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

const MovieDetailsPage = () => {
  const [film, setFilm] = useState({});
  const { movieId } = useParams();

  useEffect(() => {
    getMovieDetails(movieId).then(r => setFilm(r));
  }, [movieId]);

  return (
    <>
      {film.title && (
        <Section>
          <Image src={`https://image.tmdb.org/t/p/w500${film.poster_path}`} />
          <DataWrapper>
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
    </>
  );
};

export default MovieDetailsPage;
