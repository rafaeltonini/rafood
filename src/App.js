import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { useSelector } from 'react-redux';

import HomeScreen from './pages/HomeScreen';
import Tela2Screen from './pages/Tela2Screen';
import { Container, Menu, PageBody } from './AppStyled';
import MenuItem from "./components/MenuItem";
import PrivateRoute from './components/PrivateRoute';
import Cart from "./components/Cart";
import ReactTooltip from 'react-tooltip';

export default () => {
    const name = useSelector(state => state.user.name);

    return (
        <BrowserRouter>
            <Container>
                <Menu>
                    <MenuItem icon="/assets/store.png" link="/" tooltipe="Store" />
                    <MenuItem icon="/assets/order.png" link="/orders" tooltipe="Pedidos"/>
                    <MenuItem icon="/assets/profile.png" link="/profile" tooltipe="Perfil"/>
                </Menu>
                <PageBody>
                    <Switch>
                        <Route exact path="/">
                            <HomeScreen />
                        </Route>
                        <PrivateRoute path="/orders">
                            <div>Tela de Pedidos</div>
                        </PrivateRoute>
                        <PrivateRoute path="/profile">
                            <div>Tela de Perfil</div>
                        </PrivateRoute>
                        <Route path="/tela2/:nome">
                            <Tela2Screen />
                        </Route>
                    </Switch>
                </PageBody>
                <Cart/>
                <ReactTooltip id="tip-top" place="top" effect="solid"/>
                <ReactTooltip id="tip-right" place="right" effect="solid"/>
            </Container>
        </BrowserRouter>
    );
}