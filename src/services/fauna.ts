import {Client} from 'faunadb';

export const fauna = new Client({
  secret: process.env.FAUNADB_KEY
})

// Aqui já tem acesso ao Banco de Dados