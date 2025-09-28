import { NextResponse } from "next/server";
import { connectDB } from "@/libs/db";
import Hotel from "@/models/Hotel";

// GET one hotel by ID
export async function GET(req: Request, { params }: { params: { id: string } }) {
  await connectDB();
  const hotel = await Hotel.findById(params.id);
  if (!hotel) return NextResponse.json({ error: "Hotel not found" }, { status: 404 });
  return NextResponse.json(hotel);
}

// UPDATE hotel
export async function PUT(req: Request, { params }: { params: { id: string } }) {
  await connectDB();
  const body = await req.json();
  const updatedHotel = await Hotel.findByIdAndUpdate(params.id, body, { new: true });
  return NextResponse.json(updatedHotel);
}

// DELETE hotel
export async function DELETE(req: Request, { params }: { params: { id: string } }) {
  await connectDB();
  await Hotel.findByIdAndDelete(params.id);
  return NextResponse.json({ message: "Hotel deleted successfully" });
}
