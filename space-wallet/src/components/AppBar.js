import React, {Component} from 'react';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';

const styles = {
    title: {
      cursor: 'pointer',
    },
  };
class SpaceAppBar extends Component {
    constructor(prop) {
        super(prop);
        this.state = {open: false, loggedIn: false};
    }
    handleToggle = () => this.setState({open: !this.state.open});
    render() {
        return(
        <div>
            <AppBar onClick={this.handleToggle} href="/" title={<span style={styles.title}>SpaceWallet</span>}/>
                <Drawer docked={false} open={this.state.open} onRequestChange={(open) => this.setState({open})}>
                  <MenuItem>Main</MenuItem>
                  <MenuItem>Analytics</MenuItem>
                  <MenuItem>Contracts</MenuItem>
                  <MenuItem>Sign-out</MenuItem>
                </Drawer>
        </div>
        )
    }
}
export default SpaceAppBar;