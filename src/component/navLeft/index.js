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
                        <Link to='/admin/home'></Link>
                    </Menu.Item>
                    <Menu.Item key="2">
                        <Icon type="pie-chart" />
                        <span>订单管理</span>
                        <Link to='/admin/indent'></Link>
                    </Menu.Item>
                    <SubMenu title={<span><Icon type="mail" /><span>图册</span></span>}>
                        <Menu.Item key="3">
                            <Icon type="desktop" />
                            <span>柱状图</span>
                            <Link to='/admin/bar'></Link>
                        </Menu.Item>
                        <Menu.Item key="4">
                            <Icon type="desktop" />
                            <span>饼状图</span>
                            <Link to='/admin/pie'></Link>
                        </Menu.Item>
                    </SubMenu>

                </Menu>
            </div>
        )
    }
}

export default Index