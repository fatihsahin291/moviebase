import Page from "./Page";

function Paging({ page, setPage }) {
	const pageNum = 30;

	return (
		<div className="paging">
			<button
				className="paging-button"
				disabled={page === 1}
				onClick={() => setPage(page - 1)}
			>
				Previous
			</button>

			{Array(pageNum)
				.fill()
				.map((_, index) =>
					index > page - 5 && index < page + 5 ? (
						index + 1 === page ? (
							<Page
								key={index}
								page={index + 1}
								setPage={setPage}
								active={true}
							/>
						) : (
							<Page
								key={index}
								page={index + 1}
								setPage={setPage}
								active={false}
							/>
						)
					) : null
				)}

			<button
				className="paging-button"
				disabled={page === pageNum}
				onClick={() => setPage(page + 1)}
			>
				Next
			</button>
		</div>
	);
}

export default Paging;
