import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { RouteConstants } from "../../constants/RouteConstant";
import ProtectedRoute from "./ProtectedRoute";

const RouterConfig = () => {
  const LoginPageLazyComponent = React.lazy(
    () => import("../loginPage/LoginPage")
  );
  const ForgetPasswordLazyComponent = React.lazy(
    () => import("../forgetPassword/ForgetPassword")
  );
  const RestPasswordLazyComponent = React.lazy(
    () => import("../resetPassword/ResetPassword")
  );
  const DefaultPublicPageLazyComponent = React.lazy(
    () => import("../DefaultPublicPage/DefaultPublicPage")
  );

  const FileNotFoundLazyComponent = React.lazy(
    () => import("../fileNotFound/FileNotFound")
  );

  const DashboardLazyCompoent = React.lazy(
    () => import("../protectedComponent/dashboardPage/DashboardPage")
  );
  const UserPageLazyComponent = React.lazy(
    () => import("../protectedComponent/userPage/UserPage")
  );

  const LayoutLazyComponent = React.lazy(() => import("../layout/Layout"));

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={RouteConstants.Login}
          element={
            <React.Suspense fallback={<>Loading</>}>
              <LoginPageLazyComponent />
            </React.Suspense>
          }
        />

        <Route
          path={RouteConstants.ForgetPassword}
          element={
            <React.Suspense fallback={<>Loading</>}>
              <ForgetPasswordLazyComponent />
            </React.Suspense>
          }
        />

        <Route
          path={RouteConstants.ResetPassword}
          element={
            <React.Suspense fallback={<>Loading</>}>
              <RestPasswordLazyComponent />
            </React.Suspense>
          }
        />

        <Route
          path={RouteConstants.DefaultPath}
          element={
            <React.Suspense fallback={<>Loading</>}>
              <DefaultPublicPageLazyComponent />
            </React.Suspense>
          }
        />

        <Route
          path={RouteConstants.FileNotFound}
          element={
            <React.Suspense fallback={<>Loading</>}>
              <FileNotFoundLazyComponent />
            </React.Suspense>
          }
        />
        
        <Route element={<ProtectedRoute />}>
          <Route
            path={RouteConstants.Dashboard}
            element={
              <React.Suspense fallback={<>Loading</>}>
                <DashboardLazyCompoent />
              </React.Suspense>
            }
          ></Route>
          <Route
            path={RouteConstants.UserPage}
            element={
              <React.Suspense fallback={<>Loading</>}>
                <UserPageLazyComponent />
              </React.Suspense>
            }
          ></Route>
          <Route
            path={RouteConstants.Layout}
            element={
              <React.Suspense fallback={<>Loading</>}>
                <LayoutLazyComponent />
              </React.Suspense>
            }
          ></Route>
        </Route>
        
      </Routes>
    </BrowserRouter>
  );
};

export default RouterConfig;
