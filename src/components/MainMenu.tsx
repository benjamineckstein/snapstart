// eslint-disable-next-line
import React from 'react';
import {Link} from 'react-router-dom';
import {Button, ButtonGroup} from '@material-ui/core';

type MyProps = {
};

function MainMenu(props: MyProps): JSX.Element {
  return (
    <div className="mainmenu">
      <h1>Choose a game mode</h1>
      <div>

        <ButtonGroup variant="outlined" size="large" color="primary" aria-label="text primary button group">
          <Button color="primary" component={Link} to="/groupmode">Group Mode</Button>
          <Button color="primary" component={Link} to="/assessment">Assessment</Button>
          <Button color="primary" component={Link} to="/lookup">Lookup</Button>
        </ButtonGroup>
      </div>
    </div>
  );
}

export default MainMenu;