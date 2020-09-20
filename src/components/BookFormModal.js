import React from 'react';

function BookFormModal() {
	return (
		<div
			className="modal fade"
			id="modalForm"
			tabIndex="-1"
			role="dialog"
			aria-labelledby="modalFormLabel"
		>
			<div className="modal-dialog" role="document">
				<div className="modal-content">
					<div className="modal-header">
						<h5 className="modal-title" id="modalFormLabel">
							Enter Book Information
						</h5>
						<button
							type="button"
							className="close"
							data-dismiss="modal"
							aria-label="Close"
						>
							<span aria-hidden="true">&times;</span>
						</button>
					</div>
					<div className="modal-body">
						<form id="bookForm">
							<div className="form-group">
								<label htmlFor="bookTitle">Book Title</label>
								<input
									type="text"
									className="form-control"
									id="bookTitle"
									required
								/>
							</div>
							<div className="form-group">
								<label htmlFor="bookAuthor">Book Author</label>
								<input
									type="text"
									className="form-control"
									id="bookAuthor"
									required
								/>
							</div>
							<div className="form-group">
								<label htmlFor="bookPages">Book Pages</label>
								<input
									type="number"
									className="form-control"
									id="bookPages"
									min="1"
									required
								/>
							</div>
							<div className="form-group">
								<label className="d-block">Have you read this book?</label>
								<div className="form-check form-check-inline">
									<input
										className="form-check-input"
										type="radio"
										name="readed"
										id="readedNo"
										value="No"
									/>
									<label className="form-check-label" htmlFor="readedNo">
										No
									</label>
								</div>
								<div className="form-check form-check-inline">
									<input
										className="form-check-input"
										type="radio"
										name="readed"
										id="readedYes"
										value="Yes"
									/>
									<label className="form-check-label" htmlFor="readedYes">
										Yes
									</label>
								</div>
							</div>
							<hr />
							<div className="d-flex justify-content-end">
								<button
									type="button"
									className="btn btn-secondary mr-2"
									data-dismiss="modal"
								>
									Close
								</button>
								<button
									type="submit"
									className="btn btn-primary"
									id="bookFormSubmit"
								>
									Add Book to Library
								</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
}

export default BookFormModal;
