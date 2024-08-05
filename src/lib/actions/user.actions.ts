'use server';

import { ID } from "node-appwrite";
import { createAdminClient, createSessionClient } from "../appwrite";
import { SignInParams, SignUpParams } from "../types";
import { cookies } from "next/headers";
import { parseStringify } from "../utils";

export const signIn = async ({ email, password }: SignInParams) => {
    try {
        const { account } = await createAdminClient();
        const session = await account.createEmailPasswordSession(email, password);
        return parseStringify(session);
    } catch (error) {
        console.error(error);
    }
}

export const signUp = async (userData: SignUpParams) => {
    try {
        const { name, email, password } = userData;
        const { account } = await createAdminClient();
        const newAccount = await account.create(ID.unique(), email, password, name);
        const session = await account.createEmailPasswordSession(email, password);

        cookies().set('appwrite-session', session.secret, {
            path: '/',
            httpOnly: true,
            sameSite: 'strict',
            secure: true
        });

        return parseStringify(newAccount);
    } catch (error) {
        console.error(error);
    }
}

export const getLoggedInUser = async () => {
    try {
        const { account } = await createSessionClient();
        const user = await account.get();
        return parseStringify(user);
    } catch (error) {
        return null;
    }
}

export const logoutAccount = async () => {
    try {
        const { account } = await createSessionClient();
        cookies().delete("appwrite-session");
        await account.deleteSession("current");
    } catch (error) {
        return null;
    }
}