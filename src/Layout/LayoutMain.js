import React from "react";
import { Layout, Menu } from 'antd';
import { Route, Routes, Link } from 'react-router-dom';

import { Welcome } from "../Welcume/Welcome.js";
import { Home } from "../Home/Home.js";
import { Catalog } from "../Catalog/Catalog.js";
import { Delivery } from "../Delivery/Delivery.js";
import { About } from "../About/About.js";
import { FooterMain } from "../Footer/FooterMain.js";
import './Layout.css'

export const LayoutMain = () => {
    const { Header, Content, Footer } = Layout;
    return (
        <Layout>
            <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>

                <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']} style={{ display: 'flex', justifyContent: 'center' }}>
                    <Menu.Item key="1">
                        <Link to='/home'><span className="home">Главная</span></Link>

                    </Menu.Item>

                    <Menu.Item className='menu-item' style={{ marginLeft: "6rem" }} key="2">
                        <Link to="/catalog"><span className='catalog'>Каталог</span></Link>
                    </Menu.Item>

                    <Menu.Item className='menu-item' style={{ marginLeft: "6rem" }} key="3">
                        <Link to="/delivery"><span className='delivery'>Доставка</span></Link>
                    </Menu.Item>

                    <Menu.Item className='menu-item' style={{ marginLeft: "6rem" }} key="4">
                        <Link to="/about"><span className='about'>О нас</span></Link>
                    </Menu.Item>
                </Menu>

            </Header>

            <Content className="site-layout" style={{ padding: '0 50px', marginTop: 64, backgroundColor: "#fff" }}>
                <Routes>
                    <Route path="/" element={<Welcome/>} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/catalog" element={<Catalog />} />
                    <Route path="/delivery" element={<Delivery />} />
                    <Route path="/about" element={<About />} />
                </Routes>
            </Content>
            <Footer>
                <FooterMain />
            </Footer>
        </Layout>
    )
}