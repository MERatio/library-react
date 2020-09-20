import React from 'react';

function BookFormModalBtn() {
	return (
		<div className="d-flex justify-content-center my-4">
			<button
				type="button"
				className="btn btn-primary"
				data-toggle="modal"
				data-target="#modalForm"
			>
				Add Book to Library
			</button>
		</div>
	);
}

export default BookFormModalBtn;
