import { NextResponse } from 'next/server';

export const handler = async (req, res) => {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        console.log(response)

        if (!response.ok) {
            throw new Error('Failed to fetch data');
        }

        const data = await response.json();

        return NextResponse.json(data);
    } catch (error) {
        console.error('Error fetching data:', error);
        return NextResponse.error(new Error('Internal Server Error'));
    }
};
