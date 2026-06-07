import connect from "@/lib/db";
import { PackageCategory } from "@/lib/models/PackageCategory";
import { defaultPackageCategories } from "@/data/defaults";
import { NextRequest, NextResponse } from "next/server";

// List all categories (sorted). Seeds the defaults the first time.
export const GET = async () => {
  try {
    await connect();

    let categories = await PackageCategory.find().sort({ order: 1, name: 1 });

    if (!categories || categories.length === 0) {
      await PackageCategory.insertMany(defaultPackageCategories);
      categories = await PackageCategory.find().sort({ order: 1, name: 1 });
    }

    return NextResponse.json(categories, { status: 200 });
  } catch (error: unknown) {
    return errorResponse(error);
  }
};

// Create a new category.
export const POST = async (req: NextRequest | Request) => {
  try {
    const body = await req.json();
    await connect();

    if (!body.key || !body.name) {
      return NextResponse.json(
        { message: "key and name are required" },
        { status: 400 }
      );
    }

    const created = await PackageCategory.create(body);
    return NextResponse.json(created, { status: 201 });
  } catch (error: unknown) {
    return errorResponse(error);
  }
};

// Update a category by id (?id=...).
export const PUT = async (req: NextRequest | Request) => {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");
    const body = await req.json();
    await connect();

    if (!id) {
      return NextResponse.json(
        { message: "id of category required" },
        { status: 400 }
      );
    }

    delete body._id;

    const updated = await PackageCategory.findByIdAndUpdate(id, body, {
      new: true,
    });

    if (!updated) {
      return NextResponse.json(
        { message: "category not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(updated, { status: 200 });
  } catch (error: unknown) {
    return errorResponse(error);
  }
};

// Delete a category by id (?id=...).
export const DELETE = async (req: NextRequest | Request) => {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");
    await connect();

    if (!id) {
      return NextResponse.json(
        { message: "id of category required" },
        { status: 400 }
      );
    }

    const deleted = await PackageCategory.findByIdAndDelete(id);

    if (!deleted) {
      return NextResponse.json(
        { message: "category not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(deleted, { status: 200 });
  } catch (error: unknown) {
    return errorResponse(error);
  }
};

function errorResponse(error: unknown) {
  if (error instanceof Error) {
    return NextResponse.json(
      {
        message: "something went wrong",
        errorName: error.name,
        errorMessage: error.message,
      },
      { status: 500 }
    );
  }
  return NextResponse.json({ message: "something went wrong" }, { status: 500 });
}
