import React, { Component } from 'react';
import CardComponent from './CardComponent';

class Product extends Component {
    constructor(props) {
        super(props);
        this.state = { data: [] };
    }

    componentDidMount() {
        fetch("/product.json")
            .then((res) => res.json())
            .then((json) => {
                this.setState({
                    data: json.products
                });
            });
    }

    render() {
        return (
            <div style={{ display: "flex", flexFlow: "wrap", justifyContent: 'space-around', padding: '10px' }}>
                {this.state.data.map((product, index) =>
                    <CardComponent
                        index={index}
                        key={product.id}
                        imageUrl={product.imageUrl}
                        title={product.title}
                        price={product.price}
                        manufacturer={product.manufacturer}
                    />
                )}
            </div>
        )

    }
}
export default Product;