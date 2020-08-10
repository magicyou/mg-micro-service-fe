import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { actionCreators } from '../store'
import { ArticleItem, LoadMore } from '../style';

class List extends Component {
    render () {
        let { list, getArticleList } = this.props;
        list = list.toJS();
        return (
            <div>
                {
                    list.map((item, index) => {
                        return (
                            <ArticleItem key={ index }>
                                <Link to={'/detail/' + item.id} className="wrap-img">
                                    <img src={item.imgUrl} alt={ item.title } />
                                </Link>
                                <div className="wrap-content">
                                    <p className="txt-title"><Link to={'/detail/' + item.id} >{ item.title }</Link></p>
                                    <p className="txt-disc">{ item.disc }</p>
                                    <div className="txt-other">
                                        <span><i className="iconfont iconzuanshi" ></i>{ item.attibute }</span>
                                        <span>{ item.writer }</span>
                                        <span><i className="iconfont iconxiaoxi" ></i>{ item.msgCount }</span>
                                        <span><i className="iconfont iconxin" ></i>{ item.like }</span>
                                    </div>
                                </div>
                            </ArticleItem>
                        );
                    })
                }
                <LoadMore onClick={ getArticleList }>更多文字</LoadMore>
            </div>
        );
    }
    componentDidMount() {
        this.props.getArticleList();
    }
}

const mapStateToProps = (state) => {
    return {
        list: state.getIn(['home', 'articleList']),
    }
};

const mapDispathToProps = (dispatch) => {

    return {
        getArticleList () {
            dispatch(actionCreators.getArticleList());
        }
    }
    
};

export default connect(mapStateToProps, mapDispathToProps)(List);