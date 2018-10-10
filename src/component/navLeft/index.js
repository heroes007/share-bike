import React,{Component} from 'react'
import {Link} from 'react-router-dom'
import { Menu, Icon, Button } from 'antd'
import './index.less'

const SubMenu = Menu.SubMenu;

class Index extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div className='navLeft'>
                <Menu
                    defaultSelectedKeys={['1']}
                    defaultOpenKeys={['sub1']}
                    mode="inline"
                    theme="dark"
                >
                    <Menu.Item key="1">
                        <Icon type="pie-chart" />
                        <span>首页</span>
                        <Link to='/admin/home'>首页</Link>
                    </Menu.Item>
                    <Menu.Item key="2">
                        <Icon type="desktop" />
                        <span>第二页</span>
                        <Link to='/admin/secondPage'></Link>
                    </Menu.Item>
                </Menu>
            </div>
        )
    }
}

export default Index