import connect from "@/lib/db";
import { Review } from "@/lib/models/Review";
import { defaultReviews } from "@/data/defaults";
import { NextRequest, NextResponse } from "next/server";

// List all reviews (sorted). Seeds the defaults the first time.
export const GET = async () => {
  try {
    await connect();

    let reviews = await Review.find().sort({ order: 1, createdAt: 1 });

    if (!reviews || reviews.length === 0) {
      await Review.insertMany(
        defaultReviews.map((r, i) => ({ ...r, order: i }))
      );
      reviews = await Review.find().sort({ order: 1, createdAt: 1 });
    }

    return NextResponse.json(reviews, { status: 200 });
  } catch (error: unknown) {
    return errorResponse(error);
  }
};

// Create a new review.
export const POST = async (req: NextRequest | Request) => {
  try {
    const body = await req.json();
    await connect();

    if (!body.name) {
      return NextResponse.json(
        { message: "name is required" },
        { status: 400 }
      );
    }

    const created = await Review.create(body);
    return NextResponse.json(created, { status: 201 });
  } catch (error: unknown) {
    return errorResponse(error);
  }
};

// Update a review by id (?id=...).
export const PUT = async (req: NextRequest | Request) => {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");
    const body = await req.json();
    await connect();

    if (!id) {
      return NextResponse.json(
        { message: "id of review required" },
        { status: 400 }
      );
    }

    delete body._id;

    const updated = await Review.findByIdAndUpdate(id, body, { new: true });

    if (!updated) {
      return NextResponse.json(
        { message: "review not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(updated, { status: 200 });
  } catch (error: unknown) {
    return errorResponse(error);
  }
};

// Delete a review by id (?id=...).
export const DELETE = async (req: NextRequest | Request) => {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");
    await connect();

    if (!id) {
      return NextResponse.json(
        { message: "id of review required" },
        { status: 400 }
      );
    }

    const deleted = await Review.findByIdAndDelete(id);

    if (!deleted) {
      return NextResponse.json(
        { message: "review not found" },
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
