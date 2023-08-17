import connectMongoDB from "@/libs/mongodb";
import Material from "@/models/material";
import { NextResponse } from "next/server";

export const GET = async () => {
  await connectMongoDB();
  const materials = await Material.find({});
  return NextResponse.json(materials);
};

export const POST = async (req) => {
  const { title, description } = await req.json();
  await connectMongoDB();
  await Material.create({ title, description });
  return NextResponse.json({ message: "Material Created" }, { status: 201 });
};

