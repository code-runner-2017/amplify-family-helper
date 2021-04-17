import logo from './logo.svg';
import './App.css';
import Amplify from 'aws-amplify'
import awsConfig from './aws-exports'
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';

Amplify.configure(awsConfig);

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Hello!</h1>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <AmplifySignOut />
    </div>
  );
}

export default withAuthenticator(App);
