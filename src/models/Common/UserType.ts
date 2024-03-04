export type BioTypes = {
    firstname?: string,
    lastname?: string,
    gender?: string,
    phone?: string,
    nin?: string,
    bvn?: string,
    address?: string,
    errors?: any,
    handleFileUpload?:any
}


export type UpdateFields = BioTypes & {
    updateFields: (fields: Partial<BioTypes>) => void
}