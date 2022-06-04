import { Link } from 'react-router-dom';
import { Container } from '../../components/Header/Header.styled';

const PageNotFound = () => {
  return (
    <Container>
      <h1>
        Page not found go to <Link to={'/'}>Home page</Link>{' '}
      </h1>
    </Container>
  );
};

export default PageNotFound;
