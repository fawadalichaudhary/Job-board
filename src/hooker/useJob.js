import { useInfiniteQuery, useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useAuth } from "./useAuth";

const fetchJobs = ({ pageParam = 1, queryKey }) => {
    const [, filters] = queryKey
    return axios
        .get("https://job-board-server-sigma.vercel.app/jobs", {
            params: {
                page: pageParam,
                limit: 6,
                search: filters?.title,
                job_type: filters?.type,
                experience_level: filters?.level,
            },
        })
        .then((res) => res.data);
};

export const useJobs = (filters) => {
    return useInfiniteQuery({
        queryKey: ["jobs", filters],
        refetchOnWindowFocus: false,
        queryFn: fetchJobs,

        getNextPageParam: (lastPage) => {
            if (lastPage.pagination?.hasMore) {
                return lastPage.pagination.page + 1;
            }
            return undefined;
        },
    });
};;

export const useMyJobs = () => {
    const { user } = useAuth()
    return useQuery({
        queryKey: ["my-jobs"],
        refetchOnWindowFocus: false,
        queryFn: () => {
            return axios
                .get("https://job-board-server-sigma.vercel.app/jobs", {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("token")}`,
                    },
                    params: {
                        recruiter_id: user.id
                    }
                })
                .then((res) => res.data);
        },
    });
};


export const useDashboardStats = () => {
    return useQuery({
        queryKey: ["dashboard-stats"],
        refetchOnWindowFocus: false,
        queryFn: () => {
            return axios
                .get("https://job-board-server-sigma.vercel.app/dashboard/stats", {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("token")}`,
                    },
                })
                .then((res) => res.data);
        },
        retry: false,
    });
};


export const useApplyJob = () => {
    const mutation = useMutation({
        mutationFn: (data) => {
            return axios
                .post("https://job-board-server-sigma.vercel.app/applications", data)
                .then((res) => res.data);
        },
    });
    return mutation;
};