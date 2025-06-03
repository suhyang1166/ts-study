import { Button } from "@mui/material";
import React from "react";

const LoginButton = () => {
    return (
        <Button
            variant="contained"
            color="secondary"
            size="large"
            sx={{ fontWeight: 700 }}
        >
            Login
        </Button>
    );
};

export default LoginButton;
