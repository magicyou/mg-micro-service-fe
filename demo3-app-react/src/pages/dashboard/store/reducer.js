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
    title: '关于阅读日本作家作品的一些思考',
    content: '<p>前几天，刚刚过了知天命的大学同学，因为常听周围人说村上春树说的话多么美好又有哲理，于是就买了几本他的书来读，其中一本是《夜袭面包店》。这本村上的短篇小说集我还没有读过，估计是很不对同学的心思，以至于她几次放下拿起又放下，最后决定彻底放弃，并且决绝的表示要把一</p><p>起买的那几本村上春树的书统统扔进故纸堆，以后再也不会动他的书了。阅读遇到读不下去的障碍我也有过，遇到几次放下又拿起的书也是有的，所以很能理解同学翻开一本别人推荐的书，看不下去想放弃的感受。</p><img src="https://upload-images.jianshu.io/upload_images/20247732-170d33802bbb4ca8.jpg?imageMogr2/auto-orient/strip|imageView2/2/w/700/format/webp" /><p>抛开学业压力和专业性的工作需要，更抛开功利因素，毫无疑问，阅读首先是要读自己感兴趣和喜欢的东西。人生有限，趋乐避苦是本能，阅读自己喜欢的文学作品也算趋乐之一。所以，对同学果决放弃阅读村上小说的做法就更能理解了。尽管村上春树是当代有影响的作家，还说出了那么多至理金句，但是都跟不喜欢他的人无关。</p>不过，日本作家的文学作品，我是读过几本的，于是想谈谈自己的阅读感受和想法。',
});

export default (state = defaultState, action) => {
    switch (action.type) {
        case constants.CHANGE_DETAIL:
            return state.set('title', action.title).set('content', action.content);
        default:
            return state;
    }
}