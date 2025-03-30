
import { Card } from "../components/card";
import PageWrapper from "@/components/PageWrapper";
import Header from "../components/Header"
export function EventsPage() {

    return (
        <PageWrapper title="Events" className="">
            <Header />
            <div className="bg-black text-white w-full min-h-screen justify-center flex flex-col items-center relative px-10">
                <div className="text-3xl p-5 poppins w-full flex flex-col items-center backdrop-blur-lg border-2 border-red-600/50 rounded-full mt-1">
                    <p>Past Events 🎉</p>
                </div>
                <div className="w-full h-full py-10 flex flex-wrap justify-center gap-10">
                    <Card title="Hackblocks 1.0" link={"/events/hackblocks"} />
                    <Card title="Campus Carnival 2.0" link={"/events/carnival"} />
                    <Card title="Pixel To Pitch" link={"/events/p2p"} />
                    <Card title="UXelerate" link={"/events/uxelerate"} />
                </div>
            </div>
        </PageWrapper>
    )
}
