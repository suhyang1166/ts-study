import { Outlet } from "react-router";

const AppLayout = () => {
    return (
        <div>
            sidebar
            <Outlet />
        </div>
    );
};

export default AppLayout;
