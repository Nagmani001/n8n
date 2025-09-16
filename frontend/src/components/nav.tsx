import { Link, useLocation } from 'react-router-dom';
import { Zap } from 'lucide-react';
import DropdownUser from './dropdownlist';
import { useVerify } from '@/hooks/useVerify';

export default function Nav() {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;

  const user = useVerify();

  return (
    <nav className="bg-white/95 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <div className="bg-blue-600 p-2 rounded-lg">
              <Zap className="h-6 w-6 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900">
              FlowMaster
            </span>
          </Link>

          {user ?
            <DropdownUser user={user} />
            :
            <div className="flex items-center space-x-4">
              <Link
                to="/signin"
                className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${isActive('/signin')
                  ? 'bg-blue-50 text-blue-700'
                  : 'text-gray-700 hover:text-blue-700 hover:bg-blue-50'
                  }`}
              >
                Sign In
              </Link>
              <Link
                to="/signup"
                className={`px-4 py-2 text-sm font-medium rounded-lg border transition-colors ${isActive('/signup')
                  ? 'bg-blue-600 text-white border-blue-600'
                  : 'bg-blue-600 text-white border-blue-600 hover:bg-blue-700'
                  }`}
              >
                Get Started
              </Link>
            </div>
          }
        </div>
      </div>
    </nav>
  );

}
