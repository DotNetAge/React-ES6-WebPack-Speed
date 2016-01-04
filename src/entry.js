import React, {Component} from "react";
import {render} from "react-dom";

class HelloWorld extends Component {

    render() {

        return (

            <div>
                <h1>Why not refresh?s</h1>
                <p>
                Hello {this.props.name} . Welcome s!</p>
            </div>
        );

    }

}

render(<HelloWorld name='Ray'/>, document.getElementById('app'));