import React, {useState} from "react";
import { Layout, Menu } from 'antd';
import { Route, Routes, Link } from 'react-router-dom';
import { Welcome } from "../Welcume/Welcome.js";
import { Home } from "../Home/Home.js";
import { Catalog } from "../Catalog/Catalog.js";
import { Delivery } from "../Delivery/Delivery.js";
import { Contacts } from "../Contacts/Contacts.js";
import { FooterMain } from "../Footer/FooterMain.js";
import './Layout.css';

// [ANT DESIGN] <Menu defaultSelectedKeys={['1']}></Menu> отображение при загрузке сайта соответствующего менюИтема по key, пока убрал

export const LayoutMain = () => {
    //NicotineFilter, TODO: добавить эти стейты в редакс, т.е. избавиться от useState()
    const plainOptions = ["Легкий", "Средний", "Крепкий", "Очень крепкий"];
    const defaultCheckedList = ["Средний", "Крепкий", "Очень крепкий"];    

    const tooltipText = '0-20мг легкий, 20-40мг средний, 40-60мг крепкий, 60+мг очень крепкий';
    const [checkedList, setCheckedList] = useState(defaultCheckedList);
    const [indeterminate, setIndeterminate] = useState(true);
    const [checkAll, setCheckAll] = useState(false);
    //debugger
    const onChange = (list) => {
        setCheckedList(list);
        setIndeterminate(!!list.length && list.length < plainOptions.length);
        setCheckAll(list.length === plainOptions.length);
    };

    const onCheckAllChange = (e) => {
        setCheckedList(e.target.checked ? plainOptions : []);
        setIndeterminate(false);
        setCheckAll(e.target.checked);
    };

    const { Header, Content, Footer } = Layout;
    return (
        <Layout>
            <Header style={{ position: 'fixed', zIndex: 1, width: '100%', padding: 0 }}>
                <Menu className='menu-item' theme="light" mode="horizontal" style={{ display: 'flex', justifyContent: 'center'}}>
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
                        <Link to="/contacts"><span className='contacts'>Контакты</span></Link>
                    </Menu.Item>
                </Menu>
            </Header>

            <Content className="site-layout" style={{ padding: '0 50px', marginTop: 64, backgroundColor: "#fff" }}>
                <Routes>
                    <Route path="/" element={<Welcome/>} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/catalog" element={<Catalog
                    onChangeNicotineFilter={onChange}
                    onCheckAllChangeNicotineFilter={onCheckAllChange}
                    plainOptions={plainOptions}
                    tooltipText={tooltipText}
                    checkedList={checkedList}
                    indeterminate={indeterminate}
                    checkAll={checkAll}/>} />
                    <Route path="/delivery" element={<Delivery />} />
                    <Route path="/contacts" element={<Contacts />} />
                </Routes>
            </Content>

            <Footer>
                <FooterMain />
            </Footer>
        </Layout>
    )
}