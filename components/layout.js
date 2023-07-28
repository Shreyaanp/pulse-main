import { useState } from 'react';
import Image from 'next/image';
import B_logo from '../public/b_logo.png';
import  W_logo from '../public/w_logo.png';
import Head from 'next/head';
import { Layout as AntLayout, Menu, Switch } from 'antd';
import {
  HomeOutlined,
  InfoCircleOutlined,
  SettingOutlined,
} from '@ant-design/icons';

const { Header, Content, Footer } = AntLayout;

const Layout = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);

  const handleThemeChange = (checked) => {
    setDarkMode(checked);
  };

  return (
    <>
      <Head>
        <title>Pulse Fashion Solution</title>
      </Head>
      <AntLayout style={{
        minHeight: '100vh',
        width: '100%',
        background: darkMode ? '#001529' : '#fff',
        color: darkMode ? '#fff' : '#001529',

      }}>

          <Menu theme={darkMode ? 'dark' : 'light'} mode="horizontal" defaultSelectedKeys={['1']}
                style={
                    {
                        height
                        : '64px',
                        padding: '0 50px',
                        lineHeight: '64px',
                        background: darkMode ? '#001529' : '#fff',
                        color: darkMode ? '#fff' : '#001529',
                        borderBottom: '1px solid #f0f0f0'
                    }
                }
          >
            <Menu.Item key="1" icon={<HomeOutlined />}>
              Home
            </Menu.Item>
            <Menu.Item key="2" icon={<InfoCircleOutlined />}>
              About
            </Menu.Item>
            <Menu.Item key="3" icon={<SettingOutlined />}>
              Settings
            </Menu.Item>
            <Menu.Item key="4">
                <Switch

                    checkedChildren="Dark"
                    unCheckedChildren="Light"
                    onChange={handleThemeChange}
                />
            </Menu.Item>
            <Image src={
                darkMode ? W_logo : B_logo

            } alt="Pulse Fashion Solution" width={200}

                style={
                    {
                        position: 'absolute',
                        right : '10px',

                }
            }
            />
          </Menu>

        <Content style={{ padding: '0 50px', marginTop: 64 }}>
          <div className="site-layout-content">{children}</div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Pulse Fashion Pvt LTD © {new Date().getFullYear()}</Footer>
      </AntLayout>
    </>
  );
};

export default Layout;
