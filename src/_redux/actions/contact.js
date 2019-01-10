import axios from 'axios'

export const allContacts = ()=> ({
    type: 'ALL_CONTACTS',
    payload: axios.get('http://192.168.43.69:3333/contacts')
})