import React from 'react';
import Layout from '../components/Layout';
import products from '../utils/products.json';
import './Product.css';
import { connect } from 'react-redux';
import { addToCart } from '../redux/actions/cart';
import { addToFavorites } from '../redux/actions/favorites';
import { useParams } from "react-router-dom";
import { BrowserRouter } from 'react-router-dom';

function Product(props) {
    
    
    let { productId } = useParams();
    console.log(productId);

    const categoryValues = Object.values(products);
    const productItems = categoryValues.reduce((acc, category) => {
        return [
            ...acc,
            ...category.items
        ]
    }, []);

    const currentProduct = productItems.find(product => {
        return Number(productId) === product.id;
    });

    return (
        <Layout>
            <div className="product-page container-fluid container-min-max-width">
                <h1 className="my-5 h2">{currentProduct.name}</h1>
                <div className="product-info d-flex">
                    <div className="image-wrapper d-flex mr-5">
                        <img src={currentProduct.image} alt="Product presentation"/>
                    </div>
                    <div className="product-details">
                        <p className="h3 text-danger">{currentProduct.price} {currentProduct.currency}</p>
                        <button
                            className="btn btn-dark mb-4 font-weight-bold"
                            onClick={() => {
                                this.props.addToCart({
                                    currentProduct: {
                                        id: currentProduct.id,
                                        name: currentProduct.name,
                                        price: currentProduct.price,
                                        currency: currentProduct.currency,
                                        image: currentProduct.image
                                    }
                                })
                            }}
                        >
                            Adaugă în coș
                        </button>
                        <button
                            className="btn btn-dark mb-4 font-weight-bold"
                            onClick={() => {
                                this.props.addToFavorites({
                                    currentProduct: {
                                        id: currentProduct.id,
                                        name: currentProduct.name,
                                        price: currentProduct.price,
                                        currency: currentProduct.currency,
                                        image: currentProduct.image
                                    }
                                })
                            }}
                        >
                            Adaugă la favorite
                        </button>
                        <p><span className="font-weight-bold">Mărime</span>: {currentProduct.size}</p>
                        <p><span className="font-weight-bold">Culoare</span>: {currentProduct.colour}</p>
                        <p><span className="font-weight-bold">Material</span>: {currentProduct.material}</p>
                        <p><span className="font-weight-bold">Brand</span>: {currentProduct.brand}</p>
                        <p className="font-weight-bold mb-1">Descriere:</p>
                        <p>{currentProduct.description}</p>
                    </div>
                </div>
            </div>
        </Layout>
    );
}

function mapDispatchToProps(dispatch) {
    return {
        addToCart: (payload) => dispatch(addToCart(payload)),
        addToFavorites: (payload) => dispatch(addToFavorites(payload))
    }
}


export default connect(null, mapDispatchToProps)(Product);


