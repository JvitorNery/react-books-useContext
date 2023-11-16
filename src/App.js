import { useContext, useEffect } from 'react';
import BookCreate from './components/BookCreate';
import BookList from './components/BookList';
import BooksContext from './context/books';

function App() {
  const {stableFatchBooks} = useContext(BooksContext);

  useEffect(() => {
    stableFatchBooks();
  }, [stableFatchBooks]);  

  return (
    <div className="app">
      <h1>Reading List</h1>
      <BookList />
      <BookCreate />
    </div>
  );
}

export default App;
