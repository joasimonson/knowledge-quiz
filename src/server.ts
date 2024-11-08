import { createServer } from 'miragejs'
import { questions } from './data'

export function makeServer() {
  createServer({
    routes() {
      this.namespace = "api"

      this.get("/questions", () => questions)
    },
  })
}