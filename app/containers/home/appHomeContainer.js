import React, { Component } from 'react'
import { connect } from 'react-redux'
import { logout } from '@/actions/loginAction'
import HomeSide from '@/components/home/homeSide'
import './home.scss'

@connect(null)
class AppHomeContainer extends Component {
  logout = () => {
    const { dispatch } = this.props
    dispatch(logout())
  }

  render() {
    return (
      <HomeSide />
      // <div>
        
      //   {/* App Home Page
      //   <br /><br />
      //   <button onClick={ this.logout }>Logout</button> */}
      // </div>
    )
  }
}

export default AppHomeContainer
