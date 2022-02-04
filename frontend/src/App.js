// importing all the relevant components needed to render
import React from 'react';
import FrontLogo from './components/frontlogo';
import SearchBar from './components/searchbar'
import Favourites from './components/favourites';
import Header from './components/header';


// App component is basically just the home component for all the other components
function App() {
  return (
    <div className='App' id='Home'>
      <header className='App-header'>
        <Header />
      </header>
      <main>
        <FrontLogo />
        <hr/>
        <SearchBar />
        <hr/>
        <Favourites />
      </main>
    </div>
  );
}

export default App;
