'use client'

import React from 'react';
import Image from 'next/image';
import useAvatar from '@/assets/user.png';
import Link from 'next/link';
import NavLink from '@/components/shared/NavLink';
import { authClient } from '@/lib/auth-client';

const Navbar = () => {
    const { data: session, isPending } = authClient.useSession();
    console.log(session?.user, 'session user');
    const userM = session?.user;

    return (
        <div className='flex justify-between max-w-[1150px] px-5 mx-auto gap-4 mt-6'>
            <div></div>
            <ul className='flex justify-between items-center text-gray-700 gap-4'>
                <li>
                    <NavLink href={'/'}>Home</NavLink>
                </li>
                <li>
                    <NavLink href={'/about'}>About</NavLink>
                </li>
                <li>
                    <NavLink href={'/career'} className={'text-yellow-500'}>Career</NavLink>
                </li>
            </ul>
            <div className='flex items-center gap-2'>
                {isPending ? (
                    <span className="loading loading-spinner loading-xl"></span>
                ) : userM ? (
                    <div className='flex items-center gap-2'>
                        <h2>{userM?.name}</h2>
                        <div className='h-[30px] overflow-hidden'>
                            <Image src={userM?.image || useAvatar} alt='Use Avatar' width={30} height={30} className='rounded-full h-[30px] object-cover overflow-hidden'></Image>
                        </div>
                        <button className='btn bg-purple-500 text-white' onClick={async()=>await authClient.signOut()}>
                            Logout
                        </button>
                    </div>
                ) : (

                    <button button className='bg-purple-500 btn text-white'>
                        <Link href={'/login'}> Login</Link>
                    </button>
                )}
            </div>
        </div >
    );
};

export default Navbar;