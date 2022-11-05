import React from "react";
import {View, Image,ImageBackground, Text, FlatList, StyleSheet, StatusBar, SafeAreaView} from 'react-native';
import { DATA } from "../shared/DATA.js";

const Item = ({ title }) => (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );

  const image = {uri:'https://t4.ftcdn.net/jpg/00/55/78/45/360_F_55784593_yHXkJngljzVKwyqnjIkXfeQc8GBbzUrn.jpg'};

function HomeScreen() {
    const renderItem = ({ item }) => (
        <Item title={item.title} />
      );
    return (
        <View style={{flex: 1}}>
            <SafeAreaView style={styles.container}>
                <ImageBackground source={image} style={styles.image}>
                <Image  
                    style={styles.mainImg} 
                    source={{uri:'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/KLOVE_2014.svg/408px-KLOVE_2014.svg.png?20160210144949'}}
                />
                <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
        </ImageBackground>
            </SafeAreaView>
        </View>
    )
};
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: StatusBar.currentHeight || 0,
    },
    item: {
      backgroundColor: 'white',
      borderColor: 'white',
      borderStyle: 'solid',
      borderWidth: '2px',
      borderRadius: '15px',
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
    },
    title: {
      fontSize: 32,
      color: '#00aeef',
    },
    image: {
        flex: 1,
        justifyContent: "center"
      },
  });


export default HomeScreen;