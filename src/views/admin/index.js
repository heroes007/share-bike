import React,{Component} from 'react'
import { Row,  Col } from 'antd'
import Header from '../../component/header'
import NavLeft from '../../component/navLeft'
import Footer from '../../component/footer'
import './index.less'

class Admin extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div>
                <Row>
                    <Col span={4}>
                        <NavLeft />
                    </Col>
                    <Col span={20}>
                        <Header />
                        <div className='admin-content'>
                            <div className='content'>
                                {this.props.children}
                            </div>
                        </div>
                        <Footer />
                    </Col>
                </Row>
            </div>
        )
    }
}

export default Admin