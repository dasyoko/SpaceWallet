import {Component} from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';

class MainDrawer extends Component {
    constructor(props) {
        super(props);
    }
    handleToggle = () => this.setState({open: !this.state.open});
    render() {
        return (
            <div>
                <RaisedButton label="Toggle Drawer"
                onClick={this.handleToggle}
                />
                <Drawer open={this.state.open}>
                <MenuItem>Menu Item</MenuItem>
                <MenuItem>Menu Item 2</MenuItem>
                </Drawer>
            </div>
            )
    }
}