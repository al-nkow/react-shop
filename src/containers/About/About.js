import React, { Component } from 'react';

class About extends Component {

    componentDidMount() {
        console.log('PROPS WITH ROUTER PARAMS: ', this.props);
    }

    render () {
        return (
            <h1>About Page</h1>
        );
    }
}

export default About;