import { createContext, useContext } from "react";
import { useAuth } from "../hooker/useAuth";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const auth = useAuth();

    return (
        <AuthContext.Provider value={auth}>
            {children}
        </AuthContext.Provider>
    );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useAuthcontext = () => {
    const context = useContext(AuthContext);

    return context;
};