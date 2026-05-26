import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/src/app/lib/prisma";

// GET /api/patterns
export async function GET() {
  try {
    const patterns = await prisma.pattern.findMany({
      orderBy: { createdAt: "desc" },
    });
    console.log("patterns", patterns);
    return NextResponse.json(patterns);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch patterns" },
      { status: 500 },
    );
  }
}

// POST /api/patterns
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const {
      name,
      description,
      pattern,
      totalRows,
      hookSize,
      category,
      imageUrl,
      sourceUrl,
      notes,
    } = body;

    if (!name || !pattern || !totalRows || !category) {
      return NextResponse.json(
        { error: "name, pattern, totalRows and category are required" },
        { status: 400 },
      );
    }

    const newPattern = await prisma.pattern.create({
      data: {
        name,
        description,
        pattern,
        totalRows,
        hookSize,
        category,
        imageUrl,
        sourceUrl,
        notes,
      },
    });

    return NextResponse.json(newPattern, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to create pattern" },
      { status: 500 },
    );
  }
}
