import { useQuery } from "@tanstack/react-query";
import { getNewReleases } from "../apis/albumApi";
import { use } from "react";
import useClientCredentialToken from "./useClientCredentialToken";

const useGetNewReleases = () => {
    const clientCredentialToken = useClientCredentialToken();

    return useQuery({
        queryKey: ["new-releases"],
        queryFn: async () => {
            if (!clientCredentialToken) {
                throw new Error("Client credential token is not available");
            }
            return getNewReleases(clientCredentialToken);
        },
    });
};

export default useGetNewReleases;
