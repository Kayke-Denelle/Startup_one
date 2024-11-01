import { FastifyRequest, FastifyReply } from "fastify";
import { CreateClienteService } from "../services/CreateClienteService";
import { Console } from "console";

class CreateClienteController{
    async handle(request: FastifyRequest, reply: FastifyReply){
        const {user, email, senha} = request.body as {user:string, email:string, senha: string}
       
        
        const clienteService = new CreateClienteService()
        const cliente = await clienteService.execute({user, email, senha})

        reply.send(cliente)
    }
}

export { CreateClienteController }