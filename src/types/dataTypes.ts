export interface UserFormData {
    id: string;
    name: string;
    address: string;
    email: string;
    phone: string;
}

export interface DataState {
    richTextContent: string;
    counter: number;
    userFormData: UserFormData;
}