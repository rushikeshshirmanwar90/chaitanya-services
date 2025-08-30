"use client"

import type React from "react"
import { useState } from "react"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Calendar, Phone, Mail, User } from "lucide-react"
import { generateWhatsAppMessage, generateLeadData, sendToWhatsApp } from "@/utils/whatsapp"
import type { BookingFormData } from "@/types"

interface TripBookingFormProps {
  isOpen: boolean
  onClose: () => void
  tripName: string
  categoryName: string
}

export default function TripBookingForm({ isOpen, onClose, tripName, categoryName }: TripBookingFormProps) {
  const [formData, setFormData] = useState<BookingFormData>({
    firstName: "",
    lastName: "",
    email: "",
    whatsappNumber: "",
    tripDuration: "",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const leadData = generateLeadData(formData, tripName, categoryName)
    const whatsappMessage = generateWhatsAppMessage(formData, tripName, categoryName)

    // Log the JSON data (you can send this to your database)
    console.log("Lead Data for Database:", leadData)

    // Send to WhatsApp using utility function
    sendToWhatsApp(whatsappMessage)

    // Close the form and reset
    onClose()
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      whatsappNumber: "",
      tripDuration: "",
    })
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-serif text-gray-900 flex items-center gap-2">
            <MapPin className="w-6 h-6 text-blue-600" />
            Book Your Trip
          </DialogTitle>
          <DialogDescription className="text-gray-600 font-sans">
            You&apos;re booking: <span className="font-semibold text-blue-600">{tripName}</span>
            <br />
            Category: <span className="font-semibold text-orange-600">{categoryName}</span>
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6 mt-6">
          {/* Name Fields */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="firstName" className="flex items-center gap-2 text-gray-700">
                <User className="w-4 h-4" />
                First Name
              </Label>
              <Input
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                required
                className="border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                placeholder="Enter your first name"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="lastName" className="flex items-center gap-2 text-gray-700">
                <User className="w-4 h-4" />
                Last Name
              </Label>
              <Input
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                required
                className="border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                placeholder="Enter your last name"
              />
            </div>
          </div>

          {/* Email */}
          <div className="space-y-2">
            <Label htmlFor="email" className="flex items-center gap-2 text-gray-700">
              <Mail className="w-4 h-4" />
              Email Address
            </Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              className="border-gray-300 focus:border-blue-500 focus:ring-blue-500"
              placeholder="your.email@example.com"
            />
          </div>

          {/* WhatsApp Number */}
          <div className="space-y-2">
            <Label htmlFor="whatsappNumber" className="flex items-center gap-2 text-gray-700">
              <Phone className="w-4 h-4" />
              WhatsApp Number
            </Label>
            <Input
              id="whatsappNumber"
              name="whatsappNumber"
              type="tel"
              value={formData.whatsappNumber}
              onChange={handleInputChange}
              required
              className="border-gray-300 focus:border-blue-500 focus:ring-blue-500"
              placeholder="+91 9876543210"
            />
          </div>



          {/* Trip Duration */}
          <div className="space-y-2">
            <Label htmlFor="tripDuration" className="flex items-center gap-2 text-gray-700">
              <Calendar className="w-4 h-4" />
              Desired Trip Duration
            </Label>
            <Input
              id="tripDuration"
              name="tripDuration"
              value={formData.tripDuration}
              onChange={handleInputChange}
              required
              className="border-gray-300 focus:border-blue-500 focus:ring-blue-500"
              placeholder="e.g., 4 days 3 nights"
            />
          </div>

          {/* Submit Button */}
          <div className="flex gap-3 pt-4">
            <Button type="button" variant="outline" onClick={onClose} className="flex-1 bg-transparent">
              Cancel
            </Button>
            <Button type="submit" className="flex-1 bg-blue-600 hover:bg-blue-700 text-white">
              Book via WhatsApp
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
}
