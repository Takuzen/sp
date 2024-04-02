import Image from "next/image"

export default function AboutUs() {
    return (
        <main className="z-10 flex min-h-screen flex-col items-center justify-between px-5 py-5 gap-7 sm:gap-[50px] text-center">
            <div className="flex flex-col items-center">
                <Image
                src="/teegarden-logo.svg"
                alt="teegarden-logo-mobile"
                width={70}
                height={70}
                priority
                className="block sm:hidden"></Image>
                <Image
                src="/teegarden-logo.svg"
                width={100}
                height={100}
                alt="teegarden-logo"
                priority
                className="hidden sm:block"></Image>
                <p className="text-2xl sm:text-4xl font-bold">Teegarden Team</p>
            </div>
                <p className="text-xl sm:text-2xl font-bold text-[#ffc500]">Vision</p>
                <p className="text-xl sm:text-2xl font-black">Build and share spatial digital contents, more intuitively.</p>
                <p className="text-xl sm:text-2xl font-bold text-[#ffc500]">Mission</p>
                <p className="text-xl sm:text-2xl font-black">Provides the universal platform for personal spatial digital contents.</p>
                <p className="text-xl sm:text-2xl font-bold text-[#ffc500]">Core Value</p>
                <p className="text-xl sm:text-2xl font-black">People first.</p>
                <p className="text-xl sm:text-2xl font-black">Leverage technologies to build innovative humane product.</p>
                <p className="text-xl sm:text-2xl font-black">Make hands dirty.</p>
                <p className="text-xl sm:text-2xl font-black">Work passionately with love.</p>
                <p className="text-xl sm:text-2xl font-bold text-[#ffc500]">Member</p>
                
                <div className="flex gap-3 sm:gap-10">
                    <div className="flex flex-col items-center gap-3 width-[150px]">
                        <Image
                            src="/ttoh-icon.jpg"
                            width={100}
                            height={100}
                            alt="Ttoh Profile Image"
                            priority
                            className="rounded-full"></Image>
                        <p className="text-2xl font-bold">Takuzen Toh</p>
                        <p className="text-xl font-bold">Founder</p>
                    </div>
                    <div className="flex flex-col items-center gap-3 max-w-[150px] sm:max-w-none">
                        <Image
                                src="/person-circle-outline.svg"
                                width={87}
                                height={87}
                                alt="Tmatsuda Profile Image"
                                priority
                                className="rounded-full"></Image>
                        <p className="text-2xl font-bold">Takuya Matsuda</p>
                        <p className="text-xl font-bold">Developer</p>
                    </div>
                </div>
                <footer className="flex flex-col justify-center my-10">
                    <div className='self-center mt-4 sm:mt-10 z-10 mb-4 sm:mb-10'>
                    <p className="text-sm sm:text-lg font-serif self-center text-black">
                        © 2023 Teegarden
                    </p>
                    </div>
                </footer>
        </main>
    )
}