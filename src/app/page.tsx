import Userstable from "@/pages/users-table";
import { getUsers } from "../../server/users";
import AddUserDialog from "@/components/dialogs/add-user";

export default async function Home() {
  const users = await getUsers();
  return (
    <div className="flex flex-col gap-4 max-w-7xl mx-auto p-4 md:p-24">
      <h1 className="text-2xl font-bold">Users</h1>
      <div className="flex justify-end">
        <AddUserDialog/>
      </div>
      <Userstable/>
    </div>
  );
}
