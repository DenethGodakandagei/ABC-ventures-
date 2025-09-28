// app/api/hotels/route.ts
import { NextResponse } from "next/server";
import { connectDB } from "@/libs/db";
import Hotel from "@/models/Hotel";

// GET all hotels
export async function GET() {
  await connectDB();
  const hotels = await Hotel.find();
  return NextResponse.json(hotels);
}

// POST create a hotel
export async function POST(req: Request) {
  try {
    await connectDB();
    const body = await req.json();
    const newHotel = await Hotel.create(body);
    return NextResponse.json(newHotel, { status: 201 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}
