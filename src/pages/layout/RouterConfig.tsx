import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { RouteConstants } from "../../constants/RouteConstant";
import ProtectedRoute from "./ProtectedRoute";

const RouterConfig = () => {
  const ForgetPasswordLazyComponent = React.lazy(
    () => import("../forgetPassword/ForgetPassword")
  );
  const LoginPageLazyComponent = React.lazy(
    () => import("../loginPage/LoginPage")
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

  const PostPageLazyComponent = React.lazy(
    () => import("../PostPage/PostPage")
  );

  const LayoutLazyComponent = React.lazy(() => import("../layout/Layout"));

  const ExploreTopicsPageLazyComponents = React.lazy(
    () => import("../ExploreTopicsPage/ExploreTopicsPage")
  );

  const MachineLearningModelPageLazyComponents = React.lazy(
    () => import("../MachineLearningModel/MachineLearningModel")
  );

  const KNNAlgorithmsPageLazyComponents = React.lazy(
    () =>
      import(
        "../MachineLearningModel/SupervisedMLModels/KNNAlgorithms/KNNAlgorithms"
      )
  );

  const RegistrationLazyComponent = React.lazy(
    () => import("../resigtraionPage/registrationForm/RegistrationForm")
  );

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
          path={RouteConstants.ExploreTopics}
          element={
            <React.Suspense fallback={<>Loading</>}>
              <ExploreTopicsPageLazyComponents />
            </React.Suspense>
          }
        />

        <Route
          path={`${RouteConstants.KNN}`}
          element={
            <React.Suspense fallback={<>Loading</>}>
              <KNNAlgorithmsPageLazyComponents />
            </React.Suspense>
          }
        />

        <Route
          path={RouteConstants.MachineLearningModels}
          element={
            <React.Suspense fallback={<>Loading</>}>
              <MachineLearningModelPageLazyComponents />
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
          path={RouteConstants.ResigterPage}
          element={
            <React.Suspense fallback={<>Loading</>}>
              <RegistrationLazyComponent />
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
          path={RouteConstants.PostPage}
          element={
            <React.Suspense fallback={<>Loading</>}>
                <PostPageLazyComponent />
              </React.Suspense>
          }
          ></Route>
          {/* <Route
            path={RouteConstants.Layout}
            element={
              <React.Suspense fallback={<>Loading</>}>
                <LayoutLazyComponent />
              </React.Suspense>
            }
          ></Route> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default RouterConfig;
