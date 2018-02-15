import React from "react";

const SearchBox = ({onClickEvent}) => {
	return (
		<div className="pa2">
			<input
				className="pa3 ba b--green bg-lightest-blue"
				type="search"
				onClick={onClickEvent} 
			/>
		</div>
	);
}

export default SearchBox;