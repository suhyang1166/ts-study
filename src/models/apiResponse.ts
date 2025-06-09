import { ExternalUrls, Image, Owner } from "./commonTypes";

export interface ApiResponse<T> {
    href: string;
    limit: number;
    next: string;
    offset: number;
    previous: string | null;
    total: number;
    items: T[];
}

export type GetCurrentUserPlaylistResponse = ApiResponse<SimplifiedPlaylist>;

export interface SimplifiedPlaylist {
    collaborative?: boolean;
    description: string;
    external_urls?: ExternalUrls;
    href?: string;
    id?: string;
    images?: Image[];
    name?: string;
    owner: Owner;
    public?: boolean;
    snapshot_id?: string;
    tracks?: {
        href?: string;
        total?: number;
    };
    type?: string;
    uri?: string;
}
