"use server";

import { Account, ID } from "node-appwrite";
import { createAdminClient, createSessionClient } from "../server/appwrite";
import { cookies } from "next/headers";
import { parseStringify } from "../utils";

export const signIn = async({email,password}:signInProps)=>{
    try {
        const {account} = await createAdminClient()
        const response = await account.createEmailPasswordSession(email,password)
        return parseStringify(response)
    } catch (error) {
        console.log("🚀 ~ signIn ~ error:", error)
        
    }
}

export const signup = async(userData:SignUpParams)=>{

    const {firstName,lastName,email,password} = userData
    try {
        //  mutation / database / data fetch 
        //create a user account

        const { account } = await createAdminClient();

        const newUserAcc = await account.create(ID.unique(), email,password, `${firstName} ${lastName}`);
        const session = await account.createEmailPasswordSession(email, password);
      
        cookies().set("appwrite-session", session.secret, {
          path: "/",
          httpOnly: true,
          sameSite: "strict",
          secure: true,
        });

        return parseStringify(newUserAcc)
    } catch (error) {
        console.log("🚀 ~ signIn ~ error:", error)
        
    }
}

// ... your initilization functions

export async function getLoggedInUser() {
    try {
      const { account } = await createSessionClient();
      const user =  await account.get();
      return parseStringify(user)
    } catch (error) {
      return null;
    } 
  }
  

  export const loggedOut = async ()=>{
try {
    const {account} = await createSessionClient();

    cookies().delete("appwrite-session")
    await account.deleteSession("current")
} catch (error) {
    return null;
}
  }