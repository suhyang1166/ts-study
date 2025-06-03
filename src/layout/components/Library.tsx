import LibraryHead from "./LibraryHead";
import EmptyPlaylist from "./EmptyPlaylist";
import { styled } from "@mui/material";

const Container = styled("div")(({ theme }) => ({
    width: "100%",
    height: "100%",
    borderRadius: "8px",
    backgroundColor: theme.palette.background.paper,
    color: theme.palette.text.primary,
    padding: "8px 20px",
}));

const Library = () => {
    return (
        <Container>
            <LibraryHead />
            <EmptyPlaylist />
        </Container>
    );
};

export default Library;
