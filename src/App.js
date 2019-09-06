import React, { Component } from 'react';
import {connect} from 'react-redux';
import { fetchUser } from './actions/users';
import GeoSpacial from './utils/GeoSpacial.utils';

import './sass/app.scss';

class App extends Component {

    constructor() {
        super();
    }

    /**
    * ----------------------------------------------------------------------
    * componentDidMount
    * ----------------------------------------------------------------------
    */
    componentDidMount() {
        this.props.fetchUser(2);
    }

    /**
    * ----------------------------------------------------------------------
    * render
    * ----------------------------------------------------------------------
    */
    render() {
        return (
            <div/>
        );
    }
      
}

function mapStateToProps(state){
    return { 
        users: state.user
    }
}

export default connect(mapStateToProps, { 
    fetchUser
})(App);