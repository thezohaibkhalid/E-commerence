import React from "react";
import { IoMdShare } from "react-icons/io";
import { FaExchangeAlt } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
const products = [
  {
    id: 1,
    name: "Syltherine",
    description: "Stylish cafe chair",
    price: 2500000,
    originalPrice: 3500000,
    image:
      "https://s3-alpha-sig.figma.com/img/6028/dfe0/3d98b27fb98ee49958d7089f10d39dfe?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=f0HnapRnEjvmkPH3c4EgXEDC0TjK6EFX9Ap6PfuoihrbiWi8RyNdU~8RmRpgQxzH6z50wRY72m2dZTfxL~kd6T6VDSZGjMdg5Ew4ki73HayZ4ZoY35pf~VgDpi3Xj5ZRXhR58EJle8IsWyf3c258B8BbTlyqJ~KAJC~iZTralfoiKpAQl5EYXSSpNhx2fEXjHXe3aNLMGGbmxlfaKg9mpGHR6IuK2XmB2d1kJFfyyuOE7l4kXZiu~NARI9s2mKSqFWtgHDUrpQTxI~7cZssQsV2EHiI80gxWw-4pQryFc669sKZ59u7wBCIbgc3HH8aPhHtxpPCgam0WitVoMiBE8g__",
    discount: 30,
    isNew: false,
  },
  {
    id: 2,
    name: "Leviosa",
    description: "Modern dining chair",
    price: 2500000,
    originalPrice: null,
    image:
      "https://s3-alpha-sig.figma.com/img/8d34/199d/e77ede2f478b2f26210bd264978981f6?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=EufMf6RZVas6GRo1bKqILPl9nmSbZfD0JFGEzbIx~O1Ptja-EGelYShJMfwskR29PFmqF2ys8uB-W2xPrKl-iXfnw1xFviDU3vC1pi2sb3rroNTeTyuPX4nYNDkjOqH8D2CgCNZGIbU3GiVuP8LCC6FcXuQ4q2D44Wq1WyrBaK~rJpSGnMhkhuA9xgV4fvej7Is9fNcf7DeTISz3FV6MuOtrX7aytLK5fTtBvhBSxTwkS1N1wToXIavkCyPyy91KZhMuSBXs-Y1QdXCGMsS-ZPV0dXiNqbvSE~bF8i-1HZAlRBD8PWPvuPOneaMhDqXi2KCyZbB5S5D3tX5OgbjTyg__",
    discount: null,
    isNew: true,
  },
  {
    id: 3,
    name: "Lolito",
    description: "Luxurious lounge chair",
    price: 4500000,
    originalPrice: 5000000,
    image:
      "https://s3-alpha-sig.figma.com/img/b609/6926/ea43a4c55f9e28aa3592f17ff47a4303?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=adY19hfh~K5oxpC-vh3YTQpuzxUtfQ2mWcFSMqkKzjM2D9y8xECtmZuD9N0m7fd0blGYGQ0S86TwV9oROVFUeebgMwMyom45axGz3-GaoOTkbLTP4x1ZR4pN0Q93PXESsnmjerrxJUmnoLZrgXlM4moafaGa0JJfro8jmrOzftFY8KVqyuEnFUD8pIas7Zl4XnCndlpZeDCDlF5MZph51mncPwW~~AMPntz6MSXHgx5rwDIoQ3LGX5EbKnxCQpPn2yLurhN4uoKjOsWO8dXdSnXPf2p5BBl3Wpl94kftotTNYBIIVFssb7luDwDACCnn4iIRmdU-hI0RXQvHdveuZw__",
    discount: 10,
    isNew: false,
  },
  {
    id: 4,
    name: "",
    description: "Ergonomic office chair",
    price: 3500000,
    originalPrice: null,
    image:
      "https://s3-alpha-sig.figma.com/img/50f3/12dc/a7c05024ab4e27374edb12195b6559e2?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jn3Fpz0QgE8paBZsmqAL7LDspU6gVesqwVZ6CgLAchysBiSUpnfgBOdXawMM9myP8sq0miu0kRIMC8iv-P4zfsDF1ZQaplSLWB8RwnHOd4wlWMhku7kQr9qK4IZFhROT05jYBcd4ledos2uLZCX-~VINrDfXI3kYrPU~Rn-zNt2RIArZx2zeE3-8gV~mAWSVwMiUzQ50I2BCHYJ7Nbuop1QcOq5H1PI5mYPtpQ1834Op3atyk2UT0N~hWUAFY888CXmx8eI7Hya6nloxerYawq3lkNMGxvNK5dBzMkgrljbdeuCKXZ1KWFL7G2lMZqwAuzJrv7psypbq4ueSkvRhLQ__",
    discount: 15,
    isNew: false,
  },
  {
    id: 5,
    name: "Comfify",
    description: "Comfortable sofa chair",
    price: 5500000,
    originalPrice: null,
    image:
      "https://s3-alpha-sig.figma.com/img/1f73/e563/4a5dbc0c29efbae1beca6ab40dd9b598?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=g5WIoe~p317suY-0jLxVhxDMCcleJZLU-U6e8m3ZmnVqk5DRSG6J1KYfh7HWy7tg8R259dgbULyUBvNxuAahBJG37qrsProPMbZpOAyfQBkaGGHMiAJBPVPVDTmNMYpsCXqK0o4bL5aeXqhElTcdPHESICMEyxQO2aM-RvvX1LHtjs~YHqxsi4i-EBrCaJjWnd1M9TP3Rw8768Sorgvt~Rn9CQrJKyfku5IxjTTpS9~q~pcdpF8jGJSE4cJBOgCu8aH7GbJmJU9yeT79PCYxNCEGaWk4TOzZr~l4vpkr3dqXerVLhl0Ilrtk07IkUj7SKZ2O9BTtwRsIblLPyDDw1g__",
    discount: null,
    isNew: true,
  },
  {
    id: 6,
    name: "Eleganza",
    description: "Elegant dining chair",
    price: 2200000,
    originalPrice: 2800000,
    image:
      "https://s3-alpha-sig.figma.com/img/2084/99f3/7c62fb49f7d4a1a6a5dc5959b40150ed?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=KGgPoxLDFIWiK-XNxN8kl8mLRyW3lDeR8u1iOgAvZNtUakPNswq~E0BXv7sXxV7Ljan8tJa6IZ69OrtSA~hOeJmZpui-KFn7AwzvmjzLdRzySOygzXdj-9yMjf4LZKbUV5dNuy~EhyG3SsCZbqs4fW83vZZuL1IyWw29tAQoyW-V~e8YpgfpEcXraPAptC7GCgcRVqeagwVeVX22Ua9deUH6iFxMGjNv0eza52naGRU8xBWGWeiucer7mBlPGO-bU2MA-bkmTISuiQExFV4uEEISkD8FzlJIhJbFbv9V8J4sIkSYNC9QrhIKivJePLsbZIiyTdxVNiBYNe7DApIzMw__",
    discount: 20,
    isNew: false,
  },
  {
    id: 7,
    name: "Chroma Chair",
    description: "Colorful accent chair",
    price: 1800000,
    originalPrice: 2200000,
    image:
      "https://s3-alpha-sig.figma.com/img/4491/a0ea/43eebd52ea72d60650f31030ec4bf7e6?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bjuNvS-wVLHpB9yWmdA~i25KQKEXDXrPuyaFeaOTkgbSGXZgD6bMB1FjoEw14HScy9M4XzjWnooRCbDvsVVMvEE0w3oz6OGrJemr4S3IvOG7uLhi5shr6mcDLsnDpVEmXNXiOrGp7gm3SKkNILQCpBdnIKudUuttyAD1PvKCQRtqZ2ZcKVGHCpT5s1QHv5znKeQ7N5AoOW1BmKd5AoKk~nfaF4O~O-BCpvf2hopyYrv-9bxXtGMdbNpQlPH034gIFcg1vi4vt8JFV8lWjCkzyslYVrNuWPgXZZKuDQbg0XyQ~xOHk3jFETNEZgSrSBPRwrVVYDxrCJHtxru-Lsrhaw__",
    discount: 18,
    isNew: false,
  },
  {
    id: 8,
    name: "Nova Recliner",
    description: "Relaxing recliner chair",
    price: 7000000,
    originalPrice: 8000000,
    image:
      "https://s3-alpha-sig.figma.com/img/4491/a0ea/43eebd52ea72d60650f31030ec4bf7e6?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bjuNvS-wVLHpB9yWmdA~i25KQKEXDXrPuyaFeaOTkgbSGXZgD6bMB1FjoEw14HScy9M4XzjWnooRCbDvsVVMvEE0w3oz6OGrJemr4S3IvOG7uLhi5shr6mcDLsnDpVEmXNXiOrGp7gm3SKkNILQCpBdnIKudUuttyAD1PvKCQRtqZ2ZcKVGHCpT5s1QHv5znKeQ7N5AoOW1BmKd5AoKk~nfaF4O~O-BCpvf2hopyYrv-9bxXtGMdbNpQlPH034gIFcg1vi4vt8JFV8lWjCkzyslYVrNuWPgXZZKuDQbg0XyQ~xOHk3jFETNEZgSrSBPRwrVVYDxrCJHtxru-Lsrhaw__",
    discount: 12,
    isNew: false,
  },
];

export default function OurProducts() {
  return (
<>
  <h1 className="font-bold lg:text-[40px] md:text-3xl text-2xl text-center pt-12 pb-4 text-gray-900">
    Our Products
  </h1>
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-4 max-w-7xl mx-auto">
    {products.map((product) => (
      <div
        key={product.id}
        className="relative border border-gray-200 shadow-lg overflow-hidden group"
      >
        {/* Image Section */}
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-[301px] object-cover"
        />
        {/* Discount/New Badges */}
        {product.discount && (
          <div className="absolute top-2 right-3 bg-red-500 text-white text-sm w-10 h-10 flex items-center justify-center rounded-full">
            -{product.discount}%
          </div>
        )}
        {product.isNew && (
          <div className="absolute top-2 right-3 bg-green-500 text-white text-sm w-10 h-10 flex items-center justify-center rounded-full">
            New
          </div>
        )}

        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <div className="flex flex-col justify-center items-center h-full">
            <button className="bg-white text-[#B88E2F] px-14 py-3 mb-4 rounded-md transform -translate-x-full group-hover:translate-x-0 transition-transform duration-1000 ease-in-out ">
              Add to Cart
            </button>
            <div className="flex space-x-6 text-white transform -translate-x-full group-hover:translate-x-0 transition-transform duration-600 ease-in-out">
              <div className="flex items-center gap-1 cursor-pointer hover:text-yellow-400">
                <IoMdShare />
                <span>Share</span>
              </div>
              <div className="flex items-center gap-1 cursor-pointer hover:text-yellow-400">
                <FaExchangeAlt />
                <span>Compare</span>
              </div>
              <div className="flex items-center gap-1 cursor-pointer hover:text-yellow-400">
                <FaRegHeart />
                <span>Like</span>
              </div>
            </div>
          </div>
        </div>

        {/* Product Details */}
        <div className="p-4 h-36">
          <h3 className="font-semibold text-2xl">{product.name}</h3>
          <p className="text-gray-500 font-medium pt-2">
            {product.description}
          </p>
          <div className="mt-2">
            <span className="text-gray-700 font-semibold text-xl">
              Rp {product.price.toLocaleString()}
            </span>
            {product.originalPrice && (
              <span className="text-gray-300 line-through ml-2">
                Rp {product.originalPrice.toLocaleString()}
              </span>
            )}
          </div>
        </div>
      </div>
    ))}
  </div>

  {/* Show More Button */}
  <div className="text-center pt-4">
    <button className="py-4 px-20 border-2 border-yellow-600 text-base font-semibold text-yellow-600 bg-white transition-all duration-300 ease-in-out hover:bg-yellow-600 hover:text-white hover:scale-105 hover:shadow-yellow-500/70 hover:shadow-2xl active:scale-95 active:shadow-inner focus:outline-none">
      Show More
    </button>
  </div>
</>

  );
}
