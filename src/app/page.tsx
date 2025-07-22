import Userstable from "@/pages/users-table";
import { getUsers } from "../../server/users";
import { Button } from "@/components/ui/button";
import { UserPlus } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { UserForm } from "@/components/forms/user-form";
export default async function Home() {
  const users = await getUsers();
  return (
    <div className="flex flex-col gap-4 max-w-7xl mx-auto p-4 md:p-24">
      <h1 className="text-2xl font-bold">Users</h1>
      <div className="flex justify-end">
        <Dialog>
          <DialogTrigger asChild>
<Button>
          Add User <UserPlus className="size-4"/></Button>
          </DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Add User</DialogTitle>
      <DialogDescription>
        Add new user
      </DialogDescription>
      <UserForm/>
    </DialogHeader>
  </DialogContent>
</Dialog>
      </div>
      <Userstable/>
    </div>
  );
}
