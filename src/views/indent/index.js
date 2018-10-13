import React,{Component} from 'react'
import {Card, Select, DatePicker, Button, Table, Spin } from 'antd'
import {axios} from '../../utils'
import './index.less'

const Option = Select.Option;
const {  RangePicker } = DatePicker

class indent extends Component{
    constructor(props){
        super(props)
    }
    state = {
        tableData:[],
        pn:'',
        pagination:{
            current:1,
            pageSize:10,
            total:0
        },
        isLoading:true,
        selectedRowKeys:"",
        selectedRows:"",
    }
    onChange = (value) => {
        console.log(value)
    }

    dateChange = (date, dateString) => {
        console.log(date, dateString);
    }

    //结束订单
    endIndent = () => {
        console.log(this.state.selectedRowKeys, this.state.selectedRows)
        axios.get(' https://www.easy-mock.com/mock/5bbb8bf854d6771eb592838d/order/finish_order').then(res => {
            console.log(res)
        })
    }

    getTable = () => {
        let params = {
            page : this.state.pn
        }
        axios.get('https://www.easy-mock.com/mock/5bbb8bf854d6771eb592838d/order/list',params).then(res => {
            if(res.code == "0"){
                this.setState({
                    tableData: res.result.item_list.map((item, index) => {
                        item.key = index
                        return item
                    }),
                    pagination:{
                        total:res.result.total_count,
                        count:res.result.page.count,
                        onChange:(page) => {
                            this.setState({
                                pn:page,
                                isLoading:true,
                            },() => this.getTable())
                        }
                    },
                    isLoading:false
                })
            }else{
                this.setState({
                    isLoading:true
                })
            }
        })
    }

    detail = () => {
        if(this.state.selectedRowKeys){
            window.open('/admin/detail')
        }else{
            console.log("no")
        }
    }

    componentWillMount(){
        this.getTable()
    }

    render(){
        const select = {
            fixed:true,
            type:"radio",
            onChange:(selectedRowKeys, selectedRows)=>{
                this.setState({
                selectedRowKeys,
                selectedRows
                })
            }
        }
        const columns = [
            {
                title:'订单编号',
                dataIndex:'order_sn',
                key:'order_sn',
            },
            {
                title:'车辆编号',
                dataIndex:'bike_sn',
                key:'bike_sn',
            },
            {
                title:'用户名',
                dataIndex:'user_name',
                key:'user_name',
            },
            {
                title:'手机号',
                dataIndex:'mobile',
                key:'mobile',
            },
            {
                title:'里程',
                dataIndex:'distance',
                key:'distance',
            },
            {
                title:'行驶时长',
                dataIndex:'total_time',
                key:'total_time',
            },
            {
                title:'状态',
                dataIndex:'status',
                key:'status',
            },
            {
                title:'开始时间',
                dataIndex:'start_time',
                key:'start_time',
            },
            {
                title:'结束时间',
                dataIndex:'end_time',
                key:'end_time',
            },
            {
                title:'订单金额',
                dataIndex:'total_fee',
                key:'total_fee',
            },
            {
                title:'实付金额',
                dataIndex:'user_pay',
                key:'user_pay',
            }
        ]

        const options = [{
            code: '0',
            name: '北京',
        }, {
            code: '1',
            name: '上海',
        }, {
            code: '2',
            name: '广州',
        }]

        const  status = [
            {
                code:'0',
                name:'未完成',
            },
            {
                code:'1',
                name:'已完成',
            },
            {
                code:'2',
                name:'正在进行中'
            }
        ]

        return(
            <div className='indent'>
                <Card>
                    城市 ：<Select
                        className='mr50'
                        placeholder="选择一个城市"
                        style={{ width: 180 }}
                        onChange={this.onChange}
                    >
                        {options.map(item =>
                            <Option value={item.code} key={item.code}>{item.name}</Option>
                        )}
                    </Select>
                    订单时间：<RangePicker className='mr50' onChange={this.dateChange} />
                    订单状态：<Select
                    placeholder="选择一个状态"
                    style={{ width: 180 }}
                    onChange={this.onChange}
                >
                    {status.map(item =>
                        <Option value={item.code} key={item.code}>{item.name}</Option>
                    )}
                    </Select>
                    <div className='mt20' >
                        <Button className='mr20' type='primary'>查询</Button>
                        <Button className='black'>重置</Button>
                    </div>
                </Card>
                <Card style={{marginTop:-1}}>
                    <Button className='mr20'  type='primary' onClick={this.detail}>订单详情</Button>
                    <Button type='primary' onClick={this.endIndent}>结束订单</Button>
                </Card>
                <Card style={{marginTop:-1}}>
                    <Table
                        bordered = {true}
                        columns = {columns}
                        dataSource = {this.state.tableData}
                        pagination = {this.state.pagination}
                        rowSelection={select}
                    />
                    <Spin
                        className='isLoading'
                        spinning = {this.state.isLoading}
                    />
                </Card>
            </div>
        )
    }
}

export default indent