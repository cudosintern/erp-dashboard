import { Search, MapPin, Bell, HelpCircle, GraduationCap } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between bg-[#1e40af] px-6 py-3 text-white">
      {/* Left Section: Logo and Brand */}
      <div className="flex items-center gap-2">
        <GraduationCap size={32} />
        <span className="text-xl font-bold tracking-tight">ABC University</span>
      </div>

      {/* Right Section: Actions */}
      <div className="flex items-center gap-6">
        {/* Search Bar */}
        <div className="relative">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <Search className="h-4 w-4 text-gray-300" />
          </div>
          <input
            type="text"
            className="block w-64 rounded-full border-none bg-white/10 py-1.5 pl-10 pr-3 text-sm text-white placeholder-gray-300 focus:bg-white/20 focus:outline-none focus:ring-1 focus:ring-white"
            placeholder="Search..."
          />
        </div>

        {/* Icons */}
        <div className="flex items-center gap-4">
          <button className="hover:text-gray-300 transition-colors">
            <MapPin size={20} />
          </button>
          <button className="hover:text-gray-300 transition-colors">
            <Bell size={20} />
          </button>
          <button className="hover:text-gray-300 transition-colors">
            <HelpCircle size={20} />
          </button>
        </div>

        {/* Profile Avatar */}
        <div className="h-10 w-10 overflow-hidden rounded-full border-2 border-white/50 cursor-pointer">
          <img
            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop"
            alt="Profile"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;