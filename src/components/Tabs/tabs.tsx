'use client'
import React from 'react';
import { Tabs } from 'antd';
import TabPane from 'antd/es/tabs/TabPane';

interface TabProps {
    name: string[];
    tabData?: React.ReactNode[][];
}

export const Tab: React.FC<TabProps> = ({ name, tabData }) => {
    return (
        <>
            <Tabs className='container mx-auto w-full border' tabPosition='left'>
                {name.map((label, index) => (
                    <TabPane tab={label} key={String(index + 1)}>
                        {tabData?.[index]}
                    </TabPane>
                ))}
            </Tabs>
        </>
    );
};

// use the any where like this
// inside the function
// const tabData = [
//     [<Header />],
//     [<div>Content for Tab 2</div>, <div>More content for Tab 2</div>],
//     [<div>Content for Tab 3</div>, <div>More content for Tab 3</div>]
//   ];

// inside component
// <Tab name={['Tab 1', 'Tab 2', 'Tab 3']} tabData={tabData} /> 
