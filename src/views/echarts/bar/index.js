import React,{Component} from 'react'
import { Card } from 'antd'
import echarts from 'echarts/lib/echarts';
import ReactEcharts from 'echarts-for-react';
import 'echarts/lib/chart/bar';
import 'echarts/lib/component/legend'
import './index.less'

class Bar extends Component{
    bar = () => {
        return {
            color: ['#3398DB'],
            tooltip : {
                trigger: 'axis',
                axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                    type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                }
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis : [
                {
                    type : 'category',
                    data : ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                    axisTick: {
                        alignWithLabel: true
                    }
                }
            ],
            yAxis : [
                {
                    type : 'value'
                }
            ],
            series : [
                {
                    name:'骑行次数',
                    type:'bar',
                    barWidth: '60%',
                    data:[2000, 5200, 2000, 3340, 3900, 9300, 2200]
                }
            ]
        };
    }
    render(){
        return(
            <div className='main'>
                <Card title='周骑行次数'>
                    <ReactEcharts option={this.bar()}></ReactEcharts>
                </Card>
            </div>
        )
    }
}

export default Bar