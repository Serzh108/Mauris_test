import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import DatePage from './pages/DatePage/DatePage.js';
import SeriesPage from './pages/SeriesPage/SeriesPage';
import './styles/App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">Super film</header>
      <Switch>
        <Route path="/" exact component={DatePage} />
        <Route path="/series" component={SeriesPage} />
        <Redirect to="/" />
      </Switch>
    </div>
  );
}

export default App;
