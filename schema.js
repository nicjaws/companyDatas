import { buildSchema } from 'graphql';

const schema = buildSchema(`
    type Client {
        id: ID
        name: String
        surname: String
        company: String 
        email: String
        age: Int
        type: TypeClient
    }

    enum TypeClient {
       BASIC
       PREMIUM 
    }

    type Query {
        getClient(id :ID) : Client
    }

    input ClientInput {
        id: ID
        name: String!
        surname: String!
        company: String! 
        email: String!
        age: Int!
        type: TypeClient!
    }
    type Mutation {
        createClient(input: ClientInput) : Client
    }
`);

export default schema;