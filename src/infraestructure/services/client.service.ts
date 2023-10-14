import { PrismaClient } from "@prisma/client";
import { validate as isUUID } from "uuid";

import { internalServerError, notFound } from "../utils";
import type { CreateClientDto, UpdateClientDto } from "../dtos/clients";


const prisma = new PrismaClient()

const findAll = async () => {
    const clients = await prisma.clients.findMany({
        include: { companies: true }
    });

    return clients;
};


const findOne = async (term: string) => {
  
    let client;

    if( isUUID( term ) ){
        client = await prisma.clients.findFirst({
            where: { id: term },
            include: { companies: true }
        })

    }else {
        client = await prisma.clients.findFirst({
            where: { email: term },    
            include: { companies: true }
        })
    }

    try {
        if( !client ){
            throw notFound('Client not found')
        }

        return client;
        
    } catch (error) {
        throw error
    }
};

const create = async ( createClientDto: CreateClientDto ) => {
    const { companyId, email, lastname, name } = createClientDto;

    const clientExists = await prisma.clients.findFirst({ where: { email }});
    const companyExists = await prisma.companies.findFirst({ where: { id: companyId }});
    
    try {
        if( clientExists ){
            throw 'Client already exists'
        }

        if( !companyExists ){
            throw 'Company not found'
        }

        const client = await prisma.clients.create({ 
            data: {
                company_id: companyId,
                email,
                lastname,
                name
            }
        });

        return client;

    } catch (error) {
        throw error
    }


};

const remove = async (id: string) => {
    try {
        const client = await findOne(id);
        
        await prisma.clients.delete({ where:{ id: client.id } });

        return {
            message: 'Client deleted'
        }
        
    } catch (error) {
        throw internalServerError();
    }

};

const update = async (id: string, updateClientDto: UpdateClientDto) => {
    try {
        await findOne(id);

        const clientUpdate = await prisma.clients.update({
            data: {
                ...updateClientDto,
            },
            where: {
                id
            },
        });
        
        return clientUpdate;

        
    } catch (error) {
        throw internalServerError();
    }
};

export default {
    findAll,
    findOne,
    create,
    remove,
    update,   
}