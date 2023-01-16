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
                <h2>{ categoryName }</h2>
                <ProductList products={items} />
            </div>
        </Layout>
    );
}


export default Category;

// class Category extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             category: {},
//             items: []
//         }
//     }

//     componentDidMount() {
//         // const { categoryName } = this.params.categoryName;
//         // const { match } = this.props;
//         // const categoryName = match.params.categoryName;
//         let { categoryName } = useParams();
//         console.log(categoryName);
//         this.setState({
//             // category: products[categoryName],
//             // items: products[categoryName].items
//         });
//     }

// }

