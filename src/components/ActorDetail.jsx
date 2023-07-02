import { useEffect, useState } from 'react';
import CardInfo from './CardInfo';

const ActorDetail = ({ id }) => {
  const [actor, setActor] = useState([]);
  const cardSize = 280;
  const imageSize = 90;

  useEffect(() => {
    fetch(`https://api.tvmaze.com/shows/${id}/cast`)
      .then((response) => response.json())
      .then((results) => {
        console.log(results);
        setActor(results);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [id]);

  return (
    <div className='container-sm text-center m-5'>
      <div style={{color:'white'}} className='row row-cols-auto ml-10'>
        {actor.map((actor, index) => (
          <CardInfo 
            key={index}
            image={actor.person.image.medium}
            title={actor.person.name}
            info=''
            text={`as ${actor.character.name}`}
            cardSize={cardSize}
            imageSize={imageSize}
          />
        ))}
      </div>
    </div>
  );
};
export default ActorDetail
