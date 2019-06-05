import React from 'react';
import SideNav from '../SideNav';
import MainNav from './MainNav';


class Dashboard extends React.Component{

    render(){
        return (
            <div>
                <SideNav />
                <MainNav />
            </div>
        )
    }
}

export default Dashboard;