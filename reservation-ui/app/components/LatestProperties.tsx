"use client";

import { Bath, Bed, Heart } from "lucide-react";
import Image from "next/image";

interface PropertyCard {
  id: number;
  image: string;
  price: number;
  title: string;
  address: string;
  beds: number;
  baths: number;
  badge: {
    text: string;
    type: "popular" | "new" | "discounted";
  };
}

const properties: PropertyCard[] = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&h=600&fit=crop",
    price: 5970,
    title: "Tranquil Haven in the Woods",
    address: "103 Wright Court, Buren, WA 98168",
    beds: 4,
    baths: 3,
    badge: { text: "Popular", type: "popular" }
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&h=600&fit=crop",
    price: 1970,
    title: "Serene Retreat by the Lake",
    address: "1964 Jehovah Drive, VA 22408",
    beds: 3,
    baths: 2,
    badge: { text: "New Listing", type: "new" }
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop",
    price: 3450,
    title: "Charming Cottage in the Meadow",
    address: "150B Centennial Farm Road, Harlan, 51537",
    beds: 4,
    baths: 4,
    badge: { text: "Discounted Price", type: "discounted" }
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop",
    price: 2389,
    title: "Grand Estate on the Hilltop",
    address: "103 Wright Court, Buren, WA 98168",
    beds: 4,
    baths: 3,
    badge: { text: "Popular", type: "popular" }
  }
];

function PropertyBadge({ type, text }: PropertyCard["badge"]) {
  const getBadgeColors = () => {
    switch (type) {
      case "popular":
        return "bg-red-100 text-red-600";
      case "new":
        return "bg-blue-100 text-blue-600";
      case "discounted":
        return "bg-green-100 text-green-600";
    }
  };

  return (
    <div className={`absolute top-4 left-4 px-3 py-1 rounded-full text-sm font-medium ${getBadgeColors()}`}>
      {text}
    </div>
  );
}

export function LatestProperties() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <div className="md:hidden">
        <h3 className="text-sm uppercase tracking-wide text-purple-700 mb-2">CHECKOUT OUR NEW</h3>
        <h2 className="text-xl font-bold mb-2">Latest Listed Properties</h2>
        <p className="text-gray-600 text-sm mb-6">
          Donec porttitor euismod dignissim. Nullam a lacinia ipsum, nec dignissim purus.
        </p>
        <div className="flex gap-2 mb-6">
          <button className="px-4 py-2 rounded-full bg-gray-100 text-gray-600 text-sm">
            All
          </button>
          <button className="px-4 py-2 rounded-full bg-purple-700 text-white text-sm">
            Sell
          </button>
          <button className="px-4 py-2 rounded-full bg-gray-100 text-gray-600 text-sm">
            Rent
          </button>
        </div>
      </div>

      <div className="hidden md:flex justify-between items-center mb-8">
        <div>
          <h3 className="text-purple-700 font-medium mb-2">CHECKOUT OUR NEW</h3>
          <h2 className="text-3xl font-bold">Latest Listed Properties</h2>
          <p className="text-gray-600 mt-2">
            Donec porttitor euismod dignissim. Nullam a lacinia ipsum, nec dignissim purus.
          </p>
        </div>

        <div className="flex gap-3">
          <button className="px-6 py-2 rounded-full border-2 border-purple-700 text-purple-700 hover:bg-purple-50 transition">
            All
          </button>
          <button className="px-6 py-2 rounded-full bg-purple-700 text-white hover:bg-purple-800 transition">
            Sell
          </button>
          <button className="px-6 py-2 rounded-full border-2 border-purple-700 text-purple-700 hover:bg-purple-50 transition">
            Rent
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {properties.map((property) => (
          <div key={property.id} className="bg-white rounded-3xl overflow-hidden shadow-lg">
            <div className="relative h-48 md:h-56">
              <Image
                src={property.image}
                alt={property.title}
                fill
                className="object-cover"
              />
              <PropertyBadge {...property.badge} />
              <button className="md:hidden absolute top-4 right-4 w-8 h-8 bg-white rounded-full flex items-center justify-center">
                <Heart className="w-5 h-5 text-gray-600" />
              </button>
            </div>

            <div className="p-4 md:p-5">
              <div className="mb-4">
                <h3 className="text-xl md:text-2xl font-bold mb-1">$ {property.price}</h3>
                <h4 className="font-semibold text-gray-900 mb-1">{property.title}</h4>
                <p className="text-gray-500 text-sm">{property.address}</p>
              </div>

              <div className="flex items-center gap-4 text-gray-600 text-sm">
                <div className="flex items-center gap-1">
                  <Bed className="w-4 h-4" />
                  <span>{property.beds} Beds</span>
                </div>
                <div className="flex items-center gap-1">
                  <Bath className="w-4 h-4" />
                  <span>{property.baths} Bath</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="md:hidden mt-8 flex justify-center">
        <button className="px-6 py-2 rounded-full border-2 border-purple-700 text-purple-700">
          View more properties
        </button>
      </div>
    </div>
  );
}