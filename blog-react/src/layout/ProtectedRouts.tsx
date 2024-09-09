import { memo, useEffect } from "react";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import Layout from "./Layout";
interface ProtectedRouteProps {
  component: any;
  path: string | string[];
  props?: any;
  exact?: boolean;
}
const ProtectedRouts = ({ children }: any) => {
  const navigate = useNavigate();
  const router = useLocation();
  console.log(router.pathname);
  const unProtectedRoutes = ["/login", "/sign-up"];
  const isAuthenticated = useSelector(
    (state: any) => state.login?.userDetails?.token
  );
  console.log(isAuthenticated);
  const pathName = router?.pathname?.toLocaleLowerCase()
  const pathIsProtected = unProtectedRoutes.indexOf(pathName) !== -1;

  useEffect(() => {
    if (!isAuthenticated) {
      unProtectedRoutes.includes(pathName)
        ? navigate(pathName)
        : navigate("/login");
    } else {
      unProtectedRoutes.includes(pathName)
        ? navigate("/dashboard")
        : navigate(pathName);
    }
  }, [isAuthenticated, pathIsProtected]);

  return isAuthenticated ?  <Layout>{children}</Layout> : <div>{children}</div>;
};
export default memo(ProtectedRouts);
