import { Request, Response } from "express";

import companyService from "../../infraestructure/services/company.service";
import CreateCompanyDto from "../../infraestructure/dtos/company/create-company.dto";
import UpdateCompanyDto from "../../infraestructure/dtos/company/update-company.dto";


const getAllCompanies = async (req: Request, res: Response) => {
    companyService.findAll()
        .then( companies => res.json( companies ) );
};

const getCompanyByTerm = async (req: Request, res: Response) => {
    const { term } = req.params;
    companyService.findOne( term )
        .then( company =>  res.json( company ))
        .catch( error => console.log(error))
};

const createNewCompany = async ( req: Request, res: Response ) => {
    const [error, createCompanyDto ] = CreateCompanyDto.create( req.body );

    if ( error ) res.status( 400 ).json({ message: error });

    companyService.create( createCompanyDto! )
        .then( company => res.json( company ) )
        .catch( error => res.status( error.statusCode ).json({ message: error.message }))
}

const updateCompany = async ( req: Request, res: Response ) => {
    const { id } = req.params;
    const [error, updateClientDto ] = UpdateCompanyDto.create( req.body );

    if ( error ) res.status( 400 ).json({ message: error });

    companyService.update( id, updateClientDto! )
        .then( company => res.json( company ) )
        .catch( error => res.status( error.statusCode ).json({ message: error.message }))
}

const deleteCompany = async ( req: Request, res: Response ) => {
    companyService.remove( req.params.id )
        .then( company => res.json( company ) )
        .catch( error => res.status( error.statusCode ).json({ message: error.message }))
}

export default {
    getAllCompanies,
    getCompanyByTerm,
    createNewCompany,
    updateCompany,
    deleteCompany
}