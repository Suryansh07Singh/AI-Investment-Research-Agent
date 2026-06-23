export default function NewsCard({ news }) {

if (!news) return null;

return (
    <div className="
        bg-gray-900
        border
        border-gray-700
        rounded-2xl
        p-8
        shadow-lg
        transition-all
        duration-300
        hover:scale-[1.01]
        hover:border-blue-500
    ">

        <h2 className="text-3xl font-bold mb-6 text-blue-400">
            Recent News
        </h2>

        <div className="space-y-4">

            {news.news?.map((item, index) => (

                <div
                    key={index}
                    className="bg-gray-800 p-4 rounded-xl"
                >
                    <h3 className="font-semibold text-lg text-white">
                        {item.title}
                    </h3>

                    <p className="text-sm text-gray-400 mt-1">
                        {item.date}
                    </p>

                    <p className="text-gray-300 mt-2">
                        {item.description}
                    </p>
                </div>

            ))}

        </div>

    </div>
);


}
