// Define the type for the parameters
export interface ISubmitDataType {
    data: any;
    url: string;
    successMessage?: string;
    errorMessage?: string;
    navigation?: (path: string) => void;
    navigationPath?: string;
}