import React, { Component } from 'react'
import { Layout, Row, Col } from 'antd'
const { Content } = Layout

export default class HomeContent extends Component {
 
  render() {
    return (
      <Content >
        <Row gutter={16}>
        <Col span={6} >App Home Page</Col>
        <Col span={6}>col-6</Col>
        <Col span={6} />
        <Col span={6} />
      </Row>
      </Content>
    )
  }
}