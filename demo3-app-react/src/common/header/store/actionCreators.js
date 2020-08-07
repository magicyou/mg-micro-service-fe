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

const changeList = (data, totalPage) => ({
    type: constants.CHANGE_LIST,
    data: fromJS(data),
    totalPage: totalPage,
})

export const changeLoading = (data) => ({
    type: constants.CHANGE_LOADING,
    data: data
});

export const searchFocus = () => ({
    type: constants.SEARCH_FOCUS
})

export const searchBlur = () => ({
    type: constants.SEARCH_BLUR
})

export const getList = () => {
    return (dispatch) => {
        axios.get('api/headerList.json').then((res) => {
            dispatch(changeList(res.data.data, res.data.totalPage))
        }).catch((error) => {
            console.log('error');
        });
    }
};

export const mouseEnter = () => ({
    type: constants.MOUSE_IN
}); 

export const mouseLeave = () => ({
    type: constants.MOUSE_LEAVE
});

export const changePage = (data) => ({
    type: constants.CHANGE_PAGE,
    data: data
});

