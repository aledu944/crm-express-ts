export interface CreateClientDto {
    name:       string;
    lastname:   string;
    email:      string;
    companyId:  string;
}

const create = ( object: { [key: string]: any } ): [string?, CreateClientDto?] => {

    const { name, lastname, email, companyId } = object;

    if( !name ) return [ 'Name is required', undefined ]
    if( !lastname ) return [ 'Lastname is required', undefined ]
    if( !email ) return [ 'Email is required', undefined ]
    if( !companyId ) return [ 'Company is required', undefined ]


    return [
        undefined,
        object as CreateClientDto
    ]
}

export default {
    create
}