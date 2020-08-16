/*
	This is a context for all the book data

	NOTE: The filter method is it iterates through the array
	if item matches a CERTAIN CONDITION e.g book.id !== id (it returned true) 
	it keeps it in array else (it returned false) it removes it
*/
import React, { createContext, useState } from 'react';
import { v4 } from 'uuid';

//note: same as name of file
export const BookContext = createContext();

const BookContextProvider = (props) => {
	const [books, setBooks] = useState([
		{title: 'name of the wind', author: 'patrick rothfuss', id: 1},
		{title: 'the final empire', author: 'brandon sanderson', id: 2,}
	]);

	const addBook = (title, author) => {
		setBooks([...books, { title, author, id: v4() }]);
	};

	const removeBook = (id) => {
		setBooks(books.filter(book => book.id !== id));
	};

	return(
		<BookContext.Provider value={{ books, addBook, removeBook }}>
			{props.children}
		</BookContext.Provider>
	);
}

export default BookContextProvider;