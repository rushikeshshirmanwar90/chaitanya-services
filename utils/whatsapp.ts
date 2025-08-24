import type { BookingFormData, LeadData } from "@/types";

export const generateWhatsAppMessage = (
  formData: BookingFormData,
  tripName: string,
  categoryName: string
): string => {
  return `Hello! I'm interested in booking a trip.

*Trip Details:*
- Package: ${tripName}
- Category: ${categoryName}
- Duration: ${formData.tripDuration}
- Desired Location: ${formData.desiredLocation}

*Contact Information:*
- Name: ${formData.firstName} ${formData.lastName}
- Email: ${formData.email}
- WhatsApp: ${formData.whatsappNumber}

Please provide more details about this package. Thank you!`;
};

export const generateLeadData = (
  formData: BookingFormData,
  tripName: string,
  categoryName: string
): LeadData => {
  return {
    name: `${formData.firstName} ${formData.lastName}`,
    phoneNumber: Number.parseInt(formData.whatsappNumber),
    packageCategory: categoryName,
    packageName: tripName,
  };
};

export const sendToWhatsApp = (message: string, phoneNumber = "9764444110") => {
  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
  window.open(whatsappUrl, "_blank");
};
