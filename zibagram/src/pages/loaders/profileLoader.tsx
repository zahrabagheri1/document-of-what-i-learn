import { redirect } from "react-router-dom"
import { auth } from "../../auth"
import { api } from "../../api/api"
import { BioResponse } from "../../@types/type"

export default async function profileLoader() {
    if (!auth.isAuthenticated()) {
        return redirect("/login")
    }
    const response = await api.requsetFetchBio()
    const responseData = response.data as BioResponse

    return {
        bio: responseData.bio
    }
}
