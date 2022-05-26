import axios from 'axios';
import * as React from 'react';
import { Text, View, SafeAreaView, ImageBackground, Image, Alert } from 'react-native';
import MapView, { Marker } from "react-native-maps"

export default class ISSLocationScreen extends React.Component {
    constructor() {
        super();
        this.state = {
            location: {}
        }
    }
    componentDidMount() {
        this.getIssLocation()
    }
    getIssLocation = () => {
        axios
            .get("https://api.wheretheiss.at/v1/satellites/25544.")
            .then(response => {
                this.setState({
                    location: response.data
                })
            })
            .catch(error => {
                Alert.alert(error.message)
            })


    }
    render() {
        if (Object.keys(this.state.location).length === 0) {
            return (
                <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                    <Text style={{ fontSize: 20 }}>{"Loading...."}</Text>
                </View>
            )
        }
        else {


            return (
                <View style={{ flex: 1 }}>
                    <SafeAreaView style={{ flex: 1 }}>
                        <ImageBackground source={require("../assets/iss_bg.jpg")}
                            style={{ flex: 1, resizeMode: "cover" }}>
                            <View style={{ flex: 0.1, alignItems: "center", justifyContent: "center" }}>
                                <Text style={{ color: "white", fontWeight: "bold" }}>
                                    ISS Location
                </Text >
                            </View>
                            <View style={{ flex: 0.7 }}>
                                <MapView region={{
                                    latitude: this.state.location.latitude,
                                    longitude: this.state.location.longitude,
                                    latitudeDelta: 100,
                                    longitudeDelta: 100
                                }}
                                    style={{ width: "100%", height: "100%" }}>
                                    <Marker coordinate={{
                                        longitude: this.state.location.longitude,
                                        latitude: this.state.location.latitude
                                    }}>
                                        <Image source={require("../assets/iss_icon.png")} style={{ height: 100, width: 100 }} />
                                    </Marker>
                                </MapView>

                            </View>
                            <View style={{ flex: 0.2, marginTop: -10, backgroundColor: "white", padding: 30, borderRadius: 30 }}>
                                <Text>longitude : {this.state.location.longitude}</Text>
                                <Text>latitude : {this.state.location.latitude}</Text>
                                <Text>Altitude : {this.state.location.altitude}</Text>
                                <Text>Velocity : {this.state.location.velocity}</Text>
                            </View>
                        </ImageBackground>
                    </SafeAreaView>

                </View>
            )
        }
    }

}