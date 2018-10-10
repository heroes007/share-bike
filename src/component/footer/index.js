import React,{Component} from 'react'
import './index.less'

class Index extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div className='footer'>
                <h2 className='footer-font'>这是一个神奇的底部页面</h2>
            </div>
        )
    }
}

export default Index