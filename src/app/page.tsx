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
      <DialogTitle>Are you absolutely sure?</DialogTitle>
      <DialogDescription>
        This action cannot be undone. This will permanently delete your account
        and remove your data from our servers.
      </DialogDescription>
    </DialogHeader>
  </DialogContent>
</Dialog>
      </div>
      <Userstable/>
    </div>
  );
}
