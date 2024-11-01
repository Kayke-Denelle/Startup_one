import { FastifyInstance, FastifyPluginOptions, FastifyRequest, FastifyReply } from "fastify";
import { request } from "http";
import { CreateClienteController } from "./controllers/CreateClienteController";
import { ListaClienteControllers } from "./controllers/ListaClienteControllers";
import { DeleteClienteController } from "./controllers/DeleteClienteControllers";

export async function routes(fastify: FastifyInstance, options: FastifyPluginOptions){
        fastify.get("/teste", async (request: FastifyRequest, reply: FastifyReply) => {
            return { ok: true}
        })

        fastify.post("/cliente", async(request: FastifyRequest, reply: FastifyReply) => {
            return new CreateClienteController().handle(request, reply)
        })

        fastify.get("/cliente", async(request: FastifyRequest, reply: FastifyReply) => {
            return new ListaClienteControllers().handle(request, reply)
        })

        fastify.delete("/cliente", async(request: FastifyRequest, reply: FastifyReply) => {
            return new DeleteClienteController().handle(request, reply)
        })
}