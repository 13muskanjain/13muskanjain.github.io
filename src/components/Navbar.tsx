import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-white/80 backdrop-blur-md shadow-md sticky top-0 z-50 border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text hover:from-blue-700 hover:to-purple-700 transition-all">
            Muskan Jain
          </Link>

          <div className="flex space-x-1">
            <Link
              to="/"
              className={`${
                isActive('/')
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
                  : 'text-gray-700 hover:bg-gray-100'
              } px-6 py-2 rounded-lg font-medium transition-all duration-200`}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`${
                isActive('/about')
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
                  : 'text-gray-700 hover:bg-gray-100'
              } px-6 py-2 rounded-lg font-medium transition-all duration-200`}
            >
              About
            </Link>
            <Link
              to="/projects"
              className={`${
                isActive('/projects')
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
                  : 'text-gray-700 hover:bg-gray-100'
              } px-6 py-2 rounded-lg font-medium transition-all duration-200`}
            >
              Projects
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
