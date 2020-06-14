import axios from 'axios';

export default axios.create({
    method: 'GET',
    baseURL: 'https://developers.zomato.com/api/v2.1',
    headers: {
        //Authorization: 'Bearer 7839be32f6fd1c33cce58460f35c67e7'
        'user-key': '03cb14743a1a6bafa19c072e78310aaa',
        'Accept': 'application/json'

    }
});
