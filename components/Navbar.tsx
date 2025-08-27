import { checkUser } from "@/lib/checkUser";    

export default async function Navbar() {
  const user = await checkUser();

  return (
    <div>
      <h1>Navbar</h1>
      <p>{user?.name}</p>
    </div>
  )
}
