import React, { Component } from 'react';
import { connect } from 'react-redux';
import bannerUrl from '../../statics/images/banner.png';
import {Link} from 'react-router-dom'

import { 
    HomeWrapper, 
    HomeLeft,
    HomeBanner,
    HomeRight,
    BackToTop
 } from "./style.js";
 import Header from "../../common/header";
 import Topic from './components/Topic';
 import List from './components/List';
 import Recomment from './components/Recomment';
 import Writer from './components/Writer';
import { actionCreators } from './store'

class Home extends Component {
    constructor(props) {
        super(props)
        this.handlerBackTop = this.handlerBackTop.bind(this);
    }


    render () {
        const { showScroll } = this.props;
        return (
            <div>
                 home
            </div>
        );
    }

    handlerBackTop() {
        window.scrollTo(0,0);
    }

    componentDidMount() {
        window.addEventListener('scroll', this.props.showScrollToggle);
    }

}

const mapStateToProps = (state) => {
    console.log('state:',state);
    return {
        showScroll: state.getIn(['home', 'showScroll']),
    }
};

const mapDispathToProps = (dispatch) => {

    return {
        showScrollToggle(e) {
            let scrollTop = window.scrollY;
            if (scrollTop > 200) {
                dispatch(actionCreators.showScrollToggle(true));
            } else {
                dispatch(actionCreators.showScrollToggle(false));
            }
        }
    }
    
};

export default connect(mapStateToProps, mapDispathToProps)(Home);