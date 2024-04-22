'use client'
import React from 'react';
import { DownOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Divider, Dropdown, Space } from 'antd';
import Link from 'next/link';
import Image from 'next/image';

import Logo from '@/assets/images/logo.jpg'
const items: MenuProps['items'] = [
    {
        key: '1',
        type: 'group',
        label: <span className='font-bold uppercase'>software</span>,

        children: [
            {
                key: '1-1',
                label: "Desktop",
            },
            {
                key: '1-2',
                label: 'Mobile',

            },
            {
                key: '1-3',
                label: 'Tablet',
            },
            {
                type: 'group',
                label: <span className=''> <Divider /></span>,
            },

            {
                type: 'group',
                label: <span className='font-bold uppercase'>Hardware</span>,
            },
            {
                key: '1-4',
                label: "Arduino",
            },
            {
                key: '1-5',
                label: 'Rasobery PI',
            },
            {
                key: '1-6',
                label: 'Vo Core',
            },
            {
                key: '1-7',
                label: 'Banana PI'
            }
        ],

    },
    {
        key: '2',
        type: 'group',
        label: <span className='font-bold uppercase'>Nano-Tech</span>,
        children: [
            {
                key: '2-1',
                label: "AFM",
            },
            {
                key: '2-2',
                label: 'STM',
            },
            {
                key: '2-3',
                label: 'Nano-Tubes',
            },
            {
                key: '2-4',
                label: "Nano-Wires",
            },
            {
                key: '2-5',
                label: 'Materials',
            },
        ],
    },
    {
        key: '3',
        type: 'group',
        label: <span className='font-bold uppercase'>Saas</span>,
        children: [
            {
                key: '3-1',
                label: "On-Demand",
            },
            {
                key: '3-2',
                label: 'No-Software',
            },
            {
                key: '3-3',
                label: 'Cloud Computing',
            },

        ],
    },
    {
        key: '4',
        type: 'group',
        label: <span className='font-bold uppercase'>Server-Side</span>,
        children: [
            {
                key: '4-1',
                label: "PHP",
            },
            {
                key: '4-2',
                label: 'java',
            },
            {
                key: '4-3',
                label: 'Python',
            },
            {
                key: '4-4',
                label: "Ruby",
            },
            {
                key: '4-5',
                label: 'ColdFusion',
            },
            {
                key: '4-6',
                label: 'AST.NET',
            },
            {
                key: '4-7',
                label: 'Go',
            },
            {
                key: '4-8',
                label: 'Perl',
            },
            {
                key: '4-9',
                label: 'Lasso',
            },


        ],
    },

];
const nav = ["home", "about", "contact"]
const Header: React.FC = () => (
    <>
        <div className="container  mx-auto flex flex-row justify-around sticky items-center">
            <Image width={100} height={100} src={Logo} alt='logo' />
            <nav className='flex justify-center items-center'>
                {nav.map((nav: string, index: number) => (
                    <Link href="" className='uppercase px-3 text-[14px] py-3 hover:bg-black hover:text-white'>{nav}</Link>
                ))}

                <Dropdown menu={{ items, selectable: true }} placement='bottom' >
                    <Link href="" onClick={(e) => e.preventDefault()}>
                        <Space className='uppercase text-[14px] px-3 py-3 hover:bg-black hover:text-white'>
                            Category
                            <DownOutlined size={14} />
                        </Space>
                    </Link>
                </Dropdown>
            </nav>
        </div>
        <Divider className='my-0' />
    </>

);

export default Header;