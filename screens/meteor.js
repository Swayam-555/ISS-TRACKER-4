import axios from 'axios'
import * as React from 'react';
import { View, Text, Alert } from 'react-native';

export default class Meteor extends React.Component {
    constructor() {
        super();
        this.state = {
            meteors: {}
        }
    }
    componentDidMount() {
        this.getMeteors()
    }
    getMeteors = () => {
        axios
            .get('https://api.nasa.gov/neo/rest/v1/feed?api_key=QdazAZeTogM6xJ3d2oFX0XagwyDjemaREgEIKjoL')
            .then(response => {
                this.setState({
                    meteors: response.data.near_earth_objects
                })
                console.log(this.state.meteors)
            })
            .catch(error => {
                Alert.alert(error.message)
            })
    }
    render() {
        if (Object.keys(this.state.meteors).length === 0) {
            return (
                <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                    <Text style={{ fontSize: 20 }}>{"Loading...."}</Text>
                </View>
            )
        }
        else {
            let meteor_arr = Object.keys(this.state.meteors)
                .map(meteor_date => { return this.state.meteors[meteor_date] })
            console.log(meteor_arr)
            let meteors = [].concat.apply([], meteor_arr);
            console.log(meteors)
            meteors.forEach(function (element) {
                let diameter = (element.estimated_diameter.kilometers.estimated_diameter_min + element.estimated_diameter.kilometers.estimated_diameter_max) / 2;
                let threatScore = (diameter / element.close_approach_data[0].miss_distance.kilometers) * 1000000000;
                element.threat_score = threatScore
            }
            )
            return (

                <View>
                    <Text>
                        METEORS APPROACHING!
    </Text>
                </View>
            )
        }
    }
}