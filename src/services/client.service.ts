
import { PrismaClient } from "@prisma/client";
import { type CreateClientDto } from "../dtos/clients/create-client.dto";

const prisma = new PrismaClient()

const findAll = () => {};
const findOne = () => {};

const create = async ( createClientDto: CreateClientDto ) => {
    
    const clientExists = await prisma.clients.findFirst({ where: { email: createClientDto.email } })

    if( clientExists ){
        throw new Error('Client already exists')
    }

    const company_id = createClientDto.companyId;
    const client = await prisma.clients.create({ 
        data: {
            company_id,
            ...createClientDto
        }
    });

    return client

};

const remove = () => {};
const update = () => {};

export default {
    findAll,
    findOne,
    create,
    remove,
    update,   
}