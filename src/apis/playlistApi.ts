import { GetCurrentUserPlaylistResponse } from "../models/apiResponse";
import { GetCurrentUserPlaylistsRequest } from "../models/playlist";
import api from "../utils/api";

const getCurrentUserPlaylists = async ({
    limit,
    offset,
}: GetCurrentUserPlaylistsRequest): Promise<GetCurrentUserPlaylistResponse> => {
    try {
        const response = await api.get(`/me/playlists`, {
            params: { limit, offset },
        });
        return response.data;
    } catch (error) {
        throw new Error("fail to fetch current user playlists");
    }
};

export default getCurrentUserPlaylists;
