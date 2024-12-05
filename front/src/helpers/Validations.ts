import { IErrorProps, ILogingProps } from "@/interfaces/ProductosInterfaces";

export function validateLogingForm(value: ILogingProps){
    const errors: IErrorProps ={}
   
    if(!value?.email){ errors.email = "username Required"

    }

    if (!value?.password){
         errors.password = "password Required"
    }
    return errors;
}

