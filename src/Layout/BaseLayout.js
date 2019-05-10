import React, { useState } from 'react'
import Routes from 'Routes'
import { Layout, Menu, Icon } from 'antd'
// import SideBar from 'Layout/SideBar'
import styled, { css } from 'styled-components'

const {
  Header, Content, Footer, Sider,
} = Layout;

const ContentWrapper = styled.div`
  padding: 24px; 
  background: #fff;
  min-height: 500px;
`

const StyledSider = styled(Sider)`
  overflow: auto;
  height: 100vh;
  position: fixed;
  left: 0;
`

const renderMenu = (menus) => (
  menus.map((item, index) => (
    <Menu.Item key={index}>
      <Icon type="user" />
      <span className="nav-text">nav 1</span>
    </Menu.Item>
  ))
)

const menus = [1,2,3,4,5,6,7,8,9]


function BaseLayout() {

  const [collapsed, setCollapsed] = useState(false)

  return (
    <Layout>
    <StyledSider 
      style={{
        overflow: 'auto', height: '100vh', position: 'fixed', left: 0,
      }}
    >
      <div className="logo" />
      <Menu style={{height: '100%'}} mode="inline" defaultSelectedKeys={['4']}>
        {
          renderMenu(menus)
        }
      </Menu>
    </StyledSider>
    <Layout style={{ marginLeft: 200 }}>
      <Header style={{ background: '#fff', padding: 0 }} >
        <Icon type="user"/>
      </Header>
      <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
        <ContentWrapper>
          <Routes />
        </ContentWrapper>
      </Content>
      <Footer style={{ textAlign: 'center' }}>
        Ant Design ©2018 Created by Ant UED
      </Footer>
    </Layout>
  </Layout>
  )
}

export default BaseLayout