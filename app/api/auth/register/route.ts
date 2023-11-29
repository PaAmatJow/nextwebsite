import { NextRequest, NextResponse } from "next/server";
import bcrypt from 'bcryptjs'
import connect from "@/app/utils/db";
import User from "@/app/models/User";

export const POST = async (request: NextRequest) => {
  const {name, email, password} = await request.json();

  await connect();

  const hashedPassword = await bcrypt.hash(password, 5)

  const newUser = new User({
    name, 
    email,
    password: hashedPassword,
  })

  try {
    await newUser.save()
    return new NextResponse('User has been created', {status: 201})
  } catch (error) {
    if (error instanceof Error) {
			return new NextResponse(error.message, {
				status: 500,
			});
		}
		return new NextResponse('An unknown error occurred', {
			status: 500,
		});
  }

}