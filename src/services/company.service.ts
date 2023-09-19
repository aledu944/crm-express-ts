import { PrismaClient } from "@prisma/client";
import { CreateCompanyDto } from "../dtos/company/create-company.dto";

const prisma = new PrismaClient();

const create = async ( createCompanyDto: CreateCompanyDto ) => {
    const { direction, email, name, numberPhone } = createCompanyDto;

    try {
        const companyExist = await prisma.companies.findFirst({ where: { email } })
    
        if( companyExist ){
            throw 'Client already exists'
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

export default {
    create,
}