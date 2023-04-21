import React from "react";
import './Menu.css';


const Menu = () => {
	return (
		<>
			<section className="menu component">
				<button className="selected"> Latest </button>
				<button> Best </button>
				<button> Upload new </button>
			</section>
			<hr />
		</>
	);
};

export default Menu;
