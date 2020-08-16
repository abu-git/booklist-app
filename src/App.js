import React from 'react';

//Components
import Navbar from './components/Navbar';
import BookList from './components/BookList';
import BookForm from './components/BookForm';

//Context
import BookContextProvider from './contexts/BookContext';

function App() {
  return (
    <div className="App">
      <BookContextProvider>
        <Navbar />
        <BookList />
        <BookForm />
      </BookContextProvider>
    </div>
  );
}

export default App;
