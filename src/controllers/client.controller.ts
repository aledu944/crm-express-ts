import { Request, Response } from "express";

const getAllClient = async ( req: Request, res: Response ) => {

    res.json({
        clients: 'listado de clientes'
    })
}

export default {
    getAllClient
};