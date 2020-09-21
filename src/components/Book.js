import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExchangeAlt, faTrash } from '@fortawesome/free-solid-svg-icons';

function Book(props) {
	const { data, handleReadStatusChange, handleBookDelete } = props;

	return (
		<tr data-bookid={data.id}>
			<td>{data.title}</td>
			<td>{data.author}</td>
			<td>{data.pages}</td>
			<td>
				{data.readed}
				<button
					className="btn btn-warning read-status-btn ml-3"
					onClick={handleReadStatusChange}
				>
					<FontAwesomeIcon
						icon={faExchangeAlt}
						className="read-status-btn pointer-events-none"
					/>
				</button>
			</td>
			<td>
				<button
					className="btn btn-danger delete-book-btn"
					onClick={handleBookDelete}
				>
					<FontAwesomeIcon icon={faTrash} className="pointer-events-none" />
				</button>
			</td>
		</tr>
	);
}

export default Book;
