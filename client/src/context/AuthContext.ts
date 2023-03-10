import { createContext } from "react";

export type User = {
    username: string | null,
    authToken?: string
    setUsername: (value: string | null) => void
}

export const AuthContext = createContext<User>({
    username: null,
    setUsername: (value: string | null) => {}
})