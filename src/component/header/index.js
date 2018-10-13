import React,{Component} from 'react'
import {Link} from 'react-router-dom'
import './index.less'
import {formDate, axios} from '../../utils'

class Index extends Component{
    constructor(props){
        super(props)
    }
    state = {
        date:"",
        weather:""
    }

    getTime = () => {
        setInterval(() => {
            let untilsDate = new Date().getTime()
            let timeStr = formDate(untilsDate)
            this.setState({
                date:timeStr
            })
        }, 1000)
    }

    getWeather = () => {
        axios.get(`http://t.weather.sojson.com/api/weather/city/101030100`).then(res => {
            const dataWeather = res.data.forecast[1]
            const weather = `${dataWeather.type}， ${dataWeather.low}~${dataWeather.high}， ${dataWeather.fx}${dataWeather.fl}`
            this.setState({
                weather
            })
        } )
    }

    componentWillMount(){
        this.getTime()
        this.getWeather()
    }

    render(){
        return(
            <div className='header'>
                <div className='header-content clear'>
                    <Link to='/login' className='flr'>退出</Link>
                    <div className='username flr mr20'>UZI</div>
                    <div className='flr mr20'>欢迎</div>
                </div>
                <div className='header-title clear'>
                    <div className='breadcrumb fll'>首页</div>
                    <div className="weather flr mr20">{this.state.weather}</div>
                    <div className='date flr mr20'>{this.state.date}</div>
                </div>
            </div>
        )
    }
}

export default Index