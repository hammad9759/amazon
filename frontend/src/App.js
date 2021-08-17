import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';

function App() {
	const openMenu = () =>{
		document.querySelector(".sidebar").classList.add("open");
	}
	const closeMenu = () =>{
		document.querySelector(".sidebar").classList.remove("open");
	}
    return (
    <BrowserRouter>
    <div className="grid-container">
        <header className="header">
            <div className="brand">
				<button onClick={openMenu}>
                    &#9776;
                </button>
                <a href="/">amazona</a>
            </div>
            <div className="header-links">
                <a href="/cart">Cart</a>
                <a href="/signin">Signin</a>
            </div>
        </header>

        <aside className="sidebar">
            <h3> Shopping categories </h3>
            <button className="sidebar-close-button" onClick={closeMenu}>x</button>
            <ul className="sidebar_menu">
                <a href="/pants">
                    <li> pants  </li>
                </a>
                <a href="/shirts">
                    <li> shirts  </li>
                </a>
            </ul>
        </aside>

        <main className="main">
            <Route path="/product/:id" component={ProductScreen} exact></Route>
            <Route path="/" component={HomeScreen} exact></Route>            
        </main>
        <footer className="footer">
            all rights received
        </footer>
    </div>
    </BrowserRouter>
    );
}

export default App;