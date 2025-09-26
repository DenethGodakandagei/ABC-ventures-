import { NextResponse } from "next/server";
import { connectDB } from "@/libs/db";
import Meal from "@/models/Meal";

export async function GET(req: Request, { params }: { params: { id: string } }) {
  await connectDB();
  const meal = await Meal.findById(params.id);
  if (!meal) return NextResponse.json({ error: "Meal not found" }, { status: 404 });
  return NextResponse.json(meal);
}

export async function PUT(req: Request, { params }: { params: { id: string } }) {
  await connectDB();
  const body = await req.json();
  const meal = await Meal.findByIdAndUpdate(params.id, body, { new: true });
  if (!meal) return NextResponse.json({ error: "Meal not found" }, { status: 404 });
  return NextResponse.json(meal);
}

export async function DELETE(req: Request, { params }: { params: { id: string } }) {
  await connectDB();
  const meal = await Meal.findByIdAndDelete(params.id);
  if (!meal) return NextResponse.json({ error: "Meal not found" }, { status: 404 });
  return NextResponse.json({ message: "Meal deleted successfully" });
}
