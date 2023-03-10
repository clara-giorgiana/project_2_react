import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/images/logo3.png";
import { ReactComponent as ShoppingCart } from "../assets/icons/shopping-cart.svg";
import { ReactComponent as FavoritesIcon } from "../assets/icons/favorites-icon2.svg";
import { ReactComponent as Login } from "../assets/icons/login-svgrepo-com.svg";
import { ReactComponent as Logout } from "../assets/icons/logout-svgrepo-com.svg";
import "./Header.css";
import { connect } from "react-redux";
import { logoutUser } from "../redux/actions/user";

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <header className="border-bottom mb-3">
        <div className="container-fluid container-min-max-width d-flex justify-content-between align-items-center">
          <Link to="/" className="my-3">
            <img src={Logo} alt="RoadFanaticShop" className="logo" />
          </Link>
          <div>
            {this.props.user ? (
              <p>Salut, {this.props.user.displayName}!</p>
            ) : null}
            <div className="d-flex justify-content-end">
              <div className="d-flex align-items-center">
                {this.props.user ? (
                  <p className="loginLink" onClick={() => this.props.signOut()}>
                    Delogare &nbsp;<Logout className="ml-2" width="30" />
                  </p>
                ) : (
                  <Link to="/login" className="loginLink">
                    Logare &nbsp;<Login className="ml-2" width="30" />
                  </Link>
                )}
              </div>
              <div className="d-flex align-items-center">
                <Link to="/cart" className="numberOfArticlesLink">
                  <ShoppingCart className="ml-2" />
                  <p className="numberOfArticles">
                    {this.props.numberOfProducts}
                  </p>
                </Link>
              </div>
              <div className="d-flex align-items-center">
                <Link to="/favorites" className="d-flex">
                  <FavoritesIcon className="ml-2" width="30" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

function mapStateToProps(state) {
  return {
    numberOfProducts: state.cart.products.length,
    user: state.user.data,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    signOut: () => dispatch(logoutUser()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
