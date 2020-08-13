import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { actionCreators } from './store'
import { Menu, Button } from 'antd';
import {
  AppstoreOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  PieChartOutlined,
  DesktopOutlined,
  ContainerOutlined,
  MailOutlined,
} from '@ant-design/icons';

const { SubMenu } = Menu;

class Base extends Component {
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
          <div style={{ width: 256 }}>
              <div className="aside-header">
                  <div className="img-logo">logo</div>
                <Button type="primary" onClick={this.toggleCollapsed} style={{ marginBottom: 16 }}>
                {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined)}
                </Button>
              </div>
          
            <Menu
              defaultSelectedKeys={['1']}
              defaultOpenKeys={['sub1']}
              mode="inline"
              theme="dark"
              inlineCollapsed={this.state.collapsed}
            >
              <Menu.Item key="1" icon={<PieChartOutlined />} 
              >
                 <Link to="/">dashboard</Link>
              </Menu.Item>
              <Menu.Item key="2" icon={<DesktopOutlined />}>
              <Link to="/login">to login</Link>
              </Menu.Item>
              <Menu.Item key="3" icon={<ContainerOutlined />}>
                Option 3
              </Menu.Item>
              <SubMenu key="sub1" icon={<MailOutlined />} title="Navigation One">
                <Menu.Item key="5">Option 5</Menu.Item>
                <Menu.Item key="6">Option 6</Menu.Item>
                <Menu.Item key="7">Option 7</Menu.Item>
                <Menu.Item key="8">Option 8</Menu.Item>
              </SubMenu>
              <SubMenu key="sub2" icon={<AppstoreOutlined />} title="Navigation Two">
                <Menu.Item key="9">Option 9</Menu.Item>
                <Menu.Item key="10">Option 10</Menu.Item>
                <SubMenu key="sub3" title="Submenu">
                  <Menu.Item key="11">Option 11</Menu.Item>
                  <Menu.Item key="12">Option 12</Menu.Item>
                </SubMenu>
              </SubMenu>
            </Menu>
          </div>
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

export default connect(mapStateToProps, mapDispathToProps)(Base);