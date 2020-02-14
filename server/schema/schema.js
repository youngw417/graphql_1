const graphql = require('graphql');
// const _ = require('lodash');
const axios = require('axios');

const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLSchema

} = graphql;



const PetType = new GraphQLObjectType({
    name: 'Pet',
    fields: {
        id: { type: GraphQLString },
        name: {type: GraphQLString},
        type: {type: GraphQLString},
        img: {type: GraphQLString}
    }
});

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        pet: {
            type: PetType,
            args: { id: { type: GraphQLString}},
            resolve(parentValue, args){
                return axios.get(`http://localhost:5000/pets/${args.id}`)
                .then(res => res.data);
            }

        }
    }
});

module.exports = new GraphQLSchema({
    query: RootQuery
})

