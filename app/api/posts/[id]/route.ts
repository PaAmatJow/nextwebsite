import { NextRequest, NextResponse } from 'next/server';
import connect from '@/app/utils/db';
import Post from '@/app/models/Post';

interface Params {
	id: string;
}

export const GET = async (request: NextRequest, { params }: { params: Params }) => {
	const { id } = params;

	try {
		await connect();
		const posts = await Post.findById(id);
		return new NextResponse(JSON.stringify(posts), { status: 200 });
	} catch (error) {
		return new NextResponse('Database Error', { status: 500 });
	}
};

export const DELETE = async (request: NextRequest, { params }: { params: Params }) => {
	const { id } = params;

	try {
		await connect();
		await Post.findByIdAndDelete(id)
		return new NextResponse('Post has been deleted', { status: 200 });
	} catch (error) {
		return new NextResponse('Database Error', { status: 500 });
	}
};
