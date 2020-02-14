import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
// import gql from 'graphql-tag';

const link = new HttpLink({uri: 'http://localhost:4000'});

const cache = new InMemoryCache();
const client = new ApolloClient({
    link,
    cache
})

// const query  = gql`
//     {
//         characters {
//             results{
//                 id
//                 name
                
//             }
//         }
//     }
// `

// client.query({query}).then(result => console.log(result.data))
export default client;