import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as actions from '../../actions';

export class BasketConfirmPage extends React.Component {

    onConfirmProducts = () => {
        this.props.emptyBasket();
    };
    confirmButton = () => {
        if (this.props.basket.selectedProducts.length > 0) {
            return <Link to="/thanks" onClick={this.onConfirmProducts} className="btn btn-success pull-xs-right btn-confirm">Confirm products</Link>;
        }
    };

    render() {
        const selectedProducts = this.props.basket.selectedProducts || [];
        return (
            <div className="basketConfirmPage-component">
                <hr />
                <h3>Your basket contains:</h3>
                <hr />
                <ul>
                    {selectedProducts.map((el) => {
                        return <li key={el.id}>{el.product}</li>;
                    })}
                </ul>
                <hr />
                <Link to="/catalogue" className="btn btn-warning btn-back">Back to selection</Link>
                {this.confirmButton()}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        customerID: state.user.customerID,
        basket: state.basket,
    };
}

export default connect(mapStateToProps, { ...actions })(BasketConfirmPage);
    //it seems you ahve no itesm in your basket, add them NOW (link)