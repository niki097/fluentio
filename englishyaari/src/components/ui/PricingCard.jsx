import { Star as FaStar, Check as FaCheck } from 'lucide-react';

const PricingCard = () => {
    return (
        <div className="w-[300px] bg-white rounded-3xl border-[3px] border-[#2D1C55] p-6 flex flex-col items-center">
            {/* Label */}
            <span className="bg-yellow-400 px-4 py-1 rounded-full text-sm font-medium">
                Starter Pack
            </span>

            {/* Title Section */}
            <div className="text-center mt-4 mb-6">
                <p className="text-[#2D1C55] text-lg mb-1">
                    Elevate your English learning experience with
                </p>
                <h3 className="text-[#2D1C55] text-xl font-bold flex items-center justify-center gap-1">
                    Speak Up Premium
                    <FaStar className="text-yellow-400" />
                </h3>
            </div>

            {/* Divider */}
            <div className="w-full h-[1px] bg-gray-200 mb-6" />

            {/* Features List */}
            <ul className="w-full space-y-3 mb-6">
                <li className="flex items-center gap-3">
                    <span className="rounded-full bg-yellow-400 p-0.5">
                        <FaCheck className="w-3 h-3 text-[#2D1C55]" />
                    </span>
                    <span className="text-[#2D1C55] text-sm">
                        Learning Content
                    </span>
                </li>
                <li className="flex items-center gap-3">
                    <span className="rounded-full bg-yellow-400 p-0.5">
                        <FaCheck className="w-3 h-3 text-[#2D1C55]" />
                    </span>
                    <span className="text-[#2D1C55] text-sm">
                        Recorded Classes
                    </span>
                </li>
                <li className="flex items-center gap-3">
                    <span className="rounded-full bg-yellow-400 p-0.5">
                        <FaCheck className="w-3 h-3 text-[#2D1C55]" />
                    </span>
                    <span className="text-[#2D1C55] text-sm">
                        Live Mentor Sessions
                    </span>
                </li>
                <li className="flex items-center gap-3">
                    <span className="rounded-full bg-yellow-400 p-0.5">
                        <FaCheck className="w-3 h-3 text-[#2D1C55]" />
                    </span>
                    <span className="text-[#2D1C55] text-sm">Goal Tracker</span>
                </li>
                <li className="flex items-center gap-3">
                    <span className="rounded-full bg-yellow-400 p-0.5">
                        <FaCheck className="w-3 h-3 text-[#2D1C55]" />
                    </span>
                    <span className="text-[#2D1C55] text-sm">Chat Support</span>
                </li>
            </ul>

            {/* Divider */}
            <div className="w-full h-[1px] bg-gray-200 mb-6" />

            {/* Price */}
            <div className="text-[#2D1C55] text-3xl font-bold mb-6">$12.41</div>

            {/* Button */}
            <button className="w-full bg-yellow-400 hover:bg-yellow-500 text-[#2D1C55] font-medium py-3 rounded-xl transition-colors">
                Book Now
            </button>
        </div>
    );
};

export default PricingCard;
