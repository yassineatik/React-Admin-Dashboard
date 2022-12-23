import React from 'react'
import './Sidebar.css'
import logo from '../../imgs/logo.png';
import { UilSignOutAlt } from '@iconscout/react-unicons';
import { SidebarData } from '../../Data/Data';
import { useState } from 'react';

const Sidebar = () => {
    const [selected, setSelected] = useState(0);
    return (
        <div className='Sidebar'>
            {/* Logo */}
            <div className="logo">
                <img src={logo} alt="" />
                <span>Sh<span>o</span>ps</span>
            </div>
            {/* // menu */}
            <div className="menu">
                {
                    SidebarData.map((data, index) => {
                        return (

                            <div className={selected === index ? 'menuItem active' : 'menuItem'} key={index}
                                onClick={() => setSelected(index)}>
                                <div>
                                    <data.icon />
                                </div>
                                <span>{data.heading}</span>
                            </div>
                        )
                    })
                }
                <div className='menuItem'>
                    <div>
                        <UilSignOutAlt />
                    </div>
                    <span>Sign Out</span>
                </div>
            </div>
        </div>
    )
}

export default Sidebar