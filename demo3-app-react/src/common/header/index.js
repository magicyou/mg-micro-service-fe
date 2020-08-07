/*
 * @Author: lxl
 * @Date: 2020-03-01 15:48:08
 * @LastEditTime: 2020-03-09 23:15:59
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /react/jianshu/src/common/header/index.js
 */
import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Link }  from 'react-router-dom'
import { CSSTransition } from "react-transition-group";
import { 
    HeaderWrapper, 
    HeaderInner, 
    HeaderContainer, 
    Logo, NavItem, 
    LinkItem, 
    SearchWrapper, 
    NavSearch,
    SearchInfoWrapper,
    SearchInfo,
    SearchInfoTitle,
    SearchInfoItemList,
    SearchInfoItem,
 } from "./style.js";
import { actionCreators } from './store'

class Header extends PureComponent {

    getListArea (show) {
        const { list, focused, mouseIn, page, totalPage, handleChangePage, handleMouseIn, handleMouseOut, searchIsLoading } = this.props;
        const newList = list.toJS();
        let itemList = [];
        if (newList.length) {
            const data = newList.splice((page - 1) * 10, 10);
            for (let i = 0, len = data.length; i < len; i++) {
                itemList.push(<SearchInfoItem key={data[i]}>{data[i]}</SearchInfoItem>)
            }
        }
        console.log('focused || mouseIn :',focused, mouseIn );
        if ( focused || mouseIn ) {
            return (
                <SearchInfoWrapper 
                onMouseEnter={handleMouseIn}  
                onMouseLeave={handleMouseOut}
                >
                    <SearchInfo>
                        <SearchInfoTitle>
                            <span className="pull-left">热门搜索</span>
                            <span 
                                className="pull-right btn-refresh" 
                                onClick={()=>(handleChangePage(page, totalPage))}>
                                    <i 
                                        className={searchIsLoading ? "iconfont iconshuaxin refresh loading" : "iconfont iconshuaxin refresh"}
                                    ></i> 
                                    换一批
                            </span>
                        </SearchInfoTitle>
                        <SearchInfoItemList>
                            {itemList}
                        </SearchInfoItemList>
                    </SearchInfo>
                </SearchInfoWrapper>
            );
        } else {
            return null;
        }
    }

    render () {
        const { list, focused, handleSearchFocus, handleSearchBlur } = this.props;
        return (
            <div>
                <HeaderWrapper>
                    <HeaderInner>
                        <Link to="/"> <Logo className="pull-left"></Logo></Link>
                        <HeaderContainer>
                            <NavItem className="pull-left cur">
                                <span className="iconfont iconshouye"></span>首页
                            </NavItem>
                            <NavItem className="pull-left"><span className="iconfont iconxiazai"></span>下载App</NavItem>
                            
                            <SearchWrapper 
                                className={focused ? 'pull-left focused' : 'pull-left'} 
                                >
                                <CSSTransition
                                in={focused}
                                timeout={300}
                                classNames="slide"
                                >
                                    <NavSearch 
                                        onFocus={() => (handleSearchFocus(list))}
                                        onBlur={handleSearchBlur}
                                    ></NavSearch>
                                </CSSTransition>
                                <span className="iconfont iconfangdajing"></span>
                                { this.getListArea(focused) }
                            </SearchWrapper>
                           
                            <NavItem className="pull-right"><Link to="/login">登录</Link></NavItem>
                            <NavItem className="pull-right cur">
                                <span className="iconfont iconAa"></span>
                            </NavItem>
                        </HeaderContainer>
                        <LinkItem className="pull-right cur">
                            <span className="iconfont iconxiezi"></span>写文章
                        </LinkItem>
                        <LinkItem className="pull-right">注册</LinkItem>
                    </HeaderInner>
                </HeaderWrapper>
            </div>
        )
    }

}

const mapStateToProps = (state) => {
    console.log('state:',state);
    return {
        focused: state.getIn(['header', 'focused']),
        mouseIn: state.getIn(['header', 'mouseIn']),
        page: state.getIn(['header', 'page']),
        totalPage: state.getIn(['header', 'totalPage']),
        list: state.getIn(['header', 'list']),
        searchIsLoading: state.getIn(['header', 'searchIsLoading'])
    }
};

const mapDispathToProps = (dispatch) => {

    return {
        handleSearchFocus (list) {
            (list.size === 0 ) && 
            dispatch(actionCreators.getList());
            dispatch(actionCreators.searchFocus());
        },
        handleSearchBlur () {
            dispatch(actionCreators.searchBlur());
        },
        handleMouseIn () {
            dispatch(actionCreators.mouseEnter());
        },
        handleMouseOut () {
            dispatch(actionCreators.mouseLeave());
        },
        handleChangePage (page, totalPage) {
            dispatch(actionCreators.changeLoading(true))
            setTimeout(() => {
                if (page < totalPage) {
                    dispatch(actionCreators.changePage(page + 1));
                } else {
                    dispatch(actionCreators.changePage(1));
                }
                dispatch(actionCreators.changeLoading(false))
            },500);
        }
    }
    
};

export default connect(mapStateToProps, mapDispathToProps)(Header);