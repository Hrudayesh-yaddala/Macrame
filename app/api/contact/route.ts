import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    // Validate the data
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "All fields are required." },
        { status: 400 }
      );
    }

    // Store the data in the database
    const contact = await prisma.contact.create({
      data: { name, email, message },
    });

    return NextResponse.json(
      { message: "Contact saved successfully!", contact },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error saving contact:", error);
    return NextResponse.json(
      { error: "Failed to save contact details." },
      { status: 500 }
    );
  }
}
