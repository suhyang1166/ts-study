import LibraryHead from "./LibraryHead";
import EmptyPlaylist from "./EmptyPlaylist";
import { styled } from "@mui/material";
import useGetCurrentUserPlaylists from "../../hooks/useGetCurrentUserPlaylists";
import PlayList from "./PlayList";
import LoadingSpinner from "../../common/components/LoadingSpinner";
import ErrorMessage from "../../common/components/ErrorMessage";
import useGetCurrentUserProfile from "../../hooks/useGetCurrentUserProfile";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const Container = styled("div")(({ theme }) => ({
    width: "100%",
    height: "100%",
    borderRadius: "8px",
    backgroundColor: theme.palette.background.paper,
    color: theme.palette.text.primary,
    padding: "8px 20px",
}));

const PlaylistContainer = styled("div")(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    gap: "12px",
    marginTop: "16px",
    overflowY: "auto",
    maxHeight: "calc(100vh - 200px)",
    height: "100%",
    "&::-webkit-scrollbar": {
        display: "none",
        msOverflowStyle: "none", // IE and Edge
        scrollbarWidth: "none", // Firefox
    },
    [theme.breakpoints.down("sm")]: {
        maxHeight: "calc(100vh - 65px - 119px)",
    },
}));

const Library = () => {
    const { ref, inView } = useInView();
    const {
        data,
        isLoading,
        isError,
        error,
        hasNextPage,
        isFetchingNextPage,
        fetchNextPage,
    } = useGetCurrentUserPlaylists({
        limit: 10,
        offset: 0,
    });

    const { data: user } = useGetCurrentUserProfile();
    useEffect(() => {
        if (inView && hasNextPage && !isFetchingNextPage) {
            fetchNextPage();
        }
    }, [inView]);

    if (!user) return <EmptyPlaylist />;

    if (isLoading) {
        return <LoadingSpinner />;
    }

    if (isError) {
        return <ErrorMessage error={error.message} />;
    }

    console.log("play data", data);

    return (
        <Container>
            <LibraryHead />
            {data && data.pages[0].total !== 0 ? (
                <PlaylistContainer>
                    {data.pages.map((page, idx) => (
                        <PlayList key={idx} playlists={page.items} />
                    ))}
                    <div ref={ref}>
                        {isFetchingNextPage && <LoadingSpinner />}
                    </div>
                </PlaylistContainer>
            ) : (
                <EmptyPlaylist />
            )}
        </Container>
    );
};

export default Library;
