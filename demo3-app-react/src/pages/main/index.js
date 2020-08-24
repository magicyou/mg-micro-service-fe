import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import { actionCreators } from './store'
import { Layout, Button } from 'antd';

import AuthMenu from '../authMenu';
import Dashboard from '../dashboard';
import Detail from '../detail';
import Home from '../home';
import Login from '../login';

import {
    AppstoreOutlined,
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    PieChartOutlined,
    DesktopOutlined,
    ContainerOutlined,
    MailOutlined,
  } from '@ant-design/icons';


const { Header, Footer, Sider, Content } = Layout;

class Main extends Component {
    constructor(props) {
        super(props)
        // this.handlerBackTop = this.handlerBackTop.bind(this);
    }

    state = {
        collapsed: false,
    };

    toggleCollapsed = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    };

    render() {
        return (
            <BrowserRouter>
              <Layout>
                <Header>
                <div className="aside-header">
                    <div className="img-logo">logo</div>
                    <Button type="primary" onClick={this.toggleCollapsed} style={{ marginBottom: 16 }}>
                    {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined)}
                    </Button>
                </div>
                </Header>
                <Layout>
                    <Sider>
                        <AuthMenu />
                    </Sider>
                    <Content>
                        <Route path="/" exact component={Dashboard}></Route>
                        <Route path="/login" component={Login}></Route>
                        <Route path="/dashboard" component={Dashboard}></Route>
                        <Route path="/detail/:id" component={Detail}></Route> 
                    </Content>
                </Layout>
                <Footer>Footer</Footer>
            </Layout>
                        
            </BrowserRouter>
        );
    }

    componentDidMount() {
       
    }

}

const mapStateToProps = (state) => {
    console.log('state:',state);
    return {
        showScroll: state.getIn(['home', 'showScroll']),
    }
};

const mapDispathToProps = (dispatch) => {

    return {
        showScrollToggle(e) {
            let scrollTop = window.scrollY;
            if (scrollTop > 200) {
                dispatch(actionCreators.showScrollToggle(true));
            } else {
                dispatch(actionCreators.showScrollToggle(false));
            }
        }
    }
    
};

export default connect(mapStateToProps, mapDispathToProps)(Main);