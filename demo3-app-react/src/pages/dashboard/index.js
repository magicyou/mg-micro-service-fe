import React, { Component } from 'react';
import { Row, Col, Skeleton, Switch, Card, PageHeader } from 'antd';
import EchartPie from './components/echartsPie';
import { ArrowUpOutlined, ArrowDownOutlined } from '@ant-design/icons';
import { connect } from 'react-redux';
import { actionCreators } from './store';
import MyIcon from '../../components/MyIcon';


 const { Meta } = Card;

class Dashboard extends Component {

    render () {
        let loading = false;
        return (
            <div>
                <PageHeader
                    className="site-page-header"
                    title="数据预览"
                />
                 <Row gutter={[16, 16]}>
                    <Col span={6}>
                        <Card loading={loading}>
                        <Meta
                            avatar={
                            <MyIcon type="iconjiaoyinzujifangke" />
                            }
                            title="Card title"
                            description={
                                <p><ArrowUpOutlined /> 123 &nbsp;&nbsp;  <ArrowDownOutlined /> 123</p>
                            }
                        />
                        </Card>
                    </Col>
                    <Col span={6}>
                        <Card loading={loading}>
                        <Meta
                            avatar={
                                <MyIcon type="iconshijian" />
                            }
                            title="Card title"
                            description={
                                <p><ArrowUpOutlined /> 123 &nbsp;&nbsp;  <ArrowDownOutlined /> 123</p>
                            }
                        />
                        </Card>
                    </Col>
                    <Col span={6}>
                        <Card loading={loading}>
                        <Meta
                            avatar={
                                <MyIcon type="iconfenbu" />
                            }
                            title="Card title"
                            description={
                                <p><ArrowUpOutlined /> 123 &nbsp;&nbsp;  <ArrowDownOutlined /> 123</p>
                            }
                        />
                        </Card>
                    </Col>
                    <Col span={6}>
                        <Card loading={loading}>
                        <Meta
                            avatar={
                                <MyIcon type="iconqushitu" />
                            }
                            title="Card title"
                            description={
                                <p><ArrowUpOutlined /> 123 &nbsp;&nbsp;  <ArrowDownOutlined /> 123</p>
                            }
                        />
                        </Card>
                    </Col>

                    <Col span={12}>
                            <EchartPie />
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