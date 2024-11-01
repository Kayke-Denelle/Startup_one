import prismaClient from "../prisma";

class ListaClienteService{
    async execute(){
        const clientes = await prismaClient.cliente.findMany()

        return clientes
    }
}

export { ListaClienteService }