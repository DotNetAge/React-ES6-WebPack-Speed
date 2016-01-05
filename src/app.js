import React, {Component} from "react";
import {render} from "react-dom";
import Nav from "./components/Nav";
import "./app.less"

class App extends Component {

    render() {
        return (
            <div>
            	<Nav />
                <h1>Page Header</h1>
                <p>Here is the page content</p>
            </div>
        );
    }

}

render(<App />, document.getElementById('app'));