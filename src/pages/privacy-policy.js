export default function PrivacyPolicy() {
    return (
        <main className="z-10 flex min-h-screen flex-col items-center justify-between px-5 py-5 gap-7 sm:gap-[50px] text-center">
            <div>
                <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    onClick={() => window.open('https://app.termly.io/document/privacy-policy/f46c7827-5480-4579-8bbe-825c95bb91c1', '_blank')}
                >
                    View Privacy Policy
                </button>
            </div>
            <footer className="flex flex-col justify-center my-10">
                <div className='self-center mt-4 sm:mt-10 z-10 mb-4 sm:mb-10'>
                    <p className="text-sm sm:text-lg font-serif self-center text-black">
                        © 2024 Teegarden
                    </p>
                </div>
            </footer>
        </main>
    )
}

