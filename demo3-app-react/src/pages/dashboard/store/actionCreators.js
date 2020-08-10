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

const changeDeatail = (title, content) => ({
    type: constants.CHANGE_DETAIL,
    title, 
    content
})


export const getDeatail = (id) => {
    return (dispatch) => {
        axios.get('api/articleDetail.json?id=' + id).then((res) => {
            dispatch(changeDeatail(res.data.data.title, res.data.data.content))
        }).catch((error) => {
            console.log('error');
        });
    }
};


