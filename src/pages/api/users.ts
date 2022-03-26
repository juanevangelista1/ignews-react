// Arquivo para buscar a rota de usuários 
import {NextApiRequest, NextApiResponse} from 'next'

export default (request: NextApiRequest, response: NextApiResponse) => {
  const users = [
    {
      id: 1,
      name: 'Juan',
    },
    {
      id: 2,
      name: 'Yasmin',
    },
    {
      id: 3,
      name: 'Júnior',
    }
  ]

  return response.json(users)
}