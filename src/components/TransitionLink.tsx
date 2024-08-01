'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React from 'react'

const TransitionLink = ({ children, href, direction, ...props }: TransitionLinkProps) => {
    const router = useRouter();
    const waitTransition = async (duration: number): Promise<void> => {
        return new Promise((resolve) => setTimeout(resolve, duration))
    }

    const handleTransition = async (event: React.MouseEvent<HTMLAnchorElement>) => {
        event.preventDefault();
        slideDirection(true);
        await waitTransition(150);
        router.push(href);
        slideDirection(false);
        await waitTransition(150);
        resetClasses();
    }

    const slideDirection = (isStarting: boolean) => {
        const body = document.body;

        if (isStarting) {
            if (direction === 'left') {
                body.classList.add('slide-out-right');
            } else if (direction === 'right') {
                body.classList.add('slide-out-left');
            }
        } else {
            if (direction === 'left') {
                body.classList.replace('slide-out-right', 'slide-in-right');
            } else if (direction === 'right') {
                body.classList.replace('slide-out-left', 'slide-in-left');
            }
        }
    }


    const resetClasses = () => {
        const body = document.body;
        body?.classList.remove('slide-out-right');
        body?.classList.remove('slide-in-right');
        body?.classList.remove('slide-in-left');
        body?.classList.remove('slide-out-left');
    }

    return (
        <Link onClick={handleTransition} href={href} {...props}>{children}</Link>
    )
}

export default TransitionLink