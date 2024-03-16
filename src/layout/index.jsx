import React from 'react'
import { Layout, Row, Col, BackTop } from 'antd'

import AppMain from './AppMain'

const WebLayout = props => {
  return (
    <Layout className='app-container'>
      <AppMain {...props} />
    </Layout>
  )
}

export default WebLayout
