import React from 'react';
import Header from './Header';
import Footer from './Footer';
import './Layout.css';

function Layout(props) {
    return(
        // Stilizarea layout-ului se face din fisierul Layout.css
        <div className="layout">
            <Header/>
                { props.children }
            <Footer/>
        </div>
    );
}

export default Layout;