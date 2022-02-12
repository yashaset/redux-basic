import './App.css';
import { useSelector, useDispatch } from 'react-redux';

import { increment, decrement } from './actions';

function App() {
  const counter = useSelector((state) => state.counterReducer);
  const isloggedIn = useSelector((state) => state.loggedReducer);
  const dispatch = useDispatch();

  const privateData = <h3>You're single</h3>;
  return (
    <div className='App'>
      <header className='App-header'>
        <h1>Hello World :{counter}</h1>
        <button
          onClick={() => {
            dispatch(increment());
          }}
        >
          +
        </button>
        <button
          onClick={() => {
            dispatch(decrement());
          }}
        >
          -
        </button>
        {isloggedIn ? privateData : ''}
      </header>
    </div>
  );
}

export default App;
