import React from 'react'
import '@/styles/app.less'
import { Layout, Row, Col, BackTop } from 'antd'

import AppMain from './AppMain'
import Header from './header'

const WebLayout = props => {
  return (
    <Layout className='app-container'>
      <Header />
      <AppMain {...props} />
    </Layout>
  )
}

export default WebLayout
