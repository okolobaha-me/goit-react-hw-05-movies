import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from '../../js/API';
import { Name, Review, ReviewList, Text } from './Reviews.styled';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [noRev, setNoRev] = useState(false);
  const { movieId } = useParams();

  useEffect(() => {
    getMovieReviews(movieId).then(r => {
      if (!r.length) {
        setNoRev(true);
        return;
      }
      setReviews(r);
    });
  }, [movieId]);

  return (
    <ReviewList>
      {!!reviews.length &&
        reviews.map(rev => (
          <Review key={rev.id}>
            <Name>{rev.author}</Name>
            <Text>{rev.content}</Text>
          </Review>
        ))}
      {!!noRev && <p>There is no any review yet</p>}
    </ReviewList>
  );
};

export default Reviews;
