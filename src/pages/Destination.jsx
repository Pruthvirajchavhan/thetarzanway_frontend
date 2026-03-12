import PlaceCard from "../components/PlaceCard";

const Destination = () => {
    return (
        <div>
            <h1 className="text-6xl py-10 font-bold text-center">
                Explore Destination
            </h1>
            <div className="flex flex-col items-center justify-center p-10">
                <div className="w-full max-w-md bg-white p-2 rounded-lg shadow-lg flex items-center gap-2">
                    <div className="pl-3 text-gray-400">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                            />
                        </svg>
                    </div>

                    <input
                        type="text"
                        placeholder="Search anything..."
                        className="w-full p-3 outline-none text-gray-700 placeholder-gray-400 bg-transparent"
                    />

                    <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-md transition duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                        Search
                    </button>
                </div>
            </div>
            <div className="flex items-center justify-center gap-6 flex-wrap">
                <PlaceCard />
                <PlaceCard />
                <PlaceCard />
                <PlaceCard />
                <PlaceCard />
                <PlaceCard />
                <PlaceCard />
                <PlaceCard />
                <PlaceCard />
                <PlaceCard />
                <PlaceCard />
                <PlaceCard />
            </div>
        </div>
    );
};

export default Destination;
