import { HomePage } from "pages/HomePage"
import { WatchPage } from "pages/WatchPage"
import { Route, Routes } from "react-router-dom"

export const RouteHome = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/watch" element={<WatchPage />} />
    </Routes>
  )
}