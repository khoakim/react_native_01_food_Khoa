// If a module defines a default export:

// // foo.js
// export default function() { console.log("hello!") }
// then you can import that default export by omitting the curly braces:

// import foo from "foo";
// foo(); // hello!

// First we need to import axios.js
import axios from 'axios';
// Next we make an 'instance' of it
const instance = axios.create({
// .. where we make our configurations
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer zl98Qe4bxBGPZMcyXnYiFwmyRU_GiVlYzNKTgUMWwQuS1ZoOQTdpPjdB88jlkuTmyPZ3BHQ9grJKtKOwBS-34JXSf4rHtxSTRSfcIOvQBjFvcnr8EXXw5VFZ68xFYXYx'
    }
});

// Where you would set stuff like your 'Authorization' header, etc ...
// instance.defaults.headers.common['Authorization'] = 'AUTH TOKEN FROM INSTANCE';

// Also add/ configure interceptors && all the other cool stuff
// instance.interceptors.request...

export default instance;

// Usage
// import yelp from '.....'
// yelp.get('/posts' )
// .then(response => {
//        this.setState({data: response});
//     });
// })
// .catch(error => {
//     this.setState({error: true});
// });