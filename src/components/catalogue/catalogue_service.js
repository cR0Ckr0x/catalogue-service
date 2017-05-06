import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';

export class CatalogueService extends React.Component {

    /**
     * Returns all the available products for the user and location provided
     *
     * In a production environment, this is a database query that filters
     * by the location provided and returns a JSON formatted Result Set
     */
    getData() {
        return [
            { id: 1, category: "Sports", product: "Arsenal TV", dependant_location: 1 },
            { id: 2, category: "Sports", product: "Chelsea TV", dependant_location: 1 },
            { id: 3, category: "Sports", product: "Liverpool TV", dependant_location: 2 },
            { id: 4, category: "News", product: "Sky News", dependant_location: null },
            { id: 5, category: "News", product: "Sky Sports News", dependant_location: null },
        ];
    }

    /**
     * Providing a productID, tells us if it is already among
     * the selected products
     *
     * @param productID the productID to test
     *
     * @returns {boolean} true or false if product is selected
     * and resides already in the basket
     */
    isSelected = (productID) => {
        let selected = false;
        this.props.selectedProducts.forEach((el) => {
            if (el.id === productID) {
                selected = true;
            }
        });
        return selected;
    };

    onSelectProduct(el, evt) {
        if (evt.target.checked) {
            this.props.addProductToBasket(el);
        } else {
            this.props.removeProductFromBasket(el);
        }
    };

    renderProducts() {
        if (!this.props.locationID || !this.props.category) return;

        const category = this.props.category;
        const locationID = this.props.locationID;

        let data = this.getData().filter(function (el) {
            return el.category === category &&
                (!el.dependant_location || el.dependant_location == locationID);
        });

        return data.map((el) => (
            <div key={el.id}>
                <input id={'product-'+el.id}
                       onChange={(evt) => this.onSelectProduct(el, evt)}
                       checked={this.isSelected(el.id)}
                       type="checkbox"
                       className="form-input single-product" />
                <label htmlFor={'product-'+el.id}>{el.product}</label>
            </div>
        ));
    }

    render() {
        return (
            <div className="catalogueService-component">
                <ul>
                    {this.renderProducts()}
                </ul>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return { selectedProducts: state.basket.selectedProducts };
}

export default connect(mapStateToProps, { ...actions })(CatalogueService);