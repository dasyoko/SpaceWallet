import React, {Component} from 'react'
import TextField from 'material-ui/TextField/TextField';
import Dialog from 'material-ui/Dialog/'
import FlatButton from 'material-ui/FlatButton'

class WalletPrompt extends Component {
    constructor(props) {
        super(props);
        this.state = {wallet: "" , amount: 0, open: props.open}
    }
    componentWillReceiveProps(nextProps) {
        this.setState({ open: nextProps.open }); 
      }

    handleOpen = () => {
        this.setState({open: true});
    };
    
    handleClose = () => {
        this.setState({open: false});
    };

    sendTransaction = () => {
        //var request = require("request");

    }

    walletChange(e) {
        this.setState({wallet: e.target.value})
    }
    amountChange(e) {
        this.setState({amount: e.target.value})
    }
    render() {
        const actions = [
            <FlatButton
              label="Cancel"
              primary={true}
              onClick={this.handleClose}
            />,
            <FlatButton
              label="Submit"
              primary={true}
              keyboardFocused={true}
              onClick={this.sendTransaction} // To be changed later
            />,
          ];
      return(
        <div>
        <Dialog
          title="Wallet Payment"
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}>
          Enter a wallet address:&nbsp;
          <TextField onChange={this.walletChange.bind(this)}  hintText="Wallet Address"/>
          <p/>Amount:&nbsp; 
          <TextField onChange={this.amountChange.bind(this)}  hintText="Amount"/>
        </Dialog>
      </div>
      )
    }
}

export default WalletPrompt;