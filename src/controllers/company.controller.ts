import { Request, Response } from "express";

import companyService from "../services/company.service";
import CreateCompanyDto from "../dtos/company/create-company.dto";

const createNewCompany = async ( req: Request, res: Response ) => {
    const [error, createCompanyDto ] = CreateCompanyDto.create( req.body );

    if ( error ) res.status( 400 ).json({ message: error });

    // return res.json( companyService.create( createCompanyDto! ) );
    companyService.create( createCompanyDto! )
        .then( company => res.json( company ) )
        .catch( error => res.status( 500 ).json({ message: error }))
}

export default {
    createNewCompany,
}