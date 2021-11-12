import React, { Component } from "react";
import Conditional from "./Conditional";

export default class App extends Component {
    constructor() {
        super();
        this.state = {
            isLoading: true
        }
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({
                isLoading: false
            })
        }, 1500)
    }

    render() {
        return (
            <div>
                {this.state.isLoading ? <h1>Loading...</h1> : <Conditional />}
            </div>
        );
    }
}

