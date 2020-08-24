/*
 * @Author: your name
 * @Date: 2020-03-07 18:03:31
 * @LastEditTime: 2020-03-09 23:13:04
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /react/jianshu/src/common/header/store/actionCreators.js
 */

import * as constants  from './constants';
import axios from 'axios';
import { fromJS } from 'immutable'

const changeList = (data) => ({
    type: constants.CHANGE_TOPIC_LIST,
    data: fromJS(data),
})

const changeArticleList = (data) => ({
    type: constants.CHANGE_ARTICLE_LIST,
    data: fromJS(data),
})

const changeRecommentList = (data) => ({
    type: constants.CHANGE_RECOMMENT_LIST,
    data: fromJS(data),
})

const changeWriterList = (data) => ({
    type: constants.CHANGE_WRITER_LIST,
    data: fromJS(data),
})

export const showScrollToggle = (showScroll) => ({
    type: constants.CHANGE_SHOW_SCROLL,
    showScroll: showScroll,
})

export const getTopicList = () => {
    return (dispatch) => {
        axios.get('api/topicList.json').then((res) => {
            console.log('res:', res);
            dispatch(changeList(res.data.data))
        }).catch((error) => {
            console.log('error');
        });
    }
};

export const getArticleList = () => {
    return (dispatch) => {
        axios.get('api/articleList.json').then((res) => {
            console.log('res:', res);
            dispatch(changeArticleList(res.data.data))
        }).catch((error) => {
            console.log('error');
        });
    }
};

export const getRecommentList = () => {
    return (dispatch) => {
        axios.get('api/recommentList.json').then((res) => {
            console.log('res:', res);
            dispatch(changeRecommentList(res.data.data))
        }).catch((error) => {
            console.log('error');
        });
    }
};

export const getWriterList = () => {
    return (dispatch) => {
        axios.get('api/writerList.json').then((res) => {
            console.log('res:', res);
            dispatch(changeWriterList(res.data.data))
        }).catch((error) => {
            console.log('error');
        });
    }
};



