import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/src/app/lib/prisma";

type Params = { params: { id: string } };

// GET /api/patterns/[id] — fetch a single pattern
export async function GET(_req: NextRequest, { params }: Params) {
  try {
    const id = parseInt(params.id);

    const pattern = await prisma.pattern.findUnique({ where: { id } });

    if (!pattern) {
      return NextResponse.json({ error: "Pattern not found" }, { status: 404 });
    }

    return NextResponse.json(pattern);
  } catch (error) {
    console.error("[GET /api/patterns/[id]]", error);
    return NextResponse.json(
      { error: "Failed to fetch pattern" },
      { status: 500 },
    );
  }
}

// PATCH /api/patterns/[id] — update a pattern (partial update)
export async function PATCH(req: NextRequest, { params }: Params) {
  try {
    const id = parseInt(params.id);
    const body = await req.json();

    // If marking as completed, set completedAt automatically
    const extraFields: Record<string, unknown> = {};
    if (body.status === "completed") {
      extraFields.completedAt = new Date();
    }

    const updated = await prisma.pattern.update({
      where: { id },
      data: {
        ...body,
        ...extraFields,
        modifiedAt: new Date(),
      },
    });

    return NextResponse.json(updated);
  } catch (error: unknown) {
    console.error("[PATCH /api/patterns/[id]]", error);
    // Prisma throws P2025 when record not found
    if (
      typeof error === "object" &&
      error !== null &&
      "code" in error &&
      (error as { code: string }).code === "P2025"
    ) {
      return NextResponse.json({ error: "Pattern not found" }, { status: 404 });
    }
    return NextResponse.json(
      { error: "Failed to update pattern" },
      { status: 500 },
    );
  }
}

// DELETE /api/patterns/[id] — delete a pattern
export async function DELETE(_req: NextRequest, { params }: Params) {
  try {
    const id = parseInt(params.id);

    await prisma.pattern.delete({ where: { id } });

    return NextResponse.json({ message: "Pattern deleted" });
  } catch (error: unknown) {
    console.error("[DELETE /api/patterns/[id]]", error);
    if (
      typeof error === "object" &&
      error !== null &&
      "code" in error &&
      (error as { code: string }).code === "P2025"
    ) {
      return NextResponse.json({ error: "Pattern not found" }, { status: 404 });
    }
    return NextResponse.json(
      { error: "Failed to delete pattern" },
      { status: 500 },
    );
  }
}
