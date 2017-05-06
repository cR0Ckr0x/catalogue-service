import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

export class Basket extends React.Component {

    confirmButton = () => {
        if (this.props.basket.selectedProducts.length > 0) {
            return <Link to="/basket/confirm" className="btn btn-primary btn-checkout">Checkout</Link>;
        }
    };

    render() {
        const selectedProducts = this.props.basket.selectedProducts || [];
        return (
            <div className="basket-component">
                <h5>Basket:</h5>
                <ul>
                    {selectedProducts.map((el) => {
                        return <li key={el.id}>{el.product}</li>;
                    })}
                </ul>
                {this.confirmButton()}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return { basket: state.basket };
}

export default connect(mapStateToProps)(Basket);