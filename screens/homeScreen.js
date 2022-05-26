import * as React from 'react';
import { View, Text, SafeAreaView, ImageBackground, TouchableOpacity, StyleSheet, Image } from 'react-native';
export default class HomeScreen extends React.Component {
    render() {
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <ImageBackground source={require("../assets/bg_image.png")} style={{ resizeMode: "cover", flex: 1 }}>
                    <View>
                        <Text style={{ textAlign: 'center', color: "white", fontWeight: 'bold', fontSize: 30 }}>
                            ISS TRACKER APP
                        </Text>
                    </View>
                    <TouchableOpacity style={styles.buttons} onPress={() => this.props.navigation.navigate('ISSLocation')}>
                        <Image source={require("../assets/iss_icon.png")} style={styles.icon} />


                        <Text style={styles.text}>
                            ISS LOCATION
                        </Text>
                        <Text style={styles.info}>
                            {"know more--->"}
                        </Text>
                        <Text style={styles.number}>
                            1
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttons} onPress={() => this.props.navigation.navigate('Meteor')} >
                        <Image source={require("../assets/meteor_icon.png")} style={styles.icon} />


                        <Text style={styles.text}>
                            METEOR
                        </Text>
                        <Text style={styles.info}>
                            {"know more--->"}
                        </Text>
                        <Text style={styles.number}>
                            2
                        </Text>
                    </TouchableOpacity>
                </ImageBackground>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    buttons: {
        flex: 0.25, backgroundColor: "white", marginTop: 50, marginLeft: 50, marginRight: 50, borderRadius: 20, borderWidth: 2, justifyContent: "center", paddingLeft: 40


    },
    text: {
        fontWeight: "bold",
        fontSize: 20,
    },
    info: {
        color: "red", fontSize: 15,
    },
    number: {
        fontSize: 150, right: 20, position: "absolute", color: "rgba(183, 183, 183, 0.5)"
    },
    icon: {
        height: 150, width: 150, top: -70, position: "absolute", right: 20

    }
})