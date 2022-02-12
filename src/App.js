import './App.css';
import { useSelector } from 'react-redux';
function App() {
  const counter = useSelector((state) => state.counterReducer);
  const isloggedIn = useSelector((state) => state.loggedReducer);
  const privateData = <h3>You're single</h3>;
  return (
    <div className='App'>
      <header className='App-header'>
        <h1>Hello World :{counter}</h1>
        {isloggedIn ? privateData : ''}
      </header>
    </div>
  );
}

export default App;
