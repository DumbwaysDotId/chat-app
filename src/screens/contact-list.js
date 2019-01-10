import React, {Component} from 'react'
import {Container, Content, List, ListItem, Text} from 'native-base'

export default class ContactList extends Component{

    render(){
        return (
            <Container>
                <Content>
                    <List>
                        <ListItem>
                            <Text>Contact 1</Text>
                        </ListItem>
                        <ListItem>
                            <Text>Contact 2</Text>
                        </ListItem>
                    </List>
                </Content>
            </Container>
        )
    }
}