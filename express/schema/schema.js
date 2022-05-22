
const graphql = require('graphql');

const { GraphQLObjectType, GraphQLString,
    GraphQLID, GraphQLInt, GraphQLSchema } = graphql;

//Schema defines data on the Graph like object types(book type), relation between 
//these object types and descibes how it can reach into the graph to interact with 
//the data to retrieve or mutate the data   

var users = [
    { name: "Patrick", id: 1 },
    { name: "John", id: 2 },
    { name: "Bob", id: 3 }
]

var posts = [
    {
        id: 1,
        owner: 1,
        text: 'Hello there. First post here.',
        imageId: '12321fe',
    }, {
        id: 2,
        owner: 1,
        text: 'Hello there. Second post here.',
        imageId: 'fwef',
    }, {
        id: 3,
        owner: 1,
        text: 'Hello there. First post here.',
        imageId: '3252',
    },
]


// MY USERS ==============================
// MY USERS ==============================
// MY USERS ==============================
const UserType = new GraphQLObjectType({
    name: 'User',
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
    })
})

const PostType = new GraphQLObjectType({
    name: 'Post',
    fields: () => ({
        id: { type: GraphQLID },
        owner: { type: GraphQLID },
        text: { type: GraphQLString },
        imageId: { type: GraphQLString }
    })
})

//RootQuery describe how users can use the graph and grab data.
//E.g Root query to get all authors, get all books, get a particular book 
//or get a particular author.
const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        user: {
            type: UserType,
            //argument passed by the user while making the query
            args: { id: { type: GraphQLID } },
            resolve(parent, args) {
                return users.find((user) => user.id == args.id);
            }
        },
        post: {
            type: PostType,
            args: { id: { type: GraphQLID } },
            resolve(parent, args) {
                return posts.find(post => post.id == args.id)
            }
        }
    }
});

//Creating a new GraphQL Schema, with options query which defines query 
//we will allow users to use when they are making request.
module.exports = new GraphQLSchema({
    query: RootQuery
});