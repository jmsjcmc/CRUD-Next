import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import React from 'react'
import { getUsers } from "../../server/users"

export default async function Userstable() {
    const users = await getUsers();
  return (
    <Table>
  <TableCaption>A list of your recent invoices.</TableCaption>
  <TableHeader>
    <TableRow>
      <TableHead className="w-[100px]">First Name</TableHead>
      <TableHead>Last Name</TableHead>
      <TableHead>Username</TableHead>
      <TableHead>Active</TableHead>
      <TableHead>Remove</TableHead>
      <TableHead>Created At</TableHead>
      <TableHead className="text-right">Updated At</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    {users.map((user) => (
        <TableRow key={user.id}>
      <TableCell className="font-medium">{user.firstname}</TableCell>
      <TableCell>{user.lastname}</TableCell>
      <TableCell>{user.username}</TableCell>
      <TableCell>{user.active}</TableCell>
      <TableCell>{user.removed}</TableCell>
      <TableCell>{user.createdAt?.toLocaleString()}</TableCell>
      <TableCell className="text-right">{user.updatedAt?.toLocaleString()}</TableCell>
    </TableRow>
      ))}
  </TableBody>
</Table>
  )
}
