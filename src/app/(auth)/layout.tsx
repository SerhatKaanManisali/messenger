import Intro from "@/components/Intro";
import Image from "next/image";

export default function AuthLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <main className='flex flex-col items-center justify-center w-full h-screen gap-6'>
            <Intro />
            <header className='flex items-center gap-3'>
                <Image src='/icons/logo.svg' alt='Logo' width={70} height={70} priority />
                <h1 className='font-semibold text-4xl'>DABubble</h1>
            </header>
            {children}
        </main>
    )
}