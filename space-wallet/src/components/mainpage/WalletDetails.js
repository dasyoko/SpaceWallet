import React, { Component } from 'react'
import AppBar from '../AppBar';
import RaisedButton from 'material-ui/RaisedButton/RaisedButton';
import WalletPrompt from './dialogs/WalletPrompt';


class WalletDetails extends Component {
    constructor(props) {
        super(props);
        this.state = { dataLoaded : false, walletDetails : {}, prompt: false}

        /* Structure of wallet Details
            coin: balance of wallet
            wallet: Wallet address
        */
    }
    promptUser() {
        this.setState({prompt: true})
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
                    <RaisedButton onClick={this.promptUser.bind(this)} label="Send"/>
                    <RaisedButton className="secondBtn" label="Check Transaction History"/>
                </div>
                <WalletPrompt open = {this.state.prompt} />
            </div>) 
        }
    }
}

export default WalletDetails;