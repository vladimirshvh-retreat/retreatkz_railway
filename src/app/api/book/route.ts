import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { name, email, phone, message } = body;

        if (!name || !email) {
            return NextResponse.json(
                { error: "Name and email are required" },
                { status: 400 }
            );
        }

        const booking = await prisma.booking.create({
            data: {
                name,
                email,
                phone,
                message,
            },
        });

        return NextResponse.json(booking, { status: 201 });
    } catch (error) {
        console.error("Error creating booking:", error);
        return NextResponse.json(
            { error: "Failed to create booking" },
            { status: 500 }
        );
    }
}
