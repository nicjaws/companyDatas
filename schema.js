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
    type Query {
        getClient(id :ID) : Client
    }
    type Order {
        product: String
        price: Int
    }
    enum TypeClient {
       BASIC
       PREMIUM 
    }
    input OrderInput {
        product: String
        price: Int
    }
    input EmailInput {
        email: String 
    }
    input ClientInput {
        id: ID
        name: String!
        lastname: String!
        company: String! 
        emails: [EmailInput]
        age: Int!
        type: TypeClient!
        orders: [OrderInput]
    }
    type Mutation {
        createClient(input: ClientInput) : Client
    }
`);

export default schema;