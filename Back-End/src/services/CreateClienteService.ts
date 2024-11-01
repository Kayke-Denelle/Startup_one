import prismaClient from "../prisma";

interface CreateClienteProps{
    user:string;
    email:string;
    senha:string;
}

class CreateClienteService{
    async execute({user, email, senha}: CreateClienteProps){
        
        if(!user || !email || !senha){
            throw new Error("Preencha todos os campos")
        }

        const cliente = await prismaClient.cliente.create({
            data:{
                user,
                email,
                senha,
                status: true
            }
        })

        return { cliente}
    }
}

export { CreateClienteService }