import React from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import CartScreen from './screens/CartScreen';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import SigninScreen from './screens/SigninScreen';
import { signout } from './actions/userActions';
import { useDispatch } from 'react-redux';
import RegisterScreen from './screens/registerScreen';

function App() {
    const cart = useSelector((state) => state.cart);
    const { cartItems } = cart;
  
	const openMenu = () =>{
		document.querySelector(".sidebar").classList.add("open");
	}
	const closeMenu = () =>{
		document.querySelector(".sidebar").classList.remove("open");
	}
    const userSignin = useSelector((state) => state.userSignin);
    const { userInfo } = userSignin;
    const dispatch = useDispatch();
    const signoutHandler = () => {
      dispatch(signout());
    };
    return (
    <BrowserRouter>
    <div className="grid-container">
        <header className="header">
            <div className="brand">
				<button onClick={openMenu}>
                    &#9776;
                </button>
                <Link to="/">amazona</Link>
            </div>
            <div className="header-links">
                <Link to="/cart">Cart 
                {cartItems.length > 0 && (
                    <span className="badge">{cartItems.length}</span>
                )}
                </Link>
                {userInfo ? (
                <div className="dropdown">
                    <Link to="#">
                    {userInfo.name} <i className="fa fa-caret-down"></i>{' '}
                    </Link>
                    <ul className="dropdown-content">
                    <li>
                        <Link to="#signout" onClick={signoutHandler}>
                        Sign Out
                        </Link>
                    </li>
                    </ul>
                </div>
                ) : (
                <Link to="/signin">Sign In</Link>
                )}
            </div>
        </header>

        <aside className="sidebar">
            <h3> Shopping categories </h3>
            <button className="sidebar-close-button" onClick={closeMenu}>x</button>
            <ul className="sidebar_menu">
                <Link to="/pants">
                    <li> pants  </li>
                </Link>
                <Link to="/shirts">
                    <li> shirts  </li>
                </Link>
            </ul>
        </aside>

        <main className="main">
            <Route path="/cart/:id?" component={CartScreen} exact></Route>
            <Route path="/product/:id" component={ProductScreen} exact></Route>            
            <Route path="/signin" component={SigninScreen} exact></Route>
            <Route path="/register" component={RegisterScreen}></Route>
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