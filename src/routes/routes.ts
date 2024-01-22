import { Router } from 'express';
import authorsController from "./authors/authors.controller"

const api = Router()
  .use(authorsController)

export default Router().use('/api', api);