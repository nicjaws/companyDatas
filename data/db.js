import mongoose, { mongo } from 'mongoose';

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost/clients', {useNewUrlParser: true});

//Definir el schema de clientes
const clientsSchema = new mongoose.Schema({
  name: String,
  lastname: String,
  company: String,
  email: String,
  age: Number,
  type: String,
  orders: Array
})

const Clients = mongoose.model('clients', clientsSchema);

export { Clients }; 

       