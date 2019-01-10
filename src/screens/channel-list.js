import React, {Component} from 'react'
import {Container, Content, List, ListItem, Text, Left, Body, Right, Thumbnail, Spinner} from 'native-base'
import {connect} from 'react-redux'

import {allChannels} from '../_redux/actions/channel'

export class ChannelList extends Component{

    static navigationOptions = {
        title: 'Chats',
    }

    componentDidMount(){
        this.props.allChannels()
    }

    render(){
        return (
            <Container>
                <Content>
                    {this.props.channel.isLoading? (
                        <Spinner/>
                    )
                    : (
                        <List>
                            {this.props.channel.results.map(c=>(
                                <ListItem 
                                    avatar 
                                    key={c.id} 
                                    onPress={()=> this.props.navigation.navigate('ChatList', {channelId: c.id})}
                                >
                                    <Left>
                                        <Thumbnail source={{ uri: 'https://placeimg.com/140/140/any' }} />
                                    </Left>
                                    <Body>
                                        <Text>{c.name}</Text>
                                    </Body>
                                </ListItem>    
                            ))}                                            
                        </List>   
                    )}                    
                </Content>
            </Container>
        )
    }
}

const mapStateToProps = ({channel})=> ({
    channel
})

const mapDispatchToProps = {
    allChannels
}

export default connect(mapStateToProps, mapDispatchToProps)(ChannelList)