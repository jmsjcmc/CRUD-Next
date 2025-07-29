"use server";

import { eq } from "drizzle-orm";
import { db } from "../db/drizzle";
import { User, users } from "../db/schema";
import { UserRequest } from "../interfaces/user";
import bcrypt from "bcryptjs";

// fetch all users
export async function getUsers() {
    try {
         const allUsers = await db.select().from(users).where(eq(users.active, true));
    return allUsers;
    } catch (error) {
        console.error(error);
        throw error;
    }
}
// create new user
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
// update specific user
export async function updateUser(id: string, user: Omit<User, "id" | "created_at" | "updated_at">){
    try {
        await db.update(users).set(user).where(eq(users.id, id))
    } catch (error) {
        console.error(error);
        throw error;
    }
}
// soft delete specific user
export async function deleteUser(id: string) {
    try {
        await db.update(users)
        .set({
            active: false,
            removed: true,
        }).where(eq(users.id, id));
    } catch (error) {
        console.error(error);
        throw error;
    }
}