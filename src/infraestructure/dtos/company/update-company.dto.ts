export interface UpdateCompanyDto {
    name?: string;
    email?: string;
    direction?: string;
    numberPhone?: string;
}

const create = ( object: { [key: string]: any } ): [string?, UpdateCompanyDto?] => {
    return [
        undefined,
        object as UpdateCompanyDto
    ]
}

export default {
    create
}