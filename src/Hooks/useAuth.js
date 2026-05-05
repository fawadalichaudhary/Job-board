/* eslint-disable react-hooks/set-state-in-effect */
import { useState, useEffect } from "react";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useNavigate } from "react-router";

const API = "https://job-board-server-sigma.vercel.app";

export const useAuth = () => {
    const navigate = useNavigate()
    const [token, setToken] = useState(localStorage.getItem("token") || null);
    const [user, setUser] = useState(() => {
        const savedUser = localStorage.getItem("user");
        return savedUser ? JSON.parse(savedUser) : null;
    });

    useEffect(() => {
        const savedUser = localStorage.getItem("user");
        if (savedUser) {
            setUser(JSON.parse(savedUser));
        }
    }, []);

    const loginMutation = useMutation({
        mutationFn: (data) =>
            axios.post(`${API}/auth/login`, data).then(res => res.data),

        onSuccess: (data) => {
            setToken(data.token);
            setUser(data.recruiter);

            localStorage.setItem("token", data.token);
            localStorage.setItem("user", JSON.stringify(data.recruiter));
        },
    });

    const registerMutation = useMutation({
        mutationFn: (data) =>
            axios.post(`${API}/auth/register`, data).then(res => res.data),

        onSuccess: (data) => {
            setToken(data.token);
            setUser(data.recruiter);

            localStorage.setItem("token", data.token);
            localStorage.setItem("user", JSON.stringify(data.recruiter));
        },
    });

    const login = (email, password) =>
        loginMutation.mutateAsync({ email, password });

    const signup = (name, email, password) =>
        registerMutation.mutateAsync({ name, email, password });

    const logout = () => {
        navigate("/")
        setToken(null);
        setUser(null);
        localStorage.removeItem("token");
        localStorage.removeItem("user");
    };

    const authHeader = () => ({
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });

    return {
        token, user, login, signup, logout, authHeader, loginLoading: loginMutation.isPending, signupLoading: registerMutation.isPending,
    };
};