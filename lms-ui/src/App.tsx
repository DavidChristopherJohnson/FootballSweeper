import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { getTeams } from './services/fixtures-service';
import TeamListComponent from './components/TeamListComponent';

function App() {
  const [teams, initTeams] = useState<Array<any>>([]);

  useEffect(() => {
    getTeams()
    .then(teams => initTeams(teams))
  }, [])



  return (
    <div className="App">
      {/* <header className="App-header">
        Lets get some teams
      </header> */}
      <TeamListComponent teamList={teams} />
    </div>
  );
}

export default App;
