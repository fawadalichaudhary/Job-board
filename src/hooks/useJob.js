import { useInfiniteQuery, useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
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

const fetchMyJobs = ({ pageParam = 1, queryKey }) => {
    const [, userId] = queryKey;

    return axios
        .get("https://job-board-server-sigma.vercel.app/jobs", {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
            params: {
                recruiter_id: userId,
                page: pageParam,
                limit: 10,
            },
        })
        .then((res) => res.data);
};

export const useMyJobs = () => {
    const { user } = useAuth();

    return useInfiniteQuery({
        queryKey: ["my-jobs", user?.id],
        queryFn: fetchMyJobs,
        enabled: !!user?.id,

        getNextPageParam: (lastPage) => {
            if (lastPage.pagination?.hasMore) {
                return lastPage.pagination.page + 1;
            }
            return undefined;
        },

        getPreviousPageParam: (lastPage) => {
            if (lastPage.pagination?.page > 1) {
                return lastPage.pagination.page - 1;
            }
            return undefined;
        },
    });
}


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
export const useCreateJob = () => {
    return useMutation({
        mutationFn: (data) => {
            return axios
                .post("https://job-board-server-sigma.vercel.app/jobs", data, {
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
        mutationFn: (jobId) => {
            return axios.delete(
                `https://job-board-server-sigma.vercel.app/jobs/${jobId}`,
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
export const useJobApplicants = (job_Id) => {
    return useQuery({
        queryKey: ["applications", job_Id],

        queryFn: async () => {
            const res = await axios.get(
                `https://job-board-server-sigma.vercel.app/jobs/${job_Id}/applications`,
                {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("token")}`,
                    },
                }
            );

            return res.data;
        },

        enabled: !!job_Id,
        refetchOnWindowFocus: false,
    });
};