import React, { Component } from 'react'
import AppBar from '../AppBar';
import RaisedButton from 'material-ui/RaisedButton/RaisedButton';
import WalletPrompt from './dialogs/WalletPrompt';
import '../../App.css';


class WalletDetails extends Component {
    constructor(props) {
        super(props);
        this.state = { dataLoaded : false, walletDetails : {}, prompt: false}

        /* Structure of wallet Details
            coin: balance of wallet
            wallet: Wallet address
        */
    }

    componentDidMount() {
        var request = require("request");
        var self = this;
        var options = { method: 'GET',
        url: 'http://172.46.2.78:3000/getWalletDetails/',
        headers: 
        { jwt: sessionStorage.getItem("jwt")}}
        request(options, function (error, response, body) {
            if (error) throw new Error(error);
            self.setState({walletDetails: JSON.parse(body), dataLoaded: true});
        });
    }

    promptUser() {
        this.setState({prompt: true})
    }
    render() {
        if(!this.state.dataLoaded || window.sessionStorage.getItem("jwt") == null) {
            // If data has not loaded or if we do not have an auth token, load nothing
            if(window.sessionStorage.getItem("jwt") == null) {
                window.location = "/"
            }
            return(<AppBar/>);
        }
        else {
            console.log(this.state.walletDetails.coin)
            return(
            <div>
                <AppBar/>
                <center>
                <h1>Wallet Information</h1>
                <h2>{this.state.walletDetails.coin} SC</h2>
                <div className="financialDetails">
                    <RaisedButton onClick={this.promptUser.bind(this)} label="Send"/>
                    <RaisedButton className="secondBtn" label="Check Transaction History"/>
                </div>
                <WalletPrompt open = {this.state.prompt} />
                </center>
            </div>) 
        }
    }
}

export default WalletDetails;