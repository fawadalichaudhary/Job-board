import { useInfiniteQuery, useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

const fetchJobs = ({ pageParam = 1 }) => {
    return axios
        .get("https://job-board-server-sigma.vercel.app/jobs", {
            params: {
                page: pageParam,
                limit: 4,
            },
        })
        .then((res) => res.data);
};

export const useJobs = () => {
    return useInfiniteQuery({
        queryKey: ["jobs"],
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
    return useQuery({
        queryKey: ["my-jobs"],
        queryFn: () => {
            return axios
                .get("https://job-board-server-sigma.vercel.app/jobs", {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("token")}`,
                    },
                })
                .then((res) => res.data);
        },
    });
};

export const useDeleteJob = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (id) => {
            return axios.delete(
                `https://job-board-server-sigma.vercel.app/jobs/${id}`,
                {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("token")}`,
                    },
                }
            );
        },
        onSuccess: () => {
            queryClient.invalidateQueries(["my-jobs"]);
        },
    });
};


export const useDashboardStats = () => {
    return useQuery({
        queryKey: ["dashboard-stats"],
        queryFn: () => {
            return axios
                .get("https://job-board-server-sigma.vercel.app/dashboard/stats")
                .then((res) => res.data);
        },
        retry: false,
    });
};


export const useApplyJob = () => {
    return useMutation({
        mutationFn: (data) => {
            return axios
                .post("https://job-board-server-sigma.vercel.app/applications", data)
                .then((res) => res.data);
        },
    });
};