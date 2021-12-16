import Card from "../components/Card";

export default function Home() {
    return (
        <div>

            <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
                <div className="flex flex-wrap items-center justify-around max-w-4xl mt-6 sm:w-full">
                    <Card title="1v1" description="Affronter quelqu'un en 1 contre 1 puissance 4." href="/onevone"/>
                    <Card title="Tournois" description="Créer un tournois puissance4 entre amis." href="/tournois"/>
                </div>
            </main>
        </div>
    )
}
