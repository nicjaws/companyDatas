import express from 'express';
//graphql
import graphqlHTTP from 'express-graphql';
import schema from './schema';


const app = express();

app.get('/', (req,res) => {
   res.send('Todo Listo') 
})

// el resolver = respuesta
const root = {client: () => {
   return {
      "id": 112129318297,
      "name": "Nico",
      "surname": "Corbalan",
      "company": "Shalala",
      "email": "nicolas@example.com"
   }
}};

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