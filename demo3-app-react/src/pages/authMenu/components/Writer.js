import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actionCreators } from '../store'
import { WriterWrapper, WriterTitle, WriterList  } from '../style';

class Writer extends Component {
    render () {
        let { list } = this.props;
        list = list.toJS();
        return (
            <WriterWrapper>
                <WriterTitle>
                    <span>推荐作者</span>
                    <a href="/" className="btn-refresh"><i className="iconfont iconshuaxin1"></i>换一批</a>
                </WriterTitle>
                <WriterList>
                    {
                        list.map((item, index) => {
                            return (
                                <li key={ index }>
                                    <div className="img-avatar" >
                                        <img src={ item.avatar } alt="" />
                                    </div>
                                    <div className="box-info" >
                                        <p className="txt-name">{ item.name }  <a className="btn-attr"><i className="iconfont iconjia"></i>关注</a></p>
                                        <p className="txt-info">写了{ item.name }字，{ item.like }喜欢</p>
                                    </div>
                                </li>
                            );
                        })
                    }
                </WriterList>
                
            </WriterWrapper>
        );
    }

    componentDidMount() {
        this.props.getWriterList();
    }
}

const mapStateToProps = (state) => {
    return {
        list: state.getIn(['home', 'writerList']),
    }
};

const mapDispathToProps = (dispatch) => {

    return {
        getWriterList (list) {
            dispatch(actionCreators.getWriterList());
        },
    }
    
};

export default connect(mapStateToProps, mapDispathToProps)(Writer);