import connect from "@/lib/db";
import { SiteContent } from "@/lib/models/SiteContent";
import { defaultSiteContent } from "@/data/defaults";
import { NextRequest, NextResponse } from "next/server";

// Always return the singleton content doc. If none exists yet, seed it from the
// default content so the admin and the public site have something to show.
export const GET = async () => {
  try {
    await connect();

    let content = await SiteContent.findOne({ key: "main" });

    if (!content) {
      content = await SiteContent.create({
        key: "main",
        ...defaultSiteContent,
      });
    }

    return NextResponse.json(content, { status: 200 });
  } catch (error: unknown) {
    return errorResponse(error);
  }
};

// Update the singleton content doc (upsert).
export const PUT = async (req: NextRequest | Request) => {
  try {
    const body = await req.json();
    await connect();

    // Never let the client change the key.
    delete body.key;
    delete body._id;

    const updated = await SiteContent.findOneAndUpdate(
      { key: "main" },
      { $set: body },
      { new: true, upsert: true, setDefaultsOnInsert: true }
    );

    return NextResponse.json(updated, { status: 200 });
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
