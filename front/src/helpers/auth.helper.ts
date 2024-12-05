import { ILogingProps, IregisterProps } from "@/interfaces/ProductosInterfaces";

const APIURL=process.env.NEXT_PUBLIC_API_URL

export async function register(userData:IregisterProps) {
    try {
        const res = await fetch(`${APIURL}/users/register`,{
            method: "POST",
            headers:{
                "Content-type": "application/json"
            },
            body: JSON.stringify(userData)
        })
        if(res.ok){
            return res.json()
        }else {
            throw Error ("failed to register")
        }
    } catch (error:any) {
        throw new Error (error)
    }
}

export async function login(userData:ILogingProps) {
    try {
        const res = await fetch(`${APIURL}/users/login`,{
            method: "POST",
            headers:{
                "Content-type": "application/json"
            },
            body: JSON.stringify(userData)
        })
        if(res.ok){
            return res.json()
        }else {
            throw Error ("failed to register")
        }
    } catch (error:any) {
        throw new Error (error)
    }
}