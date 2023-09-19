export interface CreateCompanyDto {
    name: string;
    email: string;
    direction: string;
    numberPhone: string;
}

const create = ( object: { [key: string]: any } ): [string?, CreateCompanyDto?] => {

    const { name, email, direction, numberPhone } = object;

    if( !name ) return [ 'Name is required', undefined ]
    if( !email ) return [ 'Email is required', undefined ]
    if( !direction ) return [ 'Direction is required', undefined ]
    if( !numberPhone || numberPhone.length < 8  ) return [ 'Invalid number phone', undefined ]


    return [
        undefined,
        object as CreateCompanyDto
    ]
}

export default {
    create
}