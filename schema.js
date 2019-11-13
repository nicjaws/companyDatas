import { buildSchema } from 'graphql';

const schema = buildSchema(`
    type Client {
        id: ID
        name: String
        lastname: String
        company: String 
        emails: [Email]
        age: Int
        type: TypeClient
        orders: [Order]
    }
    type Email {
       email: String 
    }
    type Order {
        product: String
        price: Int
    }
    enum TypeClient {
       BASIC
       PREMIUM 
    }
    type Query {
        getClient(id :ID) : Client
    }

    input OrderInput {
        product: String
        price: Int
    }
    input ClientInput {
        id: ID
        name: String!
        lastname: String!
        company: String! 
        email: String!
        age: Int!
        type: TypeClient!
        orders: [OrderInput]
    }
    type Mutation {
        createClient(input: ClientInput) : Client
    }
`);

export default schema;