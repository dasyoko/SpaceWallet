import React, {Component} from "react"
import {List, ListItem} from 'material-ui/List';
import AppBar from "../AppBar";


class Contracts extends Component {
    constructor(props) {
        super(props);
        this.state = {data: [], dataLoaded: false}
    }
    componentDidMount() {
        var request = require("request");

        var options = { method: 'GET',
        url: 'http://172.46.2.78:3000/getContracts/',
        headers: 
        { 'Content-Type': 'application/json' },
        body: { jwt:  window.sessionStorage.getItem("jwt")},
        json: true };
        
        request(options, function (error, response, body) {
            if(response.statusCode !== 200) { 
                alert("No contracts found!")
            }
            else {
                this.setState({data: body, dataLoaded: true});
            }
        });
    }
    render() {
        if(!this.state.dataLoaded) {
            var contractArray = [];
            for (var i = 0; i < this.state.data.length; i++) {
                contractArray.push(<ListItem primaryText={this.state.data[i].name} />);
            }
            return (<div><AppBar/><List>{contractArray}</List></div>)
        }
    }
}
export default Contracts;