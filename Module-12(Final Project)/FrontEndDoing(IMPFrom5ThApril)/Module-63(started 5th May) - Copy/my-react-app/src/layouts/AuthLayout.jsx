import { Outlet } from "react-router";
import Logo from "../Shared/Logo/Logo";
import authImage from '../Zap-shift-Resources/assets/authImage.png'
const AuthLayout = () => {
  return (
    <div className="mx-auto max-w-7xl min-h-screen px-4">

      {/* Header */}
      <div className="py-6">
        <Logo />
      </div>

      {/* Main Content */}
      <div className="grid md:grid-cols-2 gap-6 items-center">

        {/* Left - Form */}
        <div>
          <Outlet />
        </div>

        {/* Right - Image */}
        <div className="hidden md:block">
          <img src={authImage} alt="Auth Visual" className="w-full" />
        </div>

      </div>
    </div>
  );
};

export default AuthLayout;