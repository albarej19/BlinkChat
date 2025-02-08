import { Link } from "react-router-dom";
import { useAuthStore } from "../store/useAuthStore";
import { LogOut, MessageSquare, Settings, User } from "lucide-react";

const Navbar = () => {
  const { logout, authUser } = useAuthStore();

  return (
    <header
      className="bg-white border-b border-gray-200 fixed w-full top-0 z-40 
    backdrop-blur-lg shadow-sm"
    >
      <div className="container mx-auto px-4 h-16">
        <div className="flex items-center justify-between h-full">
          <div className="flex items-center gap-8">
            <Link to="/" className="flex items-center gap-2.5 hover:opacity-80 transition-all">
              <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center">
                <MessageSquare className="w-5 h-5 text-primary" />
              </div>
              <h1 className="text-lg font-bold text-gray-800">BlinkChat</h1>
            </Link>
          </div>

          <div className="flex items-center gap-8">
            <Link
              to={"/settings"}
              className={`text-gray-800 hover:text-gray-500 transition-colors`}
            >
              <Settings className="w-6 h-6" />
            </Link>

            {authUser && (
              <>
                <Link to={"/profile"} className={`text-gray-800 hover:text-gray-500 transition-colors`}>
                  <User className="w-6 h-6" />
                  {/* <span className="hidden sm:inline">Profile</span> */}
                </Link>

                <button className={`text-gray-800 hover:text-gray-500 transition-colors gap-2`} onClick={logout}>
                  <LogOut className="w-5 h-5" />
                  {/* <span className="hidden sm:inline">Logout</span> */}
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};
export default Navbar;