import { Alert } from "@mui/material";

interface ErrorMessageProps {
    error: string;
}

const ErrorMessage = ({ error }: ErrorMessageProps) => {
    return <Alert severity="error">{error}</Alert>;
};

export default ErrorMessage;
