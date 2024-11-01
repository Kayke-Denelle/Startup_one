import fastify, { FastifyReply, FastifyRequest } from "fastify";
import { DeleteClienteservice } from "../services/deleteClienteService";

class DeleteClienteController{
    async handle(request: FastifyRequest, reply: FastifyReply){
        const { id } = request.query as {id : string}
        const clienteService = new DeleteClienteservice;

        const cliente = await clienteService.execute({ id })

        reply.send(cliente)
    }
}

export { DeleteClienteController }