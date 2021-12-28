import { Link } from 'react-router-dom';
import Video from '../Video/Video.mov';

function Start() {
  return (
    <>
      <video id="video" className="videoTag" autoPlay loop muted>
        <source src={Video} />
      </video>

      <div className="overlay">
        <div className="content">
          <h1>Welkom</h1>
          <p>Vind het juiste cadeau en krijg een leuke boodschap.</p>

          <Link className="link" to={`/diorama`}>
            Start
          </Link>
        </div>
      </div>
    </>
  );
}

export default Start;
