import connect from "@/lib/db";
import { Leads } from "@/lib/models/Leads";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (req: NextRequest | Request) => {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");
    await connect();

    if (id) {
      const lead = await Leads.findById(id);

      if (lead) {
        return NextResponse.json(lead, { status: 200 });
      } else {
        return NextResponse.json(
          { message: "Lead not found" },
          { status: 404 }
        );
      }
    } else {
      const leads = await Leads.find();
      if (leads) {
        return NextResponse.json(leads, { status: 200 });
      } else {
        return NextResponse.json(
          {
            message: "no lead found",
          },
          { status: 404 }
        );
      }
    }
  } catch (error: unknown) {
    if (error instanceof Error) {
      return NextResponse.json(
        {
          message: "something went wrong",
          errorName: error.name,
          errorMessage: error.message,
          errorCause: error.cause,
        },
        { status: 500 }
      );
    } else {
      return NextResponse.json(
        {
          message: "something went wrong",
        },
        { status: 500 }
      );
    }
  }
};

export const POST = async (req: NextRequest | Request) => {
  try {
    const body = await req.json();

    connect();

    const newLead = new Leads(body);
    newLead.save();

    if (newLead) {
      return NextResponse.json(newLead, { status: 200 });
    } else {
      return NextResponse.json(
        { message: "something went wrong, can't able to add lead" },
        { status: 404 }
      );
    }
  } catch (error: unknown) {
    if (error instanceof Error) {
      return NextResponse.json(
        {
          message: "something went wrong",
          errorName: error.name,
          errorMessage: error.message,
          errorCause: error.cause,
        },
        { status: 500 }
      );
    } else {
      return NextResponse.json(
        {
          message: "something went wrong",
        },
        { status: 500 }
      );
    }
  }
};

export const PUT = async (req: NextRequest | Request) => {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");
    const body = await req.json();

    connect();

    if (!id) {
      return NextResponse.json(
        {
          message: "id of lead required",
        },
        { status: 404 }
      );
    }

    const updatedLead = await Leads.findByIdAndUpdate(id, body, { new: true });

    if (updatedLead) {
      return NextResponse.json(updatedLead, { status: 200 });
    } else {
      return NextResponse.json(
        { message: "can't able to update lead" },
        { status: 404 }
      );
    }
  } catch (error: unknown) {
    if (error instanceof Error) {
      return NextResponse.json(
        {
          message: "something went wrong",
          errorName: error.name,
          errorMessage: error.message,
          errorCause: error.cause,
        },
        { status: 500 }
      );
    } else {
      return NextResponse.json(
        {
          message: "something went wrong",
        },
        { status: 500 }
      );
    }
  }
};

export const DELETE = async (req: NextRequest | Request) => {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");

    if (!id) {
      return NextResponse.json(
        {
          message: "id of lead required",
        },
        { status: 404 }
      );
    }

    const deletedLead = await Leads.findByIdAndDelete(id);

    if (deletedLead) {
      return NextResponse.json(deletedLead, { status: 200 });
    } else {
      return NextResponse.json(
        {
          message: "can't delete the lead",
        },
        { status: 404 }
      );
    }

    await connect();
  } catch (error: unknown) {
    if (error instanceof Error) {
      return NextResponse.json(
        {
          message: "something went wrong",
          errorName: error.name,
          errorMessage: error.message,
          errorCause: error.cause,
        },
        { status: 500 }
      );
    } else {
      return NextResponse.json(
        {
          message: "something went wrong",
        },
        { status: 500 }
      );
    }
  }
};
