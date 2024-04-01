import { Route, Routes } from "react-router-dom"

import { HeroesRoutes } from "../heroes"
import { LoginPage } from "../auth"
import { PrivateRoute } from "./PrivateRoute"
import { PublicRoute } from "./PublicRoute"

export const AppRouter = () => {
  return (
    <>
      <Routes>

        {/* una forma de hacer */}
        <Route path="login/*" element={
          <PublicRoute>
            {/* <LoginPage/> */}
            <Routes>
              <Route path="/*" element={<LoginPage/>}/>
            </Routes>
          </PublicRoute>
        }
        />      

        {/* otra forma de hacerlo */}
        <Route  path="/*" element={
          <PrivateRoute>
            <HeroesRoutes/>
          </PrivateRoute>
        }/>

         {/* <Route path="login" element={<LoginPage/>}/> */}

      </Routes>
    </>
  )
}
