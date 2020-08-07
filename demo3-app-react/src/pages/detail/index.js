import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actionCreators } from './store'
import Header from "../../common/header";
import { 
    DetailWrapper 
 } from "./style.js";

class Detail extends Component {

    render () {
        return (
            <div>
                <Header />
                <DetailWrapper>
                    <h3 className="txt-title">{ this.props.title }</h3>
                    <div className="img-cover">
                        
                    </div>
                    <div className="txt-content">
                    <p dangerouslySetInnerHTML={{ __html: this.props.content }}>
                    </p>             </div>
                </DetailWrapper>
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

export default connect(mapStateToProps, mapDispathToProps)(Detail);