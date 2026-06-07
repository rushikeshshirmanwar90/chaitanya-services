import { model, models, Schema } from "mongoose";

// Singleton document holding all the editable text/content sections of the
// public site. We use a fixed `key` ("main") so there is only ever one doc.

const NavLinkSchema = new Schema(
  {
    label: { type: String, default: "" },
    href: { type: String, default: "" },
  },
  { _id: false }
);

const StatisticSchema = new Schema(
  {
    value: { type: String, default: "" },
    label: { type: String, default: "" },
  },
  { _id: false }
);

const ServiceItemSchema = new Schema(
  {
    icon: { type: String, default: "MapPin" },
    title: { type: String, default: "" },
    description: { type: String, default: "" },
  },
  { _id: false }
);

const SiteContentSchema = new Schema(
  {
    key: { type: String, default: "main", unique: true },

    navbar: {
      logoText: { type: String, default: "" },
      links: { type: [NavLinkSchema], default: [] },
    },

    hero: {
      title: { type: String, default: "" },
      subtitle: { type: String, default: "" },
      backgroundImage: { type: String, default: "" },
      buttonText: { type: String, default: "" },
      buttonLink: { type: String, default: "" },
    },

    about: {
      heading: { type: String, default: "" },
      paragraph1: { type: String, default: "" },
      paragraph2: { type: String, default: "" },
      image: { type: String, default: "" },
      statistics: { type: [StatisticSchema], default: [] },
    },

    packagesHeader: {
      titleLine1: { type: String, default: "" },
      titleHighlight: { type: String, default: "" },
      subtitle: { type: String, default: "" },
    },

    services: {
      title: { type: String, default: "" },
      subtitle: { type: String, default: "" },
      items: { type: [ServiceItemSchema], default: [] },
    },

    contact: {
      title: { type: String, default: "" },
      subtitle: { type: String, default: "" },
      phone: { type: String, default: "" },
      email: { type: String, default: "" },
      address: { type: String, default: "" },
      openingHours: { type: [String], default: [] },
      facebookUrl: { type: String, default: "" },
      termsLink: { type: String, default: "" },
      privacyLink: { type: String, default: "" },
    },

    footer: {
      companyName: { type: String, default: "" },
      description: { type: String, default: "" },
      copyrightYear: { type: String, default: "" },
      quickLinks: { type: [NavLinkSchema], default: [] },
      destinations: { type: [NavLinkSchema], default: [] },
    },
  },
  { timestamps: true }
);

export const SiteContent =
  models.SiteContent || model("SiteContent", SiteContentSchema);
