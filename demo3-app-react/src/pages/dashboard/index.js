import React, { Component } from 'react';
import { Row, Col, Skeleton, Switch, Card, Avatar } from 'antd';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { connect } from 'react-redux';
import { actionCreators } from './store'
import { 
    DetailWrapper 
 } from "./style.js";
 const { Meta } = Card;

class Dashboard extends Component {

    render () {
        let loading = true;
        return (
            <div>
                 <Row gutter={[16, 16]}>
                    <Col span={12}>
                    <Row gutter={[16, 16]}>
                        <Col span={12}>
                            <Card loading={loading}>
                            <Meta
                                avatar={
                                <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                                }
                                title="Card title"
                                description="This is the description"
                            />
                            </Card>
                        </Col>
                        <Col span={12}>
                            <Card loading={loading}>
                            <Meta
                                avatar={
                                <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                                }
                                title="Card title"
                                description="This is the description"
                            />
                            </Card>
                        </Col>
                        <Col span={12}>
                            <Card loading={loading}>
                            <Meta
                                avatar={
                                <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                                }
                                title="Card title"
                                description="This is the description"
                            />
                            </Card>
                        </Col>
                        <Col span={12}>
                            <Card loading={loading}>
                            <Meta
                                avatar={
                                <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                                }
                                title="Card title"
                                description="This is the description"
                            />
                            </Card>
                        </Col>
                    </Row>
                    
                    </Col>
                    <Col span={12}>col</Col>
                </Row>
                <Row>
                    <Col span={12}>col-12</Col>
                    <Col span={12}>col-12</Col>
                </Row>
                dashboard
            </div>
        );
    }

    componentDidMount() {
        console.log('this.props:',this.props);
        const id = this.props.match.params.id
        this.props.getDetail(id);
    }
}


const mapStateToProps = (state) => {
    return {
        title: state.getIn(['detail', 'title']),
        content: state.getIn(['detail', 'content']),
    }
};

const mapDispathToProps = (dispatch) => {

    return {
        getDetail(id) {
            dispatch(actionCreators.getDeatail(id));
        }
    }
    
};

export default connect(mapStateToProps, mapDispathToProps)(Dashboard);