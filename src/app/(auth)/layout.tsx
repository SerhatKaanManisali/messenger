import Intro from "@/components/intro";
import Image from "next/image";

export default function AuthLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <main className='flex flex-col items-center justify-center w-full min-h-screen gap-6 py-6'>
            <Intro />
            <header className='flex items-center gap-3'>
                <Image src='/icons/logo.svg' alt='Logo' width={70} height={70} priority />
                <h1 className='font-semibold text-3xl'>DABubble</h1>
            </header>
            {children}
        </main>
    )
}