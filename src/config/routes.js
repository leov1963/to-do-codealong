import { Switch, Route } from "react-router-dom";
import Home from '../components/Home';
import ToDosContainer from '../containers/ToDosContainer';


export default(
    <Switch>
        <Route exact path="/" component={ Home } />
        <Route exact path="/todos" component={ ToDosContainer } />
    </Switch>    
);