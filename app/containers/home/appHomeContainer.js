import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Layout } from 'antd'
import { logout } from '@/actions/loginAction'
import HomeSide from '@/components/home/homeSide'
import HomeContent from '@/components/home/homeContent'
import './home.scss'

@connect(null)
class AppHomeContainer extends Component {
  logout = () => {
    const { dispatch } = this.props
    dispatch(logout())
  }

  render() {
    return (
      <Layout className='content-max'>
        <HomeSide />
        <HomeContent />
      </Layout>
      // <div>
        
      //   {/* App Home Page
      //   <br /><br />
      //   <button onClick={ this.logout }>Logout</button> */}
      // </div>
    )
  }
}

export default AppHomeContainer
