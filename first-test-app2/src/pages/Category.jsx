import React, { Component } from 'react';
import Layout from '../components/Layout';
import products from '../utils/products.json';
import ProductList from '../components/ProductList';
import { useParams } from "react-router-dom";
import { BrowserRouter } from 'react-router-dom';


function Category(props) {
    
    
    let { categoryName } = useParams();
    console.log(categoryName);
    const items = products[categoryName].items;

    return (
        <Layout>
            <div className="container-fluid container-min-max-width">
                <h2>{ products[categoryName].name }</h2>
                <ProductList products={items} />
            </div>
        </Layout>
    );
}


export default Category;


