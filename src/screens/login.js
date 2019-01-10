import React, {Component} from 'react'
import {View, Container, Content, Form, Label, Item, Input, Button, Text} from 'native-base'
import axios from 'axios'
 
export default class Login extends Component {

    static navigationOptions = {
        header: null,
    }

    state = {
        email: "",
        password: ""
    }

    handleLogin(){
        const {email, password} = this.state
        
        axios.post('http://192.168.43.69:3333/login', {
            email,
            password
        }).then((res)=>{
            alert(JSON.stringify(res))
        })
    }

    render(){
        return (
            <Container>
                <Content>
                    <Form>
                        <Item stackedLabel>
                            <Label>Email</Label>
                            <Input onChangeText={(email)=> this.setState({email})}/>
                        </Item>
                        <Item stackedLabel last>
                            <Label>Password</Label>
                            <Input onChangeText={(password)=> this.setState({password})}/>
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