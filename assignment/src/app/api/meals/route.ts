import { NextResponse } from "next/server";
import { connectDB } from "@/libs/db";
import Meal from "@/models/Meal";

export async function POST(req: Request) {
  try {
    await connectDB();
    const body = await req.json();
    const meal = await Meal.create(body);
    return NextResponse.json(meal, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: "Failed to create meal" }, { status: 500 });
  }
}

export async function GET() {
  try {
    await connectDB();
    const meals = await Meal.find();
    return NextResponse.json(meals, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch meals" }, { status: 500 });
  }
}
