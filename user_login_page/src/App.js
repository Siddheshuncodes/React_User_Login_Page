import AuthContext from './store/AuthContext';
import React, { useContext } from 'react';
import Login from './components/Login/Login';
import Home from './components/Home/Home';
import MainHeader from './components/MainHeader/MainHeader';


function App() {

  const abc = useContext(AuthContext);

  return (

    <React.Fragment>
      <MainHeader />
      <main>
        {!abc.isLoggedIn && <Login />}
        {abc.isLoggedIn && <Home />}
      </main>
    </React.Fragment>
  );
}

export default App;
