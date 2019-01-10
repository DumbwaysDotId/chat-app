import React, {Component} from 'react'
import {Container, Content, List, ListItem, Text, Left, Body, Right, Thumbnail} from 'native-base'
import {connect} from 'react-redux'

import {allContacts} from '../_redux/actions/contact'

export class ContactList extends Component{

    static navigationOptions = {
        title: 'Contact',
    }

    componentDidMount(){
        this.props.allContacts()
    }

    render(){
        return (
            <Container>
                <Content>
                    <List>
                        {this.props.contact.results.map(c=>(
                            <ListItem avatar key={c.id}>
                                <Left>
                                    <Thumbnail source={{ uri: c.imageProfile }} />
                                </Left>
                                <Body>
                                    <Text>{c.name}</Text>
                                </Body>
                            </ListItem>    
                        ))}                                            
                    </List>
                </Content>
            </Container>
        )
    }
}

const mapStateToProps = ({contact})=> ({
    contact
})

const mapDispatchToProps = {
    allContacts
}

export default connect(mapStateToProps, mapDispatchToProps)(ContactList)