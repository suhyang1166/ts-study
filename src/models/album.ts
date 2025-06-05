import { Artist } from "./artist";
import { ExternalUrls, Image, Restrictions } from "./commonTypes";

export interface getNewReleasesResponse {
    albums: {
        href: string;
        limit: number;
        next: string;
        offset: number;
        previous: string | null;
        total: number;
        items: SimplifiedAlbum[];
    };
}

export interface SimplifiedAlbum {
    album_type: string;
    available_markets: string[];
    external_urls: ExternalUrls;
    href: string;
    id: string;
    name: string;
    release_date: string;
    release_date_precision: string;
    restrictions?: Restrictions;
    total_tracks: number;
    type: string;
    uri: string;
    artists: Artist[];
    images: Image[];
}
