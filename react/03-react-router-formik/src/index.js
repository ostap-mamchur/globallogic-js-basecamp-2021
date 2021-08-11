import { StrictMode } from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';
import Root from './components/Root';
import './styles.css';

const rootElement = document.getElementById('root');
ReactDOM.render(
  <StrictMode>
    <Root>
      <App />
    </Root>
  </StrictMode>,
  rootElement
);
