import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

class AppHeader extends React.Component{
  render(){
    return(
      <View style= {styles.textContainer}>
        <Text style={styles.text}>Task Screen</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  textContainer:{
    backgroundColor: '#fed8b1',
    marginTop:-220,
    width:500,
    borderColor: "#20232a",
  },
  text:{
    color: '#ff9d5c',
    padding: 20,
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
 
  }
});

export default AppHeader;