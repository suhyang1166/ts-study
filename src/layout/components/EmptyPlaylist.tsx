import { Button, styled, Typography } from "@mui/material";
import { useNavigate } from "react-router";

const PlaylistWrap = styled("div")(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    marginTop: "16px",
    backgroundColor: theme.palette.action.hover,
    padding: "16px",
    borderRadius: "8px",
}));

const EmptyPlaylist = () => {
    const navigate = useNavigate();

    return (
        <PlaylistWrap>
            <Typography variant="h2" fontWeight={700} color="secondary">
                Create your first playlist
            </Typography>
            <Typography variant="body1" color="secondary">
                It's easy, we'll help you
            </Typography>
            <Button
                variant="contained"
                color="secondary"
                sx={{
                    marginTop: "20px",
                    fontWeight: 700,
                }}
                onClick={() => {
                    navigate("/login");
                }}
            >
                Create Playlist
            </Button>
        </PlaylistWrap>
    );
};

export default EmptyPlaylist;
