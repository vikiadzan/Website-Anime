const { default: Link } = require("next/link")
import { authUserSession } from "@/libs/auth.libs"

const UserActionButton = async() => {
    const user = await authUserSession()
    const actionLabel = user ? "Sign Out" : "Sign In"
    const actionURL = user? "/api/auth/signout" : "api/auth/signin"
   

    return(
        <div className="flex gap-2 justify-between">
            {
                user ? <Link href="/users/dashboard" className="py-1">Dashboard</Link> : null
            }
            
            <Link href={actionURL} className="bg-color-dark hover:bg-color-grey text-color-accent py-1 px-5
            inline-block rounded-md">{actionLabel}</Link>
        </div>
    )
}

export default UserActionButton