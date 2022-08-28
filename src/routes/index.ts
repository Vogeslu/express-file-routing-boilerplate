import { Request, Response } from 'express'

export default (_: Request, response: Response) => {
  response.send('Hello World!')
}
