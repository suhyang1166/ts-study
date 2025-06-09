import { styled } from "@mui/material";
import { SimplifiedPlaylist } from "../../models/apiResponse";

const PlayWrap = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    gap: "12px",
    padding: "8px",
    borderRadius: "8px",
    cursor: "pointer",
    transition: "background-color 0.2s ease",
    "&:hover": {
        backgroundColor: theme.palette.action.hover,
    },
}));

const ImgWrap = styled("div")({
    width: "60px",
    height: "60px",
    borderRadius: "8px",
    overflow: "hidden",
    flexShrink: 0,
    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
});

const Image = styled("img")({
    display: "block",
    width: "100%",
    height: "100%",
    objectFit: "cover",
});

const ContentWrap = styled("div")({
    flex: 1,
    display: "flex",
    flexDirection: "column",
    gap: "4px",
    overflow: "hidden",
});

const PlaylistTitle = styled("h3")(({ theme }) => ({
    margin: 0,
    fontSize: "14px",
    fontWeight: 600,
    color: theme.palette.text.primary,
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
}));

const PlaylistMeta = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    gap: "4px",
    fontSize: "12px",
    color: theme.palette.text.secondary,
}));

const PlaylistType = styled("span")({
    fontSize: "12px",
});

const Separator = styled("span")({
    fontSize: "12px",
    opacity: 0.6,
});

const OwnerName = styled("span")({
    fontSize: "12px",
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
});

interface PlayListProps {
    playlists: SimplifiedPlaylist[];
}

const PlayList = ({ playlists }: PlayListProps) => {
    console.log("111", playlists);
    return (
        <div>
            {playlists?.map((item) => (
                <PlayWrap key={item.id}>
                    <ImgWrap>
                        <Image
                            src={item.images && item?.images[0]?.url}
                            alt={`${item.name} playlist cover`}
                        />
                    </ImgWrap>
                    <ContentWrap>
                        <PlaylistTitle>{item.name}</PlaylistTitle>
                        <PlaylistMeta>
                            <PlaylistType>Playlist</PlaylistType>
                            <Separator>•</Separator>
                            <OwnerName>{item.owner.display_name}</OwnerName>
                        </PlaylistMeta>
                    </ContentWrap>
                </PlayWrap>
            ))}
        </div>
    );
};

export default PlayList;
