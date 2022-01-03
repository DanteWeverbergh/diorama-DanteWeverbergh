import { Link } from 'react-router-dom';
import Video from '../Video/Video.mov';

function Start() {
  // const nameInput = document.getElementById('name').value;

  return (
    <>
      <video id="video" className="videoTag" autoPlay loop muted>
        <source src={Video} />
      </video>

      <div className="overlay">
        <div className="content">
          <h1>Welkom</h1>
          <p>Vind het juiste cadeau en krijg een leuke boodschap.</p>
          <div className="input">
            <input id="name" type="text" placeholder="name" value={''} />
          </div>

          <button onClick={() => console.log(document.getElementById('name'))}>
            Test
          </button>

          <Link className="link" to={`/diorama/joske`}>
            Start
          </Link>
        </div>
      </div>
    </>
  );
}

export default Start;
