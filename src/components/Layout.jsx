import React from 'react';
import Header from './Header.jsx'; 

function Layout({children}){
    return(
        <div className="layout">
            <Header/>
            <div className="content">{children}</div>
        </div>
    )
}
export default Layout