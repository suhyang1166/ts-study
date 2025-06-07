import { Box, styled } from "@mui/material";
import LoginButton from "../../common/components/LoginButton";
import useGetCurrentUserProfile from "../../hooks/useGetCurrentUserProfile";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const ImgWrap = styled("div")({
    width: "50px",
    // height: "50px",
    padding: "10px 0",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: "0.25rem",
});

const UserImg = styled("img")({
    display: "bolck",
    width: "100%",
    height: "100%",
    backgroundSize: "cover",
    borderRadius: "50%",
});

const UserName = styled("p")({
    padding: 0,
    margin: 0,
});

const Navbar = () => {
    const { data: userProfile } = useGetCurrentUserProfile();
    console.log("data", userProfile);

    return (
        <Box
            display={"flex"}
            justifyContent="flex-end"
            alignItems={"center"}
            height={"80px"}
        >
            {userProfile ? (
                <ImgWrap>
                    {userProfile.images.length !== 0 ? (
                        <UserImg src={userProfile.images[0]?.url} />
                    ) : (
                        <AccountCircleIcon
                            sx={{
                                width: "100%",
                                height: "100%",
                                fontSize: "40px",
                            }}
                        />
                    )}
                    {/* <UserImg src="https://i.scdn.co/image/ab67616d00001e02ff9ca10b55ce82ae553c8228" /> */}

                    <UserName>{userProfile.display_name}</UserName>
                </ImgWrap>
            ) : (
                <LoginButton />
            )}
        </Box>
    );
};

export default Navbar;
