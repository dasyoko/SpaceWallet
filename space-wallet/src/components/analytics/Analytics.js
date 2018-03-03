import React, {Component} from 'react'
import AppBar from '../AppBar';

class Analytics extends Component {
    constructor(props) {
        super(props);
        this.state = {dataLoaded: false, data : {}}
    }
    componentDidMount() {
        var request = require("request");

        var options = { method: 'GET',
        url: 'http://172.46.2.78:3000/getAnalytics/',
        headers: 
        { 'Content-Type': 'application/json' },
        body: { jwt:  window.sessionStorage.getItem("jwt")},
        json: true };

        request(options, function (error, response, body) {
            if(response.statusCode !== 200) {
                window.sessionStorage.clear();
                window.location = "/"
            }
            else {
                this.setState({data: body, dataLoaded: true});
                // Render the chart or visualization
            }
        });
    }
    render() {
        return(<AppBar/>)
    }
}

export default Analytics;