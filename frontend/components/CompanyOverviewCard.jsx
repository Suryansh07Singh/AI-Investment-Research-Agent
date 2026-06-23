export default function CompanyOverviewCard({ research }) {

    if (!research) return null;

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
                Company Overview
            </h2>

            <div className="space-y-4">

                <div>
                    <span className="font-bold text-gray-300">
                        Overview:
                    </span>
                    <p className="text-gray-400 mt-1">
                        {research.overview}
                    </p>
                </div>

                <div>
                    <span className="font-bold">
                        Industry:
                    </span>
                    <span className="ml-2 text-gray-400">
                        {research.industry}
                    </span>
                </div>

                <div>
                    <span className="font-bold">
                        CEO:
                    </span>
                    <span className="ml-2 text-gray-400">
                        {research.ceo}
                    </span>
                </div>

                <div>
                    <span className="font-bold">
                        Headquarters:
                    </span>
                    <span className="ml-2 text-gray-400">
                        {research.headquarters}
                    </span>
                </div>

            </div>

        </div>
    );
}