/*
 * @Author: your name
 * @Date: 2020-03-07 17:07:29
 * @LastEditTime: 2020-03-09 22:31:03
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /react/jianshu/src/common/header/store/reducer.js
 */

import * as constants  from './constants';
import { fromJS, List } from 'immutable'
const defaultState = fromJS({
    topicList: [],
    articleList: [],
    recommentList: [],
    writerList: [],
    showScroll: false,
});

export default (state = defaultState, action) => {
    switch (action.type) {
        case constants.CHANGE_TOPIC_LIST:
            return state.set('topicList', action.data);
        case constants.CHANGE_ARTICLE_LIST:
            return state.set('articleList', List(state.get('articleList')).concat(action.data));
        case constants.CHANGE_RECOMMENT_LIST:
            return state.set('recommentList', action.data);
        case constants.CHANGE_WRITER_LIST:
            return state.set('writerList', action.data);
        case constants.CHANGE_SHOW_SCROLL:
            return state.set('showScroll', action.showScroll);
        default:
            return state;
    }
}