import { FastifyRequest, FastifyReply } from "fastify";
import { ListaClienteService } from "../services/ListaClienteService";

class ListaClienteControllers{
    async handle(request: FastifyRequest, reply: FastifyReply){
        const listaClienteService = new ListaClienteService();

        const clientes = await listaClienteService.execute();

        reply.send(clientes)
    }
}

export { ListaClienteControllers }