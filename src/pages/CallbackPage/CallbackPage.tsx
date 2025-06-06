// src/pages/CallbackPage/CallbackPage.tsx
import { useEffect } from "react";
import useExchangeToken from "../../hooks/useExchangeToken";
import LoadingSpinner from "../../common/components/LoadingSpinner";
import { useNavigate, useSearchParams } from "react-router";

const CallbackPage = () => {
    const navigate = useNavigate();

    const urlParams = new URLSearchParams(window.location.search);
    let code = urlParams.get("code");
    const codeVerifier = localStorage.getItem("code_verifier");
    const { mutate: exchangeToken } = useExchangeToken();

    useEffect(() => {
        if (code && codeVerifier) {
            exchangeToken(
                { code, codeVerifier },
                {
                    onSuccess: () => {
                        localStorage.removeItem("code_verifier");
                        navigate("/", { replace: true });
                    },
                    onError: (error) => {
                        // 에러 시에도 홈으로 이동
                        console.error("Token exchange failed:", error);
                        navigate("/", { replace: true });
                    },
                }
            );
        } else {
            // code나 codeVerifier가 없으면 바로 홈으로
            navigate("/", { replace: true });
        }
    }, [code, codeVerifier, exchangeToken]);

    return null;
};

export default CallbackPage;
