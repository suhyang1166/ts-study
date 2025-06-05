import { styled, Typography } from "@mui/material";
import PlayButton from "../../../common/components/PlayButton";
import { Opacity } from "@mui/icons-material";

interface CardProps {
    image: string;
    name: string;
    artistName: string | undefined;
}

const CardWrap = styled("div")({
    width: "100%",
    position: "relative",
    cursor: "pointer",

    "&:hover .hover-button": {
        // display: "block",
        opacity: 1,
    },
});

const TextWrap = styled("div")({
    position: "absolute",
    width: "100%",
});

const EllipsisTypography = styled(Typography)({
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
});

const ButtonWrap = styled("div")({
    position: "absolute",
    bottom: "10px",
    right: "4px",
    // display: "none",
    opacity: 0,
    transition: "all 0.3s ease",
});

const Card = ({ image, name, artistName }: CardProps) => {
    return (
        <CardWrap>
            <img
                src={image}
                alt={name}
                style={{
                    width: "100%",
                    borderRadius: "8px",
                }}
            />
            <TextWrap>
                <EllipsisTypography>{name}</EllipsisTypography>
                <EllipsisTypography color="textSecondary">
                    {artistName}
                </EllipsisTypography>
            </TextWrap>
            <ButtonWrap className="hover-button">
                <PlayButton />
            </ButtonWrap>
        </CardWrap>
    );
};

export default Card;
