"use client";
import React from "react";
import Image from "next/image";

const location = [
  {
    id: "1",
    title: "ປະຕູໄຊ",
    description: "A bustling city that never sleeps.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMOTI6wnR1HfrZo1eRVr5PLFvmt-Ksm5a8Dg&s",
  },
  {
    id: "2",
    title: "ພະທາດຫຼວງວຽງຈັນ",
    description: "A serene place with beautiful landscapes.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMaI12kRqZIDL74rxNmD7zfcPIzEcd-yEppA&s",
  },
  {
    id: "3",
    title: "ຂົວມິດຕະພາບໄທ - ລາວ ແຫ່ງທີ 1",
    description: "A historical site with rich culture.",
    image:
      "https://kpl.gov.la/Media/Upload/News/Hot/2024/04/09/Lao%20Friendship.jpg",
  },
  {
    id: "4",
    title: "ຄອນພະເພັງ ເເຂວງ ຈຳປາສັກ",
    description: "A modern city with stunning architecture.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/a/af/Khone_Phapheng_Falls%2C_Si_Phan_Don%2C_Laos%2C_widest_waterfall_in_the_world.jpg",
  },
  {
    id: "5",
    title: "ຕາດກວາງຊີ",
    description: "A modern city with stunning architecture.",
    image:
      "https://dynamic-media.tacdn.com/media/photo-o/2f/1e/ce/3d/caption.jpg?w=800&h=600&s=1",
  },
  {
    id: "6",
    title: "ສະຖານທີ່ທ່ອງເທີ່ 6",
    description: "A modern city with stunning architecture.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRk0whOQxmxCUbd0DCQGdQukUgbh3JSBGNG6A&s",
  },
  {
    id: "7",
    title: "ສະຖານທີ່ທ່ອງເທີ່ 7",
    description: "A modern city with stunning architecture.",
    image:
      "https://lp-cms-production.imgix.net/2023-03/shutterstockRF_223697563.jpg",
  },
  {
    id: "8",
    title: "ສະຖານທີ່ທ່ອງເທີ່ 4",
    description: "A modern city with stunning architecture.",
    image:
      "https://kampatour.com/pic/tour/8df9724b-f873-4166-89e4-0cfacd6529f3.jpg",
  },
  {
    id: "9",
    title: "ສະຖານທີ່ທ່ອງເທີ່ 4",
    description: "A modern city with stunning architecture.",
    image:
      "https://kampatour.com/pic/tour/8df9724b-f873-4166-89e4-0cfacd6529f3.jpg",
  },
];

function PlaceCard() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
      {location.map((place) => (
        <div
          key={place.id}
          className="bg-white rounded-lg shadow-md overflow-hidden"
        >
          <Image
            src={place.image}
            alt={place.title}
            width={400}
            height={192}
            className="w-full h-48 object-cover"
            style={{ width: "auto" }}
            unoptimized
          />
          <div className="p-4">
            <h2 className="text-xl font-semibold text-gray-800">
              {place.title}
            </h2>
            <p className="text-gray-600 mt-2">{place.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default PlaceCard;
