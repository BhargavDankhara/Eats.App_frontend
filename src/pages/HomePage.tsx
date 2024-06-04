import landingImage from "../assets/landing.png";
import appDownlwoadImg from "../assets/appDownload.png";


export default function HomePage() {
    return (
        <div className='flex flex-col gap-12'>
            <div className="md:px-32 bg-white rounded-lg shadow-md py-8 flex flex-col gap-5 text-center -mt-16">
                <h1 className="text-5xl font-bold tracking-tight text-orange-600">
                    Tuck into a takeway today
                </h1>
                <span className="text-xl">Food is just a click away!</span>
            </div>
            <div className="grid md:grid-cols-2 gap-5">
                <img src={landingImage} alt="mob priv" />
                <div className="flex flex-col items-center justify-center gap-4 text-center">
                    <span className="font-bold text-3xl tracking-tight">
                        Takeaway even faster!!
                    </span>
                    <span >
                        Download the Eats App fro faster ordering and personalized recommendations
                    </span>
                    <img src={appDownlwoadImg} alt="store" />
                </div>
            </div>
        </div>
    )
}

