import { useState } from 'react';
import Image from 'next/image';
import B_logo from '../public/b_logo.png';
import W_logo from '../public/w_logo.png';
import Head from 'next/head';
import { Layout as AntLayout, Button, Menu } from 'antd';
import {
  HomeOutlined,
  InfoCircleOutlined,
  SlidersOutlined,
  TeamOutlined,
  CustomerServiceOutlined,
  FileProtectOutlined,
  ContactsOutlined,
  BulbOutlined,
  BulbFilled,
} from '@ant-design/icons';
import Home from '@/components/home'
import ImageCarousel from './imagecarousel';

const { Header, Content, Footer } = AntLayout;

const Layout = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);
  const [selectedMenuItem, setSelectedMenuItem] = useState('1'); // New state

  const handleThemeChange = () => {
    setDarkMode(!darkMode);
  };

  const handleMenuClick = (e) => { // New function
    setSelectedMenuItem(e.key);
  };

  const menuItems = [
    { key: '1', icon: <HomeOutlined />, label: 'Home' },
    { key: '2', icon: <InfoCircleOutlined />, label: 'About' },
    { key: '3', icon: <SlidersOutlined />, label: 'Manufacturing Facility' },
    { key: '4', icon: <TeamOutlined />, label: 'People and Processes' },
    { key: '5', icon: <CustomerServiceOutlined />, label: 'Services and Products' },
    { key: '6', icon: <FileProtectOutlined />, label: 'Awards and Certifications' },
    { key: '7', icon: <ContactsOutlined />, label: 'Contact' },
  ];

  return (
    <div>
      <Head>
        <title>Pulse Fashion Solution</title>
      </Head>
      <div className='main'>
      <AntLayout className={`layout ${darkMode ? 'dark-mode' : 'light-mode'}`}>
        <Header className={`header ${darkMode ? 'dark-mode' : 'light-mode'}`}>
          <Menu
            theme={darkMode ? 'dark' : 'light'}
            mode="horizontal"
            defaultSelectedKeys={['1']}
            className="menu"
            onClick={handleMenuClick} // Added onClick handler
          >
            {menuItems.map(item => (
              <Menu.Item key={item.key} icon={item.icon}>
                {item.label}
              </Menu.Item>
            ))}
          </Menu>
          <Image className="logo" src={darkMode ? W_logo : B_logo} alt="logo" width={220} />
        </Header>
        <Content className="content">
          <div>
            <Button type="primary" onClick={handleThemeChange} className={`theme-button ${darkMode ? 'dark-mode' : 'light-mode'}`}>
              {darkMode ? <BulbFilled /> : <BulbOutlined />}
            </Button>
            {/* Conditionally render content */}
            {selectedMenuItem === '1' && <div>
              <Home/>
              </div>}
            {selectedMenuItem === '2' && <div>
              <ImageCarousel/>
              </div>}

            {selectedMenuItem === '3' && <div>Manufacturing Facility Content</div>}
            {selectedMenuItem === '4' && <div>People and Processes Content</div>}
            {selectedMenuItem === '5' && <div>Services and Products Content</div>}
            {selectedMenuItem === '6' && <div>Awards and Certifications Content</div>}
            {selectedMenuItem === '7' && <div>Contact Content</div>}
          </div>
        </Content>
        <Footer className="footer">Pulse Fashion Pvt LTD © {new Date().getFullYear()}</Footer>
      </AntLayout>
      </div>
    </div>
  );
};

export default Layout;
