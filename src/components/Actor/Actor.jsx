import { useEffect, useState } from 'react';
import { getActorPhoto } from '../../js/API';
import { ActorImage, ActorItem, Text } from './Actor.styled';
import PropTypes from 'prop-types';
import { BsFillPersonFill } from 'react-icons/bs';
import { IconContext } from 'react-icons';

export const Actor = ({ actor }) => {
  const [image, setImage] = useState(``);

  useEffect(() => {
    getActorPhoto(actor.id).then(r => {
      if (!r) return;
      setImage(`https://image.tmdb.org/t/p/w500${r}`);
    });
  }, [actor.id]);

  return (
    <ActorItem>
      {!!image ? (
        <ActorImage src={image} />
      ) : (
        <IconContext.Provider
          value={{
            size: '100px',
            style: { verticalAlign: 'middle', height: '150px' },
          }}
        >
          <BsFillPersonFill width={100} />
        </IconContext.Provider>
      )}
      <Text>{actor.name}</Text>
      <Text>{actor.character}</Text>
    </ActorItem>
  );
};

Actor.propTypes = {
  actor: PropTypes.object.isRequired,
};
