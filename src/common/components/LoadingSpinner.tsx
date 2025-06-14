import { ScaleLoader } from "react-spinners";

const LoadingSpinner = () => {
    return (
        <div
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100vh",
            }}
        >
            <ScaleLoader color="#1ed760" height={80} radius={5} width={5} />
        </div>
    );
};

export default LoadingSpinner;
