/*
 * @Author: your name
 * @Date: 2020-03-07 17:07:29
 * @LastEditTime: 2020-03-09 22:31:03
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /react/jianshu/src/common/header/store/reducer.js
 */

import * as constants  from './constants';
import { fromJS } from 'immutable'
const defaultState = fromJS({
    focused: false,
    mouseIn: false,
    page: 1,
    totalPage: 1,
    list: [],
    searchIsLoading: false
});

export default (state = defaultState, action) => {
    switch (action.type) {
        case constants.SEARCH_FOCUS:
            return state.set('focused', true);
        case constants.SEARCH_BLUR:
            return state.set('focused', false);
        case constants.CHANGE_LIST:
            return state.set('list', action.data).set('totalPage', action.totalPage);
        case constants.MOUSE_IN:
            return state.set('mouseIn', true);
        case constants.MOUSE_LEAVE:
            return state.set('mouseIn', false);
        case constants.CHANGE_PAGE:
            return state.set('page', action.data);
        case constants.CHANGE_LOADING:
            return state.set('searchIsLoading', action.data);
        default:
            return state;
    }
}