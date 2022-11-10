import { Button, StyleSheet, Text, TextInput, Switch, View, SafeAreaView} from 'react-native'
import React from 'react'

function SignInScreen() {
  return (
    <View>
        <SafeAreaView>
            <TextInput 
                style={styles.input} 
                defaultValue='Username'>
            </TextInput>
            <TextInput 
                style={styles.input} 
                defaultValue='Password' 
                textContentType='password'>
            </TextInput>
            <SafeAreaView style={{ flex:1 }}>
                <Button 
                    title='Sign-In'
                    color="#00aeef"
                    class='sm-4'
                />
            </SafeAreaView>
            <SafeAreaView style={{ flex: 2 }}>
                <Switch />
            </SafeAreaView>

            <Text>SignInScreen</Text>
         </SafeAreaView>
    </View>
  )
}

const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
      },
    });


export default SignInScreen;