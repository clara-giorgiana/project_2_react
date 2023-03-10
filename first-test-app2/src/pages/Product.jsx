import React from "react";
import Layout from "../components/Layout";
import products from "../utils/products.json";
import "./Product.css";
import { connect } from "react-redux";
import { addToCart } from "../redux/actions/cart";
import { addToFavorites } from "../redux/actions/favorites";
import { removeFromFavorites } from "../redux/actions/favorites";
import { useParams } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import { ReactComponent as FavoritesIcon } from "../assets/icons/favorites-icon2.svg";
import { ReactComponent as FavoritesIcon2 } from "../assets/icons/favorites-icon4.svg";

function Product(props) {
  let { productId } = useParams();
  console.log(productId);

  const categoryValues = Object.values(products);
  const productItems = categoryValues.reduce((acc, category) => {
    return [...acc, ...category.items];
  }, []);

  const currentProduct = productItems.find((product) => {
    return Number(productId) === product.id;
  });

  return (
    <Layout>
      <div className="product-page container-fluid container-min-max-width">
        <h1 className="my-5 h2">{currentProduct.name}</h1>
        <div className="product-info d-flex">
          <div className="image-wrapper d-flex mr-5">
            <img src={currentProduct.image} alt="Product presentation" />
          </div>
          <div className="product-details">
            <p className="h3 text-danger">
              {currentProduct.price} {currentProduct.currency}
            </p>
            <div className="buttons">
              <button
                className="btn btn-dark mb-4 font-weight-bold"
                style={{ marginTop: 16 }}
                onClick={() => {
                  props.addToCart({
                    product: {
                      id: currentProduct.id,
                      name: currentProduct.name,
                      price: currentProduct.price,
                      currency: currentProduct.currency,
                      image: currentProduct.image,
                    },
                  });
                }}
              >
                Adaug?? ??n co??
              </button>
              <button
                className="btn-favorite"
                onClick={() => {
                  if (!checkProduct(props, currentProduct.id)) {
                    props.addToFavorites({
                      product: {
                        id: currentProduct.id,
                        name: currentProduct.name,
                        price: currentProduct.price,
                        currency: currentProduct.currency,
                        image: currentProduct.image,
                      },
                    });
                  } else {
                    props.removeFromFavorites({ id: currentProduct.id });
                  }
                }}
              >
                {checkProduct(props, currentProduct.id) ? (
                  <FavoritesIcon2 className="ml-2" width="30" />
                ) : (
                  <FavoritesIcon className="ml-2" width="30" />
                )}
              </button>
            </div>

            <p>
              <span className="font-weight-bold">M??rime</span>:{" "}
              {currentProduct.size}
            </p>
            <p>
              <span className="font-weight-bold">Culoare</span>:{" "}
              {currentProduct.colour}
            </p>
            <p>
              <span className="font-weight-bold">Material</span>:{" "}
              {currentProduct.material}
            </p>
            <p>
              <span className="font-weight-bold">Brand</span>:{" "}
              {currentProduct.brand}
            </p>
            <p className="font-weight-bold mb-1">Descriere:</p>
            <p>{currentProduct.description}</p>
          </div>
        </div>
      </div>
    </Layout>
  );
}

function checkProduct(props, productId) {
  var productInfavorites = false;
  props.favProducts.map((product1) => {
    if (product1.id === productId) {
      productInfavorites = true;
    }
  });
  console.log(productId + "productInfavorites: " + productInfavorites);
  return productInfavorites;
}
function mapStateToProps(state) {
  return {
    favProducts: state.favorites.products,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    addToCart: (payload) => dispatch(addToCart(payload)),
    addToFavorites: (payload) => dispatch(addToFavorites(payload)),
    removeFromFavorites: (payload) => dispatch(removeFromFavorites(payload)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Product);
