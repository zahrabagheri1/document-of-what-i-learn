import { redirect } from "react-router-dom";
import { auth } from "../../auth";

export default function loginLoader(){
    if (auth.isAuthenticated()) {
        return redirect("/")
    }
    return null
}