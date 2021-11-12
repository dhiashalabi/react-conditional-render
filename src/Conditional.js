import React from "react";

export default class Conditional extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        // return (
        //     <div>
        //         {this.props.isLoading ? <h1>Loading...</h1> : <h1>Some cool stuff about conditional rendering</h1>}
        //     </div>
        // )
        // return (
        //     this.props.isLoading ? <h1>Loading...</h1> : <h1>Some cool stuff about conditional rendering</h1>
        // )
        // if (this.props.isLoading) {
        //     return (
        //         <h1>Loading...</h1>
        //     )
        // }
        return (
            <h1>Some cool stuff about conditional rendering</h1>
        );
    }
}

