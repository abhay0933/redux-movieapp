import { useState } from 'react';
import './App.css';
import { fetchData } from './utils/api';
// import { Provider } from 'react';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import Home from './Components/Home';

function App() {
  

  return (
    <>
    <Provider store={store}>
      <h1>app</h1>
      <Home />
    </Provider>
    </>
  )
}

export default App
