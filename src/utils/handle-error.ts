import { Response } from "express";


export const notFound = (message: string) => {
    return {
        statusCode: 404,
        message,
    }
}

export const badRequest = (message: string) => {
    return {
        statusCode: 400,
        message,
    }
}

export const internalServerError = (message: string = 'Internal Server Error') => {
    return {
        statusCode: 500,
        message
    }
}