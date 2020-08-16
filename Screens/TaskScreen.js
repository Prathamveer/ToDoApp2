import React, { Component } from 'react';
import { StyleSheet, Text, View ,TouchableOpacity,Image,TextInput,KeyboardAvoidingView} from 'react-native';
import AppHeader from '../Components/AppHeader';
export default class TaskScreen extends Component{
    addContent=()=>{
        
    }

    render(){
        return(
            <KeyboardAvoidingView>
            <View style={styles.container}>
           <AppHeader></AppHeader>
           <View style={{flexDirection:'row'}}>
           <TextInput style={styles.textinput} onChangeText={text => {
            this.setState({ text: text });
          }}
          value={this.state.text}
    
    value={this.state.text}></TextInput>
            <TouchableOpacity style={styles.design}>
                <Text style={styles.designText}>Add To-Do Reminder</Text>
            </TouchableOpacity>
            </View>
            </View>
            </KeyboardAvoidingView>
        )
    }
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#ff9d5c',
        alignItems: 'center',
        justifyContent: 'center',
        width:500
      },
    button:{
        width:300,
        height:50,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:25,
        backgroundColor:"#ff9d5c",
        shadowColor: "#000",
        shadowOffset: {
           width: 0,
           height: 8,
        }
    },
    design:{
        width:100,
        height:50,
        marginTop:200,
        backgroundColor:'#fed8b1',
        alignItems:'center',
        
    },
    designText:{
        fontSize:20,
        color: '#ff9d5c',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    textinput:{
        width:200,
        height:50,
        borderWidth:3,
        borderColor:'black',
        marginTop:200,
    }
})

