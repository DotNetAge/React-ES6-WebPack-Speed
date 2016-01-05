import React, {Component} from "react";
import {render} from "react-dom";

import "./Nav.less"

class Nav extends Component {
	render() {
		return (
				<div className="navbar">
					<ul>
						<li><a href="#">Home</a></li>
					</ul>
				</div>
			);
	}
}

export default Nav;