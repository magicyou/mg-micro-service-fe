import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { actionCreators } from '../store'

import { 
    TopicWrapper, 
    TopicItem
 } from "../style.js";

class Topic extends Component {
    render () {
        let { topicList } = this.props;
        console.log('topicList:', topicList);
        topicList = topicList.toJS();

        return (
            <TopicWrapper>
                {
                    topicList.map((item)=>{
                        return (
                        <TopicItem key={ item.id }>
                            <Link to="/detail">
                                <img src={ item.imgUrl } alt="" />
                                <span>{ item.name }</span>
                            </Link>
                        </TopicItem>
                        );
                    })
                }
            </TopicWrapper>
        );
    }
    componentDidMount() {
        this.props.getTopicList();
    }
}

const mapStateToProps = (state) => {
    return {
        topicList: state.getIn(['home', 'topicList']),
    }
};

const mapDispathToProps = (dispatch) => {

    return {
        getTopicList (list) {
            dispatch(actionCreators.getTopicList());
        },
    }
    
};
export default connect(mapStateToProps, mapDispathToProps)(Topic);