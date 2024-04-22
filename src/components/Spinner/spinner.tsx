import React from 'react';
import { LoadingOutlined } from '@ant-design/icons';
import { Spin } from 'antd';

export const Spinner: React.FC<{ size?: number, color?: string }> = ({ size, color }) => (
    <Spin indicator={<LoadingOutlined style={{ fontSize: `${size || 10}px`, color: `${color}` }} spin />} />
);
