import React,{Component} from 'react'
import {Link} from 'react-router-dom'
import { Card } from 'antd'
import './index.less'

class Order extends Component{
    constructor(props){
        super(props)
    }

    getMap = () => {
        console.log(window)
        console.log(window.BMap)
        const BMap = window.BMap
        var map = new BMap.Map("order-map");          // 创建地图实例
        var point = new BMap.Point(116.404, 39.915);  // 创建点坐标
        map.centerAndZoom(point, 15);                 // 初始化地图，设置中心点坐标和地图级别
    }

    componentDidMount(){
        this.getMap()
    }
    render(){
        return(
            <div className='order'>
                <Card className='order-header'>
                    <div className='header-titlename fll'>共享单车后台管理系统</div>
                    <div className='header-user flr'>
                        <div className='user-wel fll'>欢迎，</div>
                        <div className='user-name fll'>UZI</div>
                        <Link to='/index/login' className='user-out fll'>退出</Link>
                    </div>
                </Card>
                <Card className="order-map" id='order-map'></Card>
                地图界面
            </div>
        )
    }
}

export default Order