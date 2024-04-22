'use client'
import React, { useState } from 'react';
import { Button, Modal } from 'antd';

interface ModalBoxProps {
    buttonText: string;
    title: string;
    children: React.ReactNode;
}

export const ModalBox: React.FC<ModalBoxProps> = ({ buttonText, title, children }) => {
    const [modalOpen, setModalOpen] = useState(false);

    return (
        <>
            <br />
            <Button type="primary" onClick={() => setModalOpen(true)}>
                {buttonText}
            </Button>
            <Modal
                title={title}
                centered
                visible={modalOpen}
                onOk={() => setModalOpen(false)}
                onCancel={() => setModalOpen(false)}
            >
                {children}
            </Modal>
        </>
    );
};

