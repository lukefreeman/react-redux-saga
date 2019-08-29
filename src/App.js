import React, { Component } from 'react';
import {connect} from 'react-redux';
import { fetchUser } from './actions/users';

import Panel from './components/panel';

import './sass/app.scss';

class App extends Component {

    constructor() {
        super();
        this.myVar = "test";
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
            <div>
                <Panel id={this.props.users.user.id} />
            </div>
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