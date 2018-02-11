import React, { Component } from 'react';
import {
    View,
    Text,
    TextInput,
    Button
} from 'react-native';
import LoginPage from '../page/LoginPage';

class LoginForm extends Component{
    constructor(props){
        super(props);
        this.state = {
            email:'',
            password:''
        };
        this.onSubmit = this.onSubmit.bind(this);
    }
    

    onSubmit() {
        // alert('onSubmit');
        // console.log(e.target);
        console.log('onSubmit',this.state);
    }
    render(){
        return(
            <View style = {{padding:10}}>
                <Text>Login</Text>
                <TextInput
                    style={{borderColor:'rgb(43, 156, 255)',borderWidth: 1}}
                    placeholder="Email"
                    onChangeText={(email) => this.setState({email})}
                    value={this.state.email}
                />
            
                <TextInput
                    style={{borderColor:'rgb(252, 88, 88)',borderWidth: 1,marginTop:10,marginBottom:10}}
                    placeholder="Password"
                    secureTextEntry
                    onChangeText={(password) => this.setState({password})}
                    value={this.state.password}
            
                />
                <Button 
                    
                    title="Login"
                    color ="rgba(88, 239, 50,0.5)"
                    onPress = {this.onSubmit}
                
                />
            </View>

        );
    }
}

export default LoginForm;