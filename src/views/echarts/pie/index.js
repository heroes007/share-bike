import React,{Component} from 'react'
import { Card } from 'antd'
import echarts from 'echarts/lib/echarts';
import ReactEcharts from 'echarts-for-react';
import 'echarts/lib/chart/bar';
import 'echarts/lib/component/legend'
import './index.less'

class Pie extends Component{
    constructor(props){
        super(props)
    }

    pie = () => {
        return {
            legend: {
                orient: 'vertical',
                right: 'right',
                data: ['周一','周二','周三','周四','周五',"周六","周日"]
            },
            series : [
                {
                    name: '访问来源',
                    type: 'pie',
                    radius : '70%',
                    center: ['50%', '60%'],
                    data:[
                        {value:335, name:'周一'},
                        {value:310, name:'周二'},
                        {value:234, name:'周三'},
                        {value:135, name:'周四'},
                        {value:1548, name:'周五'},
                        {value:1548, name:'周六'},
                        {value:1548, name:'周日'},
                    ],
                    itemStyle: {
                        emphasis: {
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                        }
                    }
                }
            ]
        }
    }

    render(){
        return(
            <div className='pie'>
                <Card title='周骑行次数'>
                    <ReactEcharts
                        option={this.pie()}
                        style={{height:"400px"}}
                    ></ReactEcharts>
                </Card>
            </div>
        )
    }
}

export default Pie
