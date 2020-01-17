import mongoose from 'mongoose';
import {Clients} from './db'
 
 
 export const resolvers = {
    Query: {
      getClient : ({id}) => {
         return new Client(id, clientsDB[id]);
     }
    },
    Mutation: {
      createClient : (root, {input}) => {
         const newClient = new Clients({
            name : input.name,
            lastname : input.lastname,
            company : input.company,
            emails : input.emails,
            age : input.age, 
            type : input.type,
            orders : input.orders
         })
         newClient.id = newClient._id;

         return new Promise((resolve, object) => {
            newClient.save((err) => {
               if(err) rejects(err)
               else resolve(newClient)
            })
         })     
      }
    }
 }



