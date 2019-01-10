import axios from 'axios'

export const allChannels= ()=> ({
    type: 'ALL_CHANNELS',
    payload: axios.get('http://192.168.43.69:3333/channels')
})