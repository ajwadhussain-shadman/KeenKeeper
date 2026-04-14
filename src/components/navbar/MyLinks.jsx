import React from 'react';
import { NavLink } from 'react-router';

const MyLinks = ({to,children,classname}) => {
    return (
        <NavLink to={to} className={({isActive})=>
        ` p-3 ${classname}  ${isActive ?'font-semibold bg-[#244D3F] text-white rounded-sm':'font-medium text-[#64748B] bg-white'} `}>
            {children}
        </NavLink>
    );
};

export default MyLinks;