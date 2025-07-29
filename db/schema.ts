import { text, boolean, pgTable, timestamp, uuid } from "drizzle-orm/pg-core";

export const users = pgTable("users", {
  id: uuid("id").primaryKey().defaultRandom(),
  firstname: text("firstname").notNull(),
  lastname: text("lastname").notNull(),
  username: text("username").notNull(),
  password: text("password").notNull(),
  active: boolean("active").default(true).notNull(),
  removed: boolean("removed").default(false).notNull(),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow()
});

export type User = typeof users.$inferSelect;