/*
 * @Author: baizn 
 * @Email: baizhanning@hiynn.com 
 * @Description: 主布局页面
 * @Date: 2018-03-07 14:58:35 
 * @Last Modified by: zhanghongqiao@hiynn.com
 * @Last Modified time: 2018-03-07 22:50:52
  */

import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Switch, Route, Redirect } from 'react-router-dom'
import { Layout } from 'antd'
import PromaryHeader from '@/components/primary/PrimaryHeader'
import AppHomeContainer from './home/appHomeContainer'

// Sub Container
import UserSubContainer from './users/userSubContainer'
import ProductSubContainer from './product/productSubContainer'
import CoreContainer from './core/core'

@connect(null)
export default class PrimaryHeaderContainer extends Component {
  render() {
    // match是怎么来的
    const { match } = this.props
    return (
      <Layout style={{ minHeight: '100vh' }}>
      {/* <div className="primary-layout"> */}
      <PromaryHeader />  
        <Layout>
          <Switch>
            <Route path={`${match.path}`} exact component={AppHomeContainer} />
            <Route path={`${match.path}/users`} component={UserSubContainer} />
            <Route path={`${match.path}/products`} component={ProductSubContainer} />
            <Route path={`${match.path}/core`} component={CoreContainer} />
            <Redirect to={`${match.url}`} />
          </Switch>
        </Layout>
      {/* </div> */}
      </Layout>
    )
  }
}
