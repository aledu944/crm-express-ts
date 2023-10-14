import { PrismaClient } from "@prisma/client";
import { CreateCompanyDto } from "../dtos/company/create-company.dto";

import { badRequest, internalServerError, notFound } from "../utils";
import { validate as isUUID } from "uuid";
import { UpdateCompanyDto } from '../dtos/company/update-company.dto';

const prisma = new PrismaClient();

const findAll = async () => {
    const companies = await prisma.companies.findMany();
    return companies;
}

const findOne = async ( term: string ) => {
    let company;

    if( isUUID( term ) ){
        company = await prisma.companies.findFirst({ where: { id: term } })

    }else {
        company = await prisma.companies.findFirst({ where: { email: term } })
    }

    try {
        if( !company ){
            throw notFound('Client not found')
        }

        return company;
        
    } catch (error) {
        throw error
    }
}

const create = async ( createCompanyDto: CreateCompanyDto ) => {
    const { direction, email, name, numberPhone } = createCompanyDto;

    const companyExist = await findOne( email );
    
    try {
        
        if( companyExist ){
            throw badRequest('Company already exists')
        }

        const company = await prisma.companies.create({
            data: {
                number_phone: numberPhone,
                direction,
                email,
                name
            }
        });
    
        return company
    } catch (error) {
        throw error
    }
};


const update = async (id: string, updateCompanyDto: UpdateCompanyDto) => {
    try {
        const companyExist = await findOne(id);
        const clientUpdate = await prisma.companies.update({
            data: {
                ...updateCompanyDto,
            },
            where: {
                id
            },
        });
        
        return clientUpdate;

    } catch (error) {
        throw internalServerError();
    }
}

const remove = async (id: string) => {
    try {
        const company = await findOne(id);
        
        await prisma.companies.delete({ where:{ id: company.id } });

        return {
            message: 'Company deleted'
        }
        
    } catch (error) {
        throw internalServerError();
    }
}


export default {
    findAll,
    findOne,
    create,
    update,
    remove
}