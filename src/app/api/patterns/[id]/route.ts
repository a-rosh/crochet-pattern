import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/src/app/lib/prisma";

type Params = { params: { id: string } };

// GET /api/patterns/:id
export async function GET(_req: NextRequest, { params }: Params) {
  try {
    const pattern = await prisma.pattern.findUnique({
      where: { id: Number(params.id) },
    });

    if (!pattern)
      return NextResponse.json({ error: "Pattern not found" }, { status: 404 });

    return NextResponse.json(pattern);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch pattern" },
      { status: 500 },
    );
  }
}

// PATCH /api/patterns/:id
export async function PATCH(req: NextRequest, { params }: Params) {
  try {
    const body = await req.json();

    const updated = await prisma.pattern.update({
      where: { id: Number(params.id) },
      data: {
        ...body,
        modifiedAt: new Date(),
      },
    });

    return NextResponse.json(updated);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to update pattern" },
      { status: 500 },
    );
  }
}

// DELETE /api/patterns/:id
export async function DELETE(_req: NextRequest, { params }: Params) {
  try {
    await prisma.pattern.delete({ where: { id: Number(params.id) } });
    return NextResponse.json({ message: "Pattern deleted" });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to delete pattern" },
      { status: 500 },
    );
  }
}
