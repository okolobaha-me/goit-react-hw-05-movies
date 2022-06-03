import { useEffect, useState } from 'react';
import { getActorPhoto } from '../../js/API';
import { ActorImage, ActorItem, Text } from './Actor.styled';
import PropTypes from 'prop-types';

export const Actor = ({ actor }) => {
  const [image, setImage] = useState(``);

  useEffect(() => {
    getActorPhoto(actor.id).then(r => {
      setImage(`https://image.tmdb.org/t/p/w500${r}`);
    });
  }, [actor.id]);

  return (
    <ActorItem>
      {!!image && <ActorImage src={image} />}
      <Text>{actor.name}</Text>
      <Text>{actor.character}</Text>
    </ActorItem>
  );
};

Actor.propTypes = {
  actor: PropTypes.object.isRequired,
};
