import React from 'react';

//Components
import Navbar from './components/Navbar';
import BookList from './components/BookList';

//Context
import BookContextProvider from './contexts/BookContext';

function App() {
  return (
    <div className="App">
      <BookContextProvider>
        <Navbar />
        <BookList />
      </BookContextProvider>
    </div>
  );
}

export default App;
