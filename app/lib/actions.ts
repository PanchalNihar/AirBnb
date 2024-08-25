'use server';
import { cookies } from "next/headers";
export async function handleLogin(userId:string,accessToken:string,refreshtoken:string){
    cookies().set('session_userId',userId,{
        httpOnly:true,
        secure:process.env.NODE_ENV==='production',
        maxAge:60*60*24*7, //one week
        path:'/'
    })

    cookies().set('session_accessToken',accessToken,{
        httpOnly:true,
        secure:process.env.NODE_ENV==='production',
        maxAge:60*60, //60 min 
        path:'/'
    })

    cookies().set('session_refreshToken',refreshtoken,{
        httpOnly:true,
        secure:process.env.NODE_ENV==='production',
        maxAge:60*60*24*7 ,//one week 
        path:'/'
    })
}