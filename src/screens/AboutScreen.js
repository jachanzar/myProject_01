import React from "react";
import {View, Text, StyleSheet, SafeAreaView} from 'react-native';
import NavBarComponent from "../components/NavBarComponent";

function AboutScreen() {
    return (
        <View style={styles.mainScreen}>
            <SafeAreaView>
                <View style={styles.xScreen}>
                    <Text style={{ color: 'red'}}>About Screen</Text>
                 </View>
                <NavBarComponent />
            </SafeAreaView>
        </View>
    )
};

const styles = StyleSheet.create({
    mainScreen: {
        flex: 1,
    },
    xScreen: {
        flexDirection: 'row',
        justifyContent: 'center',
    }
});

export default AboutScreen;