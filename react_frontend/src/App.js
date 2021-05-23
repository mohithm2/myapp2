
import './App.css';

import {Home} from './Home';
import {Post} from './Post';
import {Report} from './Report';
import {Navigation} from './Navigation';

import {BrowserRouter, Route, Switch} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <div className="container">
     <h3 className="m-3 d-flex justify-content-center">
       React JS
     </h3>

     <Navigation/>

     <Switch>
       <Route path='/' component={Home} exact/>
       <Route path='/post' component={Post}/>
       <Route path='/report' component={Report}/>
     </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;