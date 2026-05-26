import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/src/app/lib/prisma";

// GET /api/patterns — fetch all patterns (with optional filters)
export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const status = searchParams.get("status");
    const category = searchParams.get("category");

    const patterns = await prisma.pattern.findMany({
      where: {
        ...(status && { status }),
        ...(category && { category }),
      },
      orderBy: { createdAt: "desc" },
    });

    return NextResponse.json(patterns);
  } catch (error) {
    console.error("[GET /api/patterns]", error);
    return NextResponse.json(
      { error: "Failed to fetch patterns" },
      { status: 500 },
    );
  }
}

// POST /api/patterns — create a new pattern
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const {
      name,
      description,
      pattern,
      status,
      totalRows,
      currentRow,
      hookSize,
      category,
      imageUrl,
      sourceUrl,
      notes,
    } = body;

    if (!name || !pattern) {
      return NextResponse.json(
        { error: "name and pattern are required" },
        { status: 400 },
      );
    }

    const newPattern = await prisma.pattern.create({
      data: {
        name,
        description,
        pattern,
        status: status ?? "active",
        totalRows,
        currentRow: currentRow ?? 0,
        hookSize,
        category,
        imageUrl,
        sourceUrl,
        notes,
      },
    });

    return NextResponse.json(newPattern, { status: 201 });
  } catch (error) {
    console.error("[POST /api/patterns]", error);
    return NextResponse.json(
      { error: "Failed to create pattern" },
      { status: 500 },
    );
  }
}
