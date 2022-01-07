import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import classes from './HomePage.module.css';

import NavBar from './NavBar';
import LeftSideBar from './LeftSideBar';
import RightSideBar from './RightSideBar';
import ChatsRightNav from './chats/ChatsRightNav';
import FriendsRightNav from './friends/FriendsRightNav';
import PaymentRightNav from './payments/PaymentRightNav';
import ProfileRightNav from './pages/ProfileRightNav';

import Posts from './Post/Posts';
import Chats from './pages/Chats';
import Friends from './pages/Friends';
import Payment from './pages/Payment';
import Profile from './pages/Profile';


function HomePage() {
    return (
        <div className={classes.layout}>
            <div className={classes.row1}>
                <NavBar />
            </div>
            <div className={classes.row2}>
                <div className={classes.row2_col1}>
                    <LeftSideBar />
                </div>
                <div className={classes.row2_col2}>
                    <Switch>
                        <Route path="/ProjectConnect" exact>
                            <Redirect to="/Posts" />
                        </Route>
                        <Route path="/Posts">
                            <Posts />
                        </Route>
                        <Route path="/Chats">
                            <Chats />
                        </Route>
                        <Route path="/Friends">
                            <Friends />
                        </Route>
                        <Route path="/Payment">
                            <Payment />
                        </Route>
                        <Route path="/Profile">
                            <Profile />
                        </Route>
                    </Switch>
                </div>
                <div className={classes.row2_col3}>
                    <Switch>
                        <Route path="/Posts">
                            <RightSideBar />
                        </Route>
                        <Route path="/Chats">
                            <ChatsRightNav />
                        </Route>
                        <Route path="/Friends">
                            <FriendsRightNav />
                        </Route>
                        <Route path="/Payment">
                            <PaymentRightNav />
                        </Route>
                        <Route path="/Profile">
                            <ProfileRightNav />
                        </Route>
                    </Switch>
                </div>
            </div>
        </div>

    )
}
export default HomePage;