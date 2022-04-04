import React from 'react';
import CustomLink from '../CustomLink/CustomLink';

const Header = () => {
    return (
        <div className='flex justify-between p-6 items-center h-16 bg-cyan-300'>

            <div>
            <CustomLink to='/'><h3>Shop-corner</h3></CustomLink>
            </div>
            
            <div className='flex  ml-9'>
            <CustomLink className='mx-4' to='/home'>HOME</CustomLink>
            <CustomLink className='mx-4' to='/reviews'>REVIEWS</CustomLink>
            <CustomLink className='mx-4'  to='/dashboard'>DASHBOARD</CustomLink>
            <CustomLink className='mx-4' to='/blogs'>BLOGS</CustomLink>
            <CustomLink className='mx-4' to='/about'>ABOUT</CustomLink>
            </div>
        </div>
    );
};

export default Header;