
import { getLoggedInUser } from '@/lib/actions/user.actions';
import { redirect } from 'next/navigation';
import React from 'react';

const Home = async () => {
    const user = await getLoggedInUser();
    if (!user) redirect('sign-in')
    return (
        <div>{user.name}</div>
    )
}

export default Home