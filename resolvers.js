
class Client {
    constructor(id, { name, surname, company, email, age, type }){
       this.id = id;
       this.name = name;
       this.surname = surname;
       this.company = company;
       this.email = email;
       this.age = age; 
       this.type = type;
    }
 }
 
 const clientsDB = {};
 
 // el resolver = respuesta
 const resolvers = {
        getClient : ({id}) => {
            return new Client(id, clientsDB[id]);
        },
       createClient : ({input}) => {
          const id = require('crypto').randomBytes(10).toString('hex');
          clientsDB[id] = input;
          return new Client(id, input)
       }
 };

 export default resolvers;

