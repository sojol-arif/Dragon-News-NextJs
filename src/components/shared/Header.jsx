import React from 'react';
import Image from 'next/image';
import logo from '@/assets/logo.png'
import Link from 'next/link';

const formatDate = (date) => {
  return new Date(date).toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
};

const Header = () => {
    return (
        <div className='py-8 space-y-2 text-center'>
            <Link href={'/'}><Image src={logo} alt='logo dragon news' className='mx-auto'/></Link>
            <p className='txt-[18px]'>Journalism Without Fear or Favour</p>
            <p className='font-medium text-[20px]'>{formatDate(new Date())}</p>
        </div>
    );
};

export default Header;