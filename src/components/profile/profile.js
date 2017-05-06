import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';

export class Profile extends React.Component {

    componentWillMount() {
        this.props.getUserLocationID(this.props.user.customerID);
    }

    onChangeLocation = (evt) => {
        this.props.changeUserLocationID(evt.target.value);
    };

    render() {
        const locationID = this.props.locationID || 1;
        return (
            <div className="profile-component">
                <hr />
                <h3>Customer ID: {this.props.user.customerID}</h3>
                <hr />
                <div className="row">
                    <div className="col-xs-4 text-with-input">Home location:</div>
                    <div className="col-xs-8">
                        <select className="form-control" onChange={this.onChangeLocation} value={locationID}>
                            <option value="1">London</option>
                            <option value="2">Liverpool</option>
                        </select>
                    </div>
                </div>
                <p className="text-danger pull-xs-right">Warning: changing account location empties the basket</p>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        user: state.user,
        locationID: state.locationID
    };
}

export default connect(mapStateToProps, { ...actions })(Profile);