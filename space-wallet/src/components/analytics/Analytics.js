import React, {Component} from 'react'
import AppBar from '../AppBar';
import PieChart from 'react-minimal-pie-chart';

class Analytics extends Component {
    constructor(props) {
        super(props);
        this.state = {dataLoaded: false, data : {}}
    }
    componentDidMount() {
        var request = require("request");
        var self = this;
        var options = { method: 'GET',
        url: 'http://172.46.2.78:3000/getAnalytics/',
        headers: 
        { 'Content-Type': 'application/json', jwt: sessionStorage.getItem('jwt')}};

        request(options, function (error, response, body) {
            if(response.statusCode !== 200) {
                window.sessionStorage.clear();
                window.location = "/"
            }
            else {
                self.setState({data: JSON.parse(body), dataLoaded: true});
                // Render the chart or visualization

            }
        });
    }
    render() {
        if(this.state.dataLoaded) {
            console.log(this.state.data.analytics)
            return(<div><AppBar/><PieChart
                data={[{ value: this.state.data.analytics.person, key: 1, color: '#E38627' },]}/></div>)
        }   
        else {
            return(<AppBar/>)
        }
    }
}

export default Analytics;