import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Star, Calendar, Users, MapPin } from 'lucide-react'
import Image from "next/image";

export function PackageCard({
    package: pkg,
    onMoreDetails
}: {
    package: {
        image: string;
        title: string;
        type: string;
        rating: number;
        location: string;
        description: string;
        duration: number;
        groupSize: number;
        price: number;
    };
    onMoreDetails: (pkg: unknown) => void;
}) {
    return (
        <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 group">
            <div className="relative overflow-hidden">
                <Image
                    width={300}
                    height={300}
                    src={pkg.image}
                    alt={pkg.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <Badge className="absolute top-4 left-4 bg-blue-600">{pkg.type}</Badge>
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-2 py-1 flex items-center">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400 mr-1" />
                    <span className="text-sm font-medium">{pkg.rating}</span>
                </div>
            </div>

            <CardContent className="p-6">
                <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold group-hover:text-blue-600 transition-colors">
                        {pkg.title}
                    </h3>
                </div>

                <div className="flex items-center text-gray-600 mb-2">
                    <MapPin className="w-4 h-4 mr-1" />
                    <span className="text-sm">{pkg.location}</span>
                </div>

                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {pkg.description}
                </p>

                <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
                    <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        <span>{pkg.duration} days</span>
                    </div>
                    <div className="flex items-center">
                        <Users className="w-4 h-4 mr-1" />
                        <span>{pkg.groupSize} people</span>
                    </div>
                </div>

                <div className="flex items-center justify-between">
                    <div>
                        <span className="text-2xl font-bold text-blue-600">
                            ₹{pkg.price.toLocaleString('en-IN')}
                        </span>
                        <span className="text-gray-600 text-sm ml-1">per person</span>
                    </div>
                    <Button
                        onClick={() => onMoreDetails(pkg)}
                        className="bg-blue-600 hover:bg-blue-700"
                    >
                        View Details
                    </Button>
                </div>
            </CardContent>
        </Card>
    )
}