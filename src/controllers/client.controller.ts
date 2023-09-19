import { Request, Response } from "express";

import CreateClientDto from "../dtos/clients/create-client.dto";
import clientService from "../services/client.service";

const getAllClient = async ( req: Request, res: Response ) => {

    res.json({
        clients: 'listado de clientes'
    })
}

const getClientByTerm = async ( req: Request, res: Response ) => {}

const createNewClient = async ( req: Request, res: Response ) => {
    const [error, createClientDto ] = CreateClientDto.create( req.body );
    if ( error ) res.status( 400 ).json({ message: error });

    return clientService.create( createClientDto! );
}

const updateClient = async ( req: Request, res: Response ) => {}

const deleteClient = async ( req: Request, res: Response ) => {}

export default {
    getAllClient,
    createNewClient
};