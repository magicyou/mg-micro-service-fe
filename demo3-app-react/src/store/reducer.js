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
import mainReducer from '../pages/main/store/reducer';
import homeReducer from '../pages/home/store/reducer';
import authMenuReducer from '../pages/authMenu/store/reducer';
import baseReducer from '../pages/base/store/reducer';
import dashboardReducer from '../pages/dashboard/store/reducer';
import detailReducer from '../pages/detail/store/reducer';

const reducer = combineReducers({
    main: mainReducer,
    header: headerReducer,
    base: baseReducer,
    authMenu: authMenuReducer,
    home: homeReducer,
    detail: detailReducer,
    dashboard: dashboardReducer
});
export default reducer; 