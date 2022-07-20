import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { Header } from './Header/Header';

//lazy imports
const HomePage = lazy(
  () => import('../Pages/HomePage/HomePage') /* webpackChunkName: "home-page" */
);
const Cast = lazy(
  () => import('../Pages/Cast/Cast') /* webpackChunkName: "Cast */
);
const MovieDetailsPage = lazy(
  () =>
    import(
      '../Pages/MovieDetailsPage/MovieDetailsPage'
    ) /* webpackChunkName: "MovieDetailsPage" */
);
const MoviesPage = lazy(
  () =>
    import(
      '../Pages/MoviesPage/MoviesPage'
    ) /* webpackChunkName: "MoviesPage" */
);
const Reviews = lazy(
  () => import('./Reviews/Reviews') /* webpackChunkName: "Reviews" */
);
const Error = lazy(
  () => import('../Pages/404/PageNotFound') /* webpackChunkName: "404 Error" */
);

export const App = () => {
  return (
    <Suspense fallback={<div>hello</div>}>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<HomePage />} />
          <Route path="movies" element={<MoviesPage />} />
          <Route path="movies/:movieId" element={<MovieDetailsPage />}>
            <Route index element={<p></p>} />
            <Route path="reviews" element={<Reviews />} />
            <Route path="cast" element={<Cast />} />
          </Route>
        </Route>
        <Route path="*" element={<Error />} />
      </Routes>
    </Suspense>
  );
};
