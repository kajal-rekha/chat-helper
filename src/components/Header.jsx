import { Menu, Clock, User, Sun } from "lucide-react";

const Header = ({ onMenuClick, onHistoryClick }) => {
    return (
        <header className="flex items-center justify-between p-5 border-b border-gray-700">
            <div className="flex items-center">
                <button onClick={onMenuClick} className="mr-4 lg:hidden">
                    <Menu className="w-6 h-6" />
                </button>
                <h1 className="text-md md:text-xl font-bold">
                    Celestia Knowledge Companion
                </h1>
            </div>
            <div className="flex items-center space-x-4 lg:mr-[17rem]">
                <button
                    className="text-gray-400 hover:text-white transition-colors"
                    aria-label="User profile"
                >
                    <User className="w-6 h-6" />
                </button>
                <button
                    className="text-gray-400 hover:text-white transition-colors"
                    aria-label="Toggle theme"
                >
                    <Sun className="w-6 h-6" />
                </button>

                <button
                    onClick={onHistoryClick}
                    className=" text-gray-400 hover:text-white transition-colors"
                    aria-label="View history"
                >
                    <Clock className="w-6 h-6" />
                </button>
            </div>
        </header>
    );
};

export default Header;
