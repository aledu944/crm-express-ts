import { Request, Response } from "express";

import CreateClientDto from "../dtos/clients/create-client.dto";
import UpdateClientDto from "../dtos/clients/update-client.dto";

import clientService from "../services/client.service";

const getAllClients = async ( req: Request, res: Response ) => {
    clientService.findAll()
        .then( clients => res.json( clients ));
}

const getClientByTerm = async ( req: Request, res: Response ) => {
    const { term } = req.params;

    clientService.findOne( term )
        .then( client => res.json( client ) )
        .catch( error =>  res.status( error.statusCode).json({ message: error.message }))

}

const createNewClient = async ( req: Request, res: Response ) => {
    const [error, createClientDto ] = CreateClientDto.create( req.body );
    if ( error ) res.status( 400 ).json({ message: error });

    clientService.create( createClientDto! )
        .then( client => res.json( client ) )
        .catch( error => res.status( 500 ).json({ message: error }))
}

const updateClient = async ( req: Request, res: Response ) => {
    const { id } = req.params;
    const [error, updateClientDto ] = UpdateClientDto.create( req.body );

    if ( error ) res.status( 400 ).json({ message: error });

    clientService.update( id, updateClientDto! )
        .then( client => res.json( client ) )
        .catch( error => res.status( error.statusCode).json({ message: error.message }))
}

const deleteClient = async ( req: Request, res: Response ) => {
    clientService.remove( req.params.id )
        .then( client => res.json( client ) )
        .catch( error => res.status( error.statusCode).json({ message: error.message }))
}

export default {
    getAllClients,
    getClientByTerm,
    createNewClient,
    updateClient,
    deleteClient
};