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
        var self = this;
        var options = { method: 'GET',
        url: 'http://172.46.2.78:3000/getContracts/',
        headers: 
        { 'Content-Type': 'application/json', jwt:  window.sessionStorage.getItem("jwt")}};
        
        request(options, function (error, response, body) {
            if(response.statusCode !== 200) { 
                alert("No contracts found!")
            }
            else {
                console.log(body)
                self.setState({data: JSON.parse(body), dataLoaded: true});
            }
        });
    }
    render() {
        if(this.state.dataLoaded) {
            return(<div><AppBar/><List>{this.state.data.map(function(listValue, index){
                return <div><ListItem key={index} primaryText={"Category: " + listValue.name}>{listValue.desc}</ListItem><p/></div>;
              })}</List></div>)
        }
        else {
            return(null)
        }
    }
}
export default Contracts;