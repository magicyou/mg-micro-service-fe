import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actionCreators } from '../store'
import { Link } from 'react-router-dom';
import { RecommentWrapper } from '../style';

class Recommend extends Component {
    render () {
        let { list } = this.props;
        list = list.toJS();
        return (
            <RecommentWrapper>
                {
                    list.map((item, index) => {
                        return (
                            <Link to="/detail" key={ index }>
                                <img src={ item.imgUrl } alt="" />
                            </Link>
                        );
                    })
                }
            </RecommentWrapper>
        );
    }

    componentDidMount() {
        this.props.getRecommentList();
    }
}

const mapStateToProps = (state) => {
    return {
        list: state.getIn(['home', 'recommentList']),
    }
};

const mapDispathToProps = (dispatch) => {

    return {
        getRecommentList (list) {
            dispatch(actionCreators.getRecommentList());
        },
    }
    
};

export default connect(mapStateToProps, mapDispathToProps)(Recommend);