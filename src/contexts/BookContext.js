/*
	This is a context for all the book data

	NOTE: The filter method is it iterates through the array
	if item matches a CERTAIN CONDITION e.g book.id !== id (it returned true) 
	it keeps it in array else (it returned false) it removes it
*/
import React, { createContext, useReducer, useEffect } from 'react';
import { bookReducer } from '../reducers/bookReducer';

//note: same as name of file
export const BookContext = createContext();

const BookContextProvider = (props) => {
	const [books, dispatch] = useReducer(bookReducer, [], () =>{
		const localData = localStorage.getItem('books');
		return localData ? JSON.parse(localData) : [];
	});

	useEffect(() =>{
		localStorage.setItem('books', JSON.stringify(books))
	}, [books]);
	return(
		<BookContext.Provider value={{ books, dispatch }}>
			{props.children}
		</BookContext.Provider>
	);
}

export default BookContextProvider;