import { Button, styled, Typography } from "@mui/material";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import AddIcon from "@mui/icons-material/Add";

const LibraryTitle = styled("h1")(({ theme }) => ({
    color: theme.palette.text.primary,
    fontSize: "24px",
    fontWeight: "bold",
    margin: "16px 0",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "8px",
}));

const TitleWrap = styled("div")({
    display: "flex",
    alignItems: "center",
    gap: "20px",
});

const LibraryHead = () => {
    return (
        <LibraryTitle>
            <TitleWrap>
                <BookmarkIcon />
                <Typography variant="h2" fontWeight={700}>
                    Your Library
                </Typography>
            </TitleWrap>
            <Button variant="text" color="primary">
                <AddIcon />
            </Button>
        </LibraryTitle>
    );
};

export default LibraryHead;
