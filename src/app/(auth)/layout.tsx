import Intro from "@/components/intro";

export default function AuthLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <main>
            <Intro />
            {children}
        </main>
    );
}