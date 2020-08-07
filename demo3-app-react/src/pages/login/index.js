import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actionCreators } from './store'
import { 
    DetailWrapper 
 } from "./style.js";

class Login extends Component {

    render () {
        return (
            <div>
                login
            </div>
        );
    }

    componentDidMount() {
        console.log('this.props:',this.props);
        const id = this.props.match.params.id
        this.props.getDetail(id);
    }
}


const mapStateToProps = (state) => {
    return {
        title: state.getIn(['detail', 'title']),
        content: state.getIn(['detail', 'content']),
    }
};

const mapDispathToProps = (dispatch) => {

    return {
        getDetail(id) {
            dispatch(actionCreators.getDeatail(id));
        }
    }
    
};

export default connect(mapStateToProps, mapDispathToProps)(Login);