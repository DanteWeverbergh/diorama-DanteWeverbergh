import { Link } from 'react-router-dom';
import Video from '../Video/Video.mov';
import { useState } from 'react';

function Start() {
  // const nameInput = document.getElementById('name').value;
  const [name, setName] = useState('');

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
            <input
              id="name"
              type="text"
              placeholder="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <Link className="link" to={`/diorama/${name}`}>
            Start
          </Link>
        </div>
      </div>
    </>
  );
}

export default Start;
