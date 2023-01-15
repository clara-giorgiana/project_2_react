import React from 'react';
import ProductItem from './ProductItem';

class ProductList extends React.Component{
    constructor(props) {
        super(props);
      }  


    render() {
        const { products } = this.props;
        return (
            <div className="row my-4">
                { products.map((product) => {
                    return <ProductItem
                        {...product}
                        key={product.id}
                    />
                })}
            </div>
        );
                }
}


export default ProductList;