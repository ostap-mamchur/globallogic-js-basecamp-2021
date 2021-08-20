import { Switch, Redirect, Route } from 'react-router-dom';
import './App.css';
import Users from '../Users';
import Sidebar from '../Sidebar';
import NotFound from '../NotFound';
import Todos from '../Todos/Todos';

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
          <Route path="/todos">
            <Todos />
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
