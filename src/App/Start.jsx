import { Link } from 'react-router-dom';
import Video from '../Video/Video.mov';

function Start() {
  const name = 'Dante';
  return (
    <>
      <div className="container">
        {/**
        <video id="video" className="videoTag" autoPlay loop muted>
          <source src={Video} />
        </video>
         */}

        <div className="overlay">
          <div className="content">
            <h1>Welkom</h1>
            <p>
              Zoek het juiste cadeautje en krijg een gepersonaliseerde
              boodschap!
            </p>
            <input id="name" type="text" placeholder="Naam" />

            <Link className="link" to={`/diorama/${name}`}>
              Start
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Start;
