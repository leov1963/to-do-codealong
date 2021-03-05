import { Switch, Route } from 'react-router-dom'
import Home from './components/Home';
import ToDosContainer from './containers/ToDosContainer';
import Header from './components/Header';
import routes from './config/routes'

function App() {
  return (
    <div className="container">
      <Header />
      {routes}
      <h1>hello!</h1>
    </div>
  );
}

export default App;
