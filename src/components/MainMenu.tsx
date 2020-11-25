// eslint-disable-next-line
import React from 'react';
import {Link} from 'react-router-dom';

type MyProps = {
};

function MainMenu(props: MyProps): JSX.Element {
  return (
    <div className="mainmenu">
      <h1>Choose a game mode</h1>
      <Link to="/groupmode">Group Mode</Link>
      <Link to="/assessment">Assessment</Link>
      <Link to="/lookup">Lookup</Link>
    </div>
  );
}

export default MainMenu;