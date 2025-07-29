"use server";

import { eq } from "drizzle-orm";
import { db } from "../db/drizzle";
import { User, users } from "../db/schema";
import { UserRequest } from "../interfaces/user";
import bcrypt from "bcryptjs";


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

export async function createUser(user: UserRequest){
    try {
        const hashed = await bcrypt.hash(user.password, 10);
        await db.insert(users).values({
            ...user,
            password: hashed,
            active: true,
            removed: false,
            createdAt: new Date(),
            updatedAt: new Date()
        });
        return {
            success: true
        };
    } catch (error) {
        console.error(error);
        throw error;
    }
}

export async function updateUser(id: string, user: Omit<User, "id" | "created_at" | "updated_at">){
    try {
       const updatedUser = await db.update(users).set(user).where(eq(users.id, id))
    } catch (error) {
        console.error(error);
        throw error;
        // return {
        //     error: "Failed to update user"
        // };
    }
}

export async function deleteUser(id: string) {
    try {
        const deleteUser = await db.update(users)
        .set({
            removed: true
        }).where(eq(users.id, id));

        return deleteUser;
    } catch (error) {
        console.error(error);
        throw error;
        // return {
        //     error: "Failed to delete user"
        // }
    }
}