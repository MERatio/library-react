import React from 'react';
import Book from './Book';

function BooksTable(props) {
	const books = props.books.map((book, index) => {
		return <Book key={index} data={book} />;
	});

	return (
		<div className="col-12">
			<table className="table books-table">
				<thead>
					<tr>
						<th scope="col">Title</th>
						<th scope="col">Author</th>
						<th scope="col">Pages</th>
						<th scope="col">Readed</th>
						<th scope="col">Delete</th>
					</tr>
				</thead>
				<tbody id="booksTableBody">{books}</tbody>
			</table>
		</div>
	);
}

export default BooksTable;
