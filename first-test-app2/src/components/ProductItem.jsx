import React from 'react';
import './ProductItem.css';
import { connect } from 'react-redux';
import { addToCart } from '../redux/actions/cart';
import { addToFavorites } from '../redux/actions/favorites';
import { Link } from 'react-router-dom';

import { ReactComponent as FavoritesIcon } from '../assets/icons/favorites-icon2.svg';
import { ReactComponent as FavoritesIcon2 } from "../assets/icons/favorites-icon4.svg";

class ProductItem extends React.Component{
    constructor(props) {
        
        super(props);

    }


    render() {
        const {name, price, currency, image, id} = this.props;
        return(
            <div className="product-item col-12 col-md-4 mb-3 d-flex flex-column align-items-center">
                <Link to={`/product/${id}`} className="d-flex flex-column align-items-center">
                    <img src={image} alt="productPhoto" className="mb-2"/>
                    <p className="mb-1 text-center">{ name }</p>
                    <p className="text-center">{ price + currency }</p>
                </Link>
                <button
                    className="btn btn-outline-dark"
                    onClick={() => this.props.addToCart({
                        product: {
                            id,
                            name,
                            price,
                            currency,
                            image
                        }
                    })}
                >
                    Adaugă în coș
                </button>
                <button
                    className="btn-favorite"
                    onClick={() => this.props.addToFavorites({
                        product: {
                            id,
                            name,
                            price,
                            currency,
                            image
                        }
                    })}
                >
                                { this.checkProduct() 
                                ? <FavoritesIcon2 className="ml-2" width="30"/>
                                : <FavoritesIcon className="ml-2" width="30"/>
                            }
                    
                </button>
            </div>
        );
                }

                checkProduct = () => {
                    var productInfavorites = false;
                    // if(this.props.numberOfProducts === 0){
                    //     return false;
                    // }
                    this.props.favProducts.map(product1 => {
                        if (product1.id === this.props.id) {
                            productInfavorites = true;
                        }
                        
                    })
                    console.log("productInfavorites: " + productInfavorites)
                    return productInfavorites;
                }    
}




function mapDispatchToProps(dispatch) {
    return {
        addToCart: (product) => dispatch(addToCart(product)),
        addToFavorites: (product) => dispatch(addToFavorites(product))
    };
}
function mapStateToProps(state) {
    return {
        favProducts: state.favorites.products,
        numberOfProducts: state.favorites.products.length,
    }
}

// function mapDispatchToProps(dispatch) {
//     return {
//         addToFavorites: (product) => dispatch(addToFavorites(product))
//     };
// }

export default connect(mapStateToProps, mapDispatchToProps)(ProductItem);