/*
 * @Author: your name
 * @Date: 2020-03-04 22:12:46
 * @LastEditTime: 2020-03-07 18:46:20
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /react/jianshu/src/store/reducer.js
 */
// import { combineReducers } from 'redux';
import { combineReducers } from 'redux-immutable'
import headerReducer from '../common/header/store/reducer';
import homeReducer from '../pages/home/store/reducer';
import baseReducer from '../pages/base/store/reducer';
import dashboardReducer from '../pages/dashboard/store/reducer';
import detailReducer from '../pages/detail/store/reducer';

const reducer = combineReducers({
    header: headerReducer,
    base: baseReducer,
    home: homeReducer,
    detail: detailReducer,
    dashboard: dashboardReducer
});
export default reducer; 