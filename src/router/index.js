import React, {Component} from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import NotMatch from '../views/notMatch'
import Home from '../views/home'
import Admin from '../views/admin'
import SecondPage from '../views/secondPage'
import Indent from '../views/indent'
import Bar from '../views/echarts/bar'
import Pie from '../views/echarts/pie'
import Order from '../views/order'

class Router extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <BrowserRouter>
                <div>
                    <Switch>
                        <Route path='/admin/detail' component={Order}></Route>
                        <Route path="/admin" render={() =>
                            <Admin>
                                <Switch>
                                    <Route path='/admin/home' component={Home}></Route>
                                    <Route path='/admin/secondPage' component={SecondPage}></Route>
                                    <Route path='/admin/indent' component={Indent}></Route>
                                    <Route path='/admin/bar' component={Bar}></Route>
                                    <Route path='/admin/pie' component={Pie}></Route>
                                    <Route component={NotMatch}></Route>
                                </Switch>
                            </Admin>
                        }></Route>
                        <Route component={NotMatch}></Route>
                    </Switch>
                </div>
            </BrowserRouter>
        )
    }
}

export default Router