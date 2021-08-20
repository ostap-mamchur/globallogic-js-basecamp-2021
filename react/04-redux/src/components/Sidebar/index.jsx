import { NavLink } from 'react-router-dom';
import './styles.css';

function Sidebar() {
  return (
    <nav className='Sidebar'>
      <ul>
        <li><NavLink className='Item' activeClassName='Active' to='/users'>Users</NavLink></li>
        <li><NavLink className='Item' activeClassName='Active' to='/todos'>Todos</NavLink></li>
      </ul>
    </nav>
  );
}

export default Sidebar;