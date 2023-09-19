export interface UpdateClientDto {
    name?:       string;
    lastname?:   string;
    email?:      string;
    companyId?:  string;
}

const create = ( object: { [key: string]: any } ): [string?, UpdateClientDto?] => {
    return [
        undefined,
        object as UpdateClientDto
    ]
}

export default {
    create
}