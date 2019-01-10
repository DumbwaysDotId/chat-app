import React, {Component} from 'react'
import {View, Container, Content, Form, Label, Item, Input, Button, Text} from 'native-base'
import {AsyncStorage} from 'react-native'
import axios from 'axios'
 
export default class Login extends Component {

    static navigationOptions = {
        header: null,
    }

    state = {
        email: "radiegtya@dumbways.id",
        password: "rahasia"
    }

    async handleLogin(){
        const {email, password} = this.state
        
        const res = await axios.post('http://192.168.43.69:3333/login', {
            email,
            password
        })

        try {
            await AsyncStorage.setItem('token', res.data.token)
            await AsyncStorage.setItem('userId', res.data.user.id + '')            
        } catch (error) {
            alert(error)
        } 

        this.props.navigation.navigate('ChannelList')
        
    }

    render(){
        return (
            <Container>
                <Content>
                    <Form>
                        <Item stackedLabel>
                            <Label>Email</Label>
                            <Input onChangeText={(email)=> this.setState({email})} value={this.state.email}/>
                        </Item>
                        <Item stackedLabel last>
                            <Label>Password</Label>
                            <Input onChangeText={(password)=> this.setState({password})}  value={this.state.password}/>
                        </Item>
                        <Button success full onPress={()=> this.handleLogin()}>
                            <Text>Login</Text>
                        </Button>
                    </Form>
                </Content>
            </Container>
        )
    }
}