import React from "react";
import {View, Text, SafeAreaView} from 'react-native';

function AboutScreen() {
    return (
        <View style={{flex: 1}}>
            <SafeAreaView>
                <Text style={{ color: red}}>About Screen</Text>
            </SafeAreaView>
        </View>
    )
};

export default AboutScreen;