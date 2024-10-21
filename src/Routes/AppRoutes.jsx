import { Route, Routes } from "react-router-dom";
import DribbbleHeader from "../Pages/NavBar1.jsx";

const AppRoutes = () => {
    return (
        <>
            <Routes>
                <Route
                    path="/Home"
                    element={<DribbbleHeader></DribbbleHeader>}
                />
                <Route
                    path="*"
                    element={<h1>Nada</h1>}
                />
            </Routes>

        </>
    )
}

export default AppRoutes;