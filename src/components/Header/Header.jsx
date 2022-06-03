import { Container, Head, Link } from './Header.styled';
import { Outlet } from 'react-router-dom';

export const Header = () => {
  return (
    <Container>
      <Head>
        <Link to={'/'}>Home</Link>
        <Link to={'/movies'}>Movies</Link>
      </Head>
      <Outlet />
    </Container>
  );
};
