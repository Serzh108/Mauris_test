import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import DatePage from './pages/DatePage/DatePage.js';
import SeriesPage from './pages/SeriesPage/SeriesPage';
import SimpleModal from './components/Modal/Modal';
import './styles/App.css';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">Super film</header> */}
      <Switch>
        <Route path="/" exact component={DatePage} />
        <Route path="/series" component={SeriesPage} />
        <Route path="/modal" component={SimpleModal} />
        <Redirect to="/" />
      </Switch>
    </div>
  );
}

export default App;
