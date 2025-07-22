"use server";

import { eq } from "drizzle-orm";
import { db } from "../db/drizzle";
import { User, users } from "../db/schema";

export async function getUsers() {
    try {
         const allUsers = await db.select().from(users);
    return allUsers;
    } catch (error) {
        console.error(error);
        throw error;
        // return {
        //     error: "Failed to get users"
        // };
    }
}

export async function createUser(user: User){
    try {
        const newUser = await db.insert(users).values(user);
        return newUser;
    } catch (error) {
        console.error(error);
        throw error;
        // return {
        //     error: "Failed to create user"
        //      };
    }
}

export async function updateUser(id: number, user: Omit<User, "id" | "created_at" | "updated_at">){
    try {
        const updateUser = await db.update(users).set(user).where(eq(users.id, id));
        return updateUser;
    } catch (error) {
        console.error(error);
        throw error;
        // return {
        //     error: "Failed to update user"
        // };
    }
}

export async function deleteUser(id: number) {
    try {
        const deleteUser = await db.delete(users).where(eq(users.id, id));
        return deleteUser;
    } catch (error) {
        console.error(error);
        throw error;
        // return {
        //     error: "Failed to delete user"
        // }
    }
}