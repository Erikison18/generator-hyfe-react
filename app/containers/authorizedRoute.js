/*
 * @Author: baizn 
 * @Email: baizhanning@hiynn.com 
 * @Description: 权限验证路由组件
 * @Date: 2018-03-07 14:57:23 
 * @Last Modified by: baizn
 * @Last Modified time: 2018-03-07 14:58:22
  */

import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { loadUserRequest } from '@/actions/userAction'

const stateToProps = ({ loggedUser }) => ({
  pending: loggedUser.pending,
  logged: loggedUser.logged
})

@connect(stateToProps)
export default class AuthorizedRoute extends React.Component {
  /**
   * @description 根据登录状态，渲染不同组件
   * @returns  渲染的组件
   * @memberof AuthorizedRoute
   */
  render() {
    const { component: Component, pending, logged, ...rest } = this.props
    return (
      <Route {...rest} render={props => {
        if (pending) {
          return <div>Loading...</div>
        }

        return logged
          ? <Component {...props} />
          : <Redirect to="/auth/login" />
      }} />
    )
  }
}
