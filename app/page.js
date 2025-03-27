import Link from "next/link";

export default function Home() {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
            <h1 className="text-4xl font-bold">Welcome!</h1>
            <p className="text-gray-600 mt-2">This is the home page.</p>
            <div className="mt-6">
                <Link href="/auth" className="px-6 py-3 bg-blue-500 text-white rounded-lg shadow-lg hover:bg-blue-600 transition">
                    Get Started
                </Link>
            </div>
        </div>
    );
}
