import { Route, Routes } from "react-router-dom"
import HomeScreen from "./pages/HomeScreen"
import AuthScreen from "./pages/AuthScreen"
import ProtectedRoute from "./components/auth/ProtectedRoute"

function App() {
  return (
    <Routes>
      <Route element={<ProtectedRoute />}>
        <Route index path="/" element={<HomeScreen />} />
      </Route>
      <Route path="/auth" element={<AuthScreen />} />
    </Routes>
  )
}

export default App
