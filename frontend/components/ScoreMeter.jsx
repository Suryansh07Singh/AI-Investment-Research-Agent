export default function ScoreMeter({ score }) {

    return (

        <div>

            <div className="flex justify-between mb-3">

                <span className="font-bold text-xl">
                    Investment Score
                </span>

                <span className="text-3xl text-blue-400 font-bold">
                    {score}/10
                </span>

            </div>

            <div className="w-full bg-gray-800 rounded-full h-4">

                <div

                    className="
                    bg-gradient-to-r
                    from-green-400
                    via-blue-500
                    to-cyan-400
                    h-4
                    rounded-full
                    transition-all
                    duration-700
                    "

                    style={{
                        width: `${score * 10}%`
                    }}

                />

            </div>

        </div>

    );

}