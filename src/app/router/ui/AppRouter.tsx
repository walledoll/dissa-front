import {Suspense} from "react";
import {Route, Routes} from "react-router-dom";
import {routerConfig} from "../routes/routes.tsx";

export const AppRouter = () => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Routes>
                {Object.values(routerConfig).map(({element, path}) => (
                    <Route
                        path={path}
                        key={path}
                        element={
                            <div className="page-wrapper">
                                {element}
                            </div>
                        }
                    />
                ))}
            </Routes>
        </Suspense>
    )
}