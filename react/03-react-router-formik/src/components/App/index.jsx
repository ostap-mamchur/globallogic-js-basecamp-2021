import { Switch, Redirect, Route } from 'react-router-dom';
import './App.css';
import Users from '../Users';
import Sidebar from '../Sidebar';
import Products from '../Planets';
import NotFound from '../NotFound';

function App() {
  return (
    <div className='App'>
      <Sidebar />
      <div className='content'>
        <Switch>
          <Redirect exact from='/' to='/users' />

          <Route path='/users'>
            <Users />
          </Route>
          <Route path='/planets'>
            <Products />
          </Route>
          <Route>
            <NotFound/>
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
