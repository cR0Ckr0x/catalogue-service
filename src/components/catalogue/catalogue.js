import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';

import CatalogueService from './catalogue_service';
import Basket from '../basket/basket';

export class Catalogue extends React.Component {

    componentWillMount() {
        this.props.getUserLocationID(this.props.customerID);
    }

    render() {
        const locationID = this.props.locationID || 1;
        return (
            <div className="catalogue-component">
                <hr />
                <div className="row">
                    <div className="col-xs-4 text-with-input">Your current location:</div>
                    <div className="col-xs-8">
                        <select className="form-control disabled" disabled value={locationID}>
                            <option value="1">London</option>
                            <option value="2">Liverpool</option>
                        </select>
                    </div>
                </div>
                <hr />
                <div className="row">
                    <div className="col-xs-6">
                        <strong>SPORTS</strong>
                        <CatalogueService locationID={locationID} category="Sports" />
                        <strong>NEWS</strong>
                        <CatalogueService locationID={locationID} category="News" />
                    </div>
                    <div className="col-xs-6">
                        <Basket />
                    </div>
                </div>
                <hr />
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        customerID: state.user.customerID,
        locationID: state.locationID
    };
}

export default connect(mapStateToProps, { ...actions })(Catalogue);