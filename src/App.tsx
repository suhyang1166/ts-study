import { Route, Routes } from "react-router";
import "./App.css";
import React, { Suspense } from "react";
import LoadingSpinner from "./common/components/LoadingSpinner";

const AppLayout = React.lazy(() => import("./layout/AppLayout"));
const HomePage = React.lazy(() => import("./pages/Homepage/HomePage"));
const SearchPage = React.lazy(() => import("./pages/SearchPage/SearchPage"));
const SearchWithKeywordPage = React.lazy(
    () => import("./pages/SearchWithKeywordPage/SearchWithKeywordPage")
);
const PlaylistDetailPage = React.lazy(
    () => import("./pages/PlaylistDetailPage/PlaylistDetailPage")
);
const PlaylistPage = React.lazy(
    () => import("./pages/PlaylistPage/PlaylistPage")
);

// 0. 사이드바 있어야함 (플레이이스트, 메뉴)
// 1. 홈페이지 /
// 2. 서치페이지 /search
// 3. 서치 결과 페이지 /search/:keyword
// 4. 플레이리스트 디테일 페이지 /playlist/:id
// 5. (모바일버전)플레이리스트 보여주는 페이지 /playlist

function App() {
    return (
        <Suspense fallback={<LoadingSpinner />}>
            <Routes>
                <Route path="/" element={<AppLayout />}>
                    <Route index element={<HomePage />} />
                    <Route path="search" element={<SearchPage />} />
                    <Route
                        path="search/:keyword"
                        element={<SearchWithKeywordPage />}
                    />
                    <Route
                        path="playlist/:id"
                        element={<PlaylistDetailPage />}
                    />
                    <Route path="playlist" element={<PlaylistPage />} />
                </Route>
                <Route path="*" element={<div>Page Not Found</div>} />
            </Routes>
        </Suspense>
    );
}

export default App;
