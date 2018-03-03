import React, { Component } from 'react'
import AppBar from '../AppBar';
import RaisedButton from 'material-ui/RaisedButton/RaisedButton';


class WalletDetails extends Component {
    constructor(props) {
        super(props);
        this.state = { dataLoaded : false, walletDetails : {}}

        /* Structure of wallet Details
            coin: balance of wallet
            wallet: Wallet address
        */
    }
    render() {
        if(this.state.dataLoaded)
            return(<AppBar/>);
        else {
            return(
            <div>
                <AppBar/>
                <h1>Wallet Information</h1>
                <h2>{this.state.walletDetails.coin}</h2>
                <div className="financialDetails">
                    <RaisedButton label="Send"/>
                    <RaisedButton className="secondBtn" label="Check Transaction History"/>
                </div>
            </div>) 
        }
    }
}

export default WalletDetails;