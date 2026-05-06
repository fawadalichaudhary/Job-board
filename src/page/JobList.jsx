import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import JobCard from "../components/JobCard";
import SearchJobs from "../components/SearchJobs";
import { useJobs } from "../hooks/useJob";

const JobList = () => {
    const [filters, setFilters] = useState({});

    const { data, isLoading, error, fetchNextPage, hasNextPage, isFetchingNextPage,
    } = useJobs(filters);

    const { ref, inView } = useInView({
        threshold: 1,
    });

    useEffect(() => {
        if (inView && hasNextPage) {
            fetchNextPage();
        }
    }, [inView, hasNextPage, fetchNextPage]);

    if (isLoading) {
        return <p className="text-center mt-10">Loading...</p>;
    }

    if (error) {
        return <p className="text-center">Error loading jobs</p>;
    }

    return (
        <div className="bg-gray-50 min-h-screen">
            <SearchJobs onSearch={setFilters} />

            <div className="max-w-11/12 mx-auto p-2 space-y-2 ">

                {data?.pages?.map((page) =>
                    page.data.map((job) => (
                        <JobCard key={job.id} job={job} />
                    ))
                )}
                <div ref={ref} className="h-10" />

                {isFetchingNextPage && (
                    <p className="text-center">Loading more jobs...</p>
                )}

                {!hasNextPage && (
                    <p className="text-center text-gray-500">
                        No more jobs
                    </p>
                )}

            </div>
        </div>
    );
};

export default JobList;