import express from 'express';
//graphql
import graphqlHTTP from 'express-graphql';
import schema from './schema';


const app = express();

app.get('/', (req,res) => {
   res.send('Todo Listo') 
})

class Client {
   constructor(id, { name, surname, company, email }){
      this.id = id;
      this.name = name;
      this.surname = surname;
      this.company = company;
      this.email = email;
   }
}

const clientsDB = {};

// el resolver = respuesta
const root = {
   client: () => {
      return {
         "id": 112129318297,
         "name": "Nico",
         "surname": "Corbalan",
         "company": "Shalala",
         "emails": "nicolas@example.com"
         }
      },
      createClient : ({input}) => {
         const id = require('crypto').randomBytes(10).toString('hex');
         clientsDB[id] = input;
         return new Client(id, input)
      }
};

app.use('/graphql', graphqlHTTP({
   // que schema va a utilizar
   schema,
   //el resolver se pasa como rootValue
   rootValue: root,
   // utilizar graphQL
   graphiql: true,
}));

app.listen(8000, () => console.log('El servidor esta funcionando')  
)