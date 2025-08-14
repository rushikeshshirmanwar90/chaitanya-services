import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import { Star, Calendar, Users, MapPin, Phone, Mail, X, Clock, DollarSign, CheckCircle } from 'lucide-react'
import { PackageDetailModalProps } from "@/types/packages"

export function PackageDetailModal({ package: pkg, isOpen, onClose }: PackageDetailModalProps) {
    const [activeTab, setActiveTab] = useState<string>("overview")

    if (!pkg) return null

    const handleBookNow = () => {
        // Handle booking logic here
        alert(`Booking initiated for ${pkg.title}`)
    }

    const handleInquiry = () => {
        // Handle inquiry logic here
        alert(`Inquiry sent for ${pkg.title}`)
    }

    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="max-w-5xl max-h-[95vh] overflow-y-auto custom-scrollbar">
                <DialogHeader className="sticky top-0 bg-white z-10 pb-4 border-b">
                    <div className="flex items-center justify-between">
                        <div>
                            <DialogTitle className="text-3xl font-bold text-gray-900">{pkg.title}</DialogTitle>
                            <div className="flex items-center mt-2 space-x-4">
                                <div className="flex items-center">
                                    <MapPin className="w-4 h-4 text-gray-500 mr-1" />
                                    <span className="text-gray-600">{pkg.location}</span>
                                </div>
                                <Badge variant="secondary" className="bg-blue-100 text-blue-700">
                                    {pkg.type}
                                </Badge>
                            </div>
                        </div>
                        <Button variant="ghost" size="icon" onClick={onClose} className="h-8 w-8">
                            <X className="w-4 h-4" />
                        </Button>
                    </div>
                </DialogHeader>

                <div className="space-y-8 pt-4">
                    {/* Hero Image and Quick Info */}
                    <div className="grid lg:grid-cols-3 gap-6">
                        <div className="lg:col-span-2">
                            <div className="relative">
                                <img
                                    src={pkg.image}
                                    alt={pkg.title}
                                    className="w-full h-80 object-cover rounded-xl shadow-lg"
                                />
                                <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm rounded-lg px-3 py-2 flex items-center shadow-md">
                                    <Star className="w-5 h-5 fill-yellow-400 text-yellow-400 mr-2" />
                                    <span className="font-bold text-lg">{pkg.rating}</span>
                                    <span className="text-gray-600 text-sm ml-1">({pkg.reviews} reviews)</span>
                                </div>
                            </div>
                        </div>

                        {/* Quick Info Card */}
                        <div className="lg:col-span-1">
                            <Card className="h-fit sticky top-24">
                                <CardContent className="p-6">
                                    <div className="text-center mb-6">
                                        <div className="text-4xl font-bold text-blue-600 mb-2">
                                            ₹{pkg.price.toLocaleString('en-IN')}
                                        </div>
                                        <p className="text-gray-600">per person</p>
                                        <p className="text-sm text-gray-500 mt-1">
                                            ₹{Math.round(pkg.price / pkg.duration).toLocaleString('en-IN')} per day
                                        </p>
                                    </div>

                                    <div className="space-y-4 mb-6">
                                        <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                                            <div className="flex items-center">
                                                <Calendar className="w-5 h-5 text-blue-600 mr-3" />
                                                <span className="text-gray-700">Duration</span>
                                            </div>
                                            <span className="font-semibold">{pkg.duration} days</span>
                                        </div>
                                        <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                                            <div className="flex items-center">
                                                <Users className="w-5 h-5 text-blue-600 mr-3" />
                                                <span className="text-gray-700">Group Size</span>
                                            </div>
                                            <span className="font-semibold">{pkg.groupSize}</span>
                                        </div>
                                        <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                                            <div className="flex items-center">
                                                <Clock className="w-5 h-5 text-blue-600 mr-3" />
                                                <span className="text-gray-700">Best Time</span>
                                            </div>
                                            <span className="font-semibold">Oct-Mar</span>
                                        </div>
                                    </div>

                                    <div className="space-y-3">
                                        <Button
                                            onClick={handleBookNow}
                                            className="w-full bg-blue-600 hover:bg-blue-700 text-lg py-6 font-semibold"
                                            size="lg"
                                        >
                                            Book Now
                                        </Button>
                                        <Button
                                            onClick={handleInquiry}
                                            variant="outline"
                                            className="w-full text-lg py-6 font-semibold border-blue-600 text-blue-600 hover:bg-blue-50"
                                            size="lg"
                                        >
                                            Send Inquiry
                                        </Button>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </div>

                    {/* Description */}
                    <div className="lg:col-span-2">
                        <Card>
                            <CardContent className="p-6">
                                <h3 className="text-2xl font-bold mb-4 text-gray-900">About This Package</h3>
                                <p className="text-gray-700 leading-relaxed text-lg">{pkg.description}</p>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Detailed Tabs */}
                    <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                        <TabsList className="grid w-full grid-cols-4 h-12">
                            <TabsTrigger value="itinerary" className="text-sm font-medium">Itinerary</TabsTrigger>
                            <TabsTrigger value="services" className="text-sm font-medium">What&apos;s Included</TabsTrigger>
                            <TabsTrigger value="highlights" className="text-sm font-medium">Highlights</TabsTrigger>
                            <TabsTrigger value="gallery" className="text-sm font-medium">Gallery</TabsTrigger>
                        </TabsList>

                        <TabsContent value="itinerary" className="mt-8">
                            <Card>
                                <CardContent className="p-6">
                                    <h3 className="text-2xl font-bold mb-6 text-gray-900">Detailed Itinerary</h3>
                                    <div className="space-y-6">
                                        {pkg.itinerary.map((day, index) => (
                                            <div key={index} className="relative">
                                                <div className="flex items-start">
                                                    <div className="flex-shrink-0 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg mr-6 shadow-lg">
                                                        {index + 1}
                                                    </div>
                                                    <div className="flex-grow">
                                                        <div className="bg-gradient-to-r from-blue-50 to-white p-6 rounded-lg border-l-4 border-blue-600 shadow-sm">
                                                            <h4 className="font-bold text-lg text-gray-900 mb-2">
                                                                Day {index + 1}
                                                            </h4>
                                                            <p className="text-gray-700 leading-relaxed">{day}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                {index < pkg.itinerary.length - 1 && (
                                                    <div className="absolute left-6 top-12 w-0.5 h-8 bg-gray-300"></div>
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>
                        </TabsContent>

                        <TabsContent value="services" className="mt-8">
                            <Card>
                                <CardContent className="p-6">
                                    <h3 className="text-2xl font-bold mb-6 text-gray-900">What&apos;s Included</h3>
                                    <div className="grid md:grid-cols-2 gap-4">
                                        {pkg.services.map((service, index) => (
                                            <div key={index} className="flex items-center p-4 bg-green-50 rounded-lg border border-green-200 hover:shadow-md transition-shadow">
                                                <CheckCircle className="w-6 h-6 text-green-600 mr-4 flex-shrink-0" />
                                                <span className="text-gray-800 font-medium">{service}</span>
                                            </div>
                                        ))}
                                    </div>

                                    <div className="mt-8 p-6 bg-red-50 rounded-lg border border-red-200">
                                        <h4 className="font-bold text-lg text-red-800 mb-3">Not Included</h4>
                                        <ul className="space-y-2 text-red-700">
                                            <li>• Personal expenses and shopping</li>
                                            <li>• Travel insurance</li>
                                            <li>• Tips and gratuities</li>
                                            <li>• Any items not mentioned in inclusions</li>
                                        </ul>
                                    </div>
                                </CardContent>
                            </Card>
                        </TabsContent>

                        <TabsContent value="highlights" className="mt-8">
                            <Card>
                                <CardContent className="p-6">
                                    <h3 className="text-2xl font-bold mb-6 text-gray-900">Package Highlights</h3>
                                    <div className="grid gap-4">
                                        {pkg.highlights.map((highlight, index) => (
                                            <div key={index} className="flex items-start p-4 bg-yellow-50 rounded-lg border border-yellow-200 hover:shadow-md transition-shadow">
                                                <Star className="w-6 h-6 text-yellow-600 mr-4 mt-1 flex-shrink-0" />
                                                <span className="text-gray-800 font-medium leading-relaxed">{highlight}</span>
                                            </div>
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>
                        </TabsContent>

                        <TabsContent value="gallery" className="mt-8">
                            <Card>
                                <CardContent className="p-6">
                                    <h3 className="text-2xl font-bold mb-6 text-gray-900">Photo Gallery</h3>
                                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                                        {/* Placeholder images - you can replace with actual gallery images */}
                                        {[1, 2, 3, 4, 5, 6].map((num) => (
                                            <div key={num} className="relative group overflow-hidden rounded-lg shadow-md">
                                                <img
                                                    src={pkg.image}
                                                    alt={`${pkg.title} - Image ${num}`}
                                                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                                                />
                                                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-opacity duration-300"></div>
                                            </div>
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>
                        </TabsContent>
                    </Tabs>

                    {/* Reviews Section */}
                    <Card>
                        <CardContent className="p-6">
                            <h3 className="text-2xl font-bold mb-6 text-gray-900">Customer Reviews</h3>
                            <div className="flex items-center mb-6">
                                <div className="text-5xl font-bold text-blue-600 mr-6">{pkg.rating}</div>
                                <div>
                                    <div className="flex items-center mb-2">
                                        {[1, 2, 3, 4, 5].map((star) => (
                                            <Star
                                                key={star}
                                                className={`w-6 h-6 ${star <= Math.floor(pkg.rating)
                                                    ? 'fill-yellow-400 text-yellow-400'
                                                    : 'text-gray-300'
                                                    }`}
                                            />
                                        ))}
                                    </div>
                                    <p className="text-gray-600">Based on {pkg.reviews} reviews</p>
                                </div>
                            </div>

                            {/* Sample reviews */}
                            <div className="space-y-4">
                                <div className="border-l-4 border-blue-600 pl-4 py-3 bg-gray-50 rounded-r-lg">
                                    <div className="flex items-center mb-2">
                                        <div className="flex">
                                            {[1, 2, 3, 4, 5].map((star) => (
                                                <Star key={star} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                                            ))}
                                        </div>
                                        <span className="ml-3 font-semibold text-gray-800">Amazing Experience!</span>
                                    </div>
                                    <p className="text-gray-700 italic">
                                        This package exceeded all expectations. The guides were knowledgeable and the accommodations were fantastic
                                    </p>
                                    <p className="text-sm text-gray-500 mt-2">- Priya S., Mumbai</p>
                                </div>

                                <div className="border-l-4 border-blue-600 pl-4 py-3 bg-gray-50 rounded-r-lg">
                                    <div className="flex items-center mb-2">
                                        <div className="flex">
                                            {[1, 2, 3, 4].map((star) => (
                                                <Star key={star} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                                            ))}
                                            <Star className="w-4 h-4 text-gray-300" />
                                        </div>
                                        <span className="ml-3 font-semibold text-gray-800">Great Value for Money</span>
                                    </div>
                                    <p className="text-gray-700 italic">
                                        Well organized trip with beautiful destinations. Would definitely recommend to families.
                                    </p>
                                    <p className="text-sm text-gray-500 mt-2">- Raj K., Delhi</p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Contact & Help Section */}
                    <Card className="bg-gradient-to-r from-blue-50 to-blue-100 border-blue-200">
                        <CardContent className="p-8">
                            <div className="text-center mb-6">
                                <h3 className="text-2xl font-bold text-gray-900 mb-2">Need Help Planning Your Trip?</h3>
                                <p className="text-gray-700">Our travel experts are here to assist you with any questions</p>
                            </div>

                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="flex items-center justify-center p-4 bg-white rounded-lg shadow-sm">
                                    <Phone className="w-6 h-6 text-blue-600 mr-3" />
                                    <div>
                                        <p className="font-semibold text-gray-800">Call Us</p>
                                        <p className="text-blue-600 font-bold">+91 98765 43210</p>
                                    </div>
                                </div>
                                <div className="flex items-center justify-center p-4 bg-white rounded-lg shadow-sm">
                                    <Mail className="w-6 h-6 text-blue-600 mr-3" />
                                    <div>
                                        <p className="font-semibold text-gray-800">Email Us</p>
                                        <p className="text-blue-600 font-bold">info@wanderlust.com</p>
                                    </div>
                                </div>
                            </div>

                            <div className="text-center mt-6">
                                <p className="text-sm text-gray-600">
                                    Available Mon-Sat: 9:00 AM - 8:00 PM | Response within 2 hours
                                </p>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </DialogContent>
        </Dialog>
    )
}