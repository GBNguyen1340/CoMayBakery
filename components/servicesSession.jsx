import { services } from "@/app/lib/data"

const ServicesSession = () => {
  return (
    <div className="relative mb-24">
        <div className="container px-4 mx-auto">
          <h2 className="mb-8 text-3xl font-bold text-center text-gray-800">Bánh cho ngày bình thường, ngày đặc biệt, và ngày rảnh rỗi</h2>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service, index) => (
              <div
                key={index}
                className="p-4 transition duration-300 bg-white rounded-lg shadow-md hover:shadow-lg"
              >
                <div className="overflow-hidden rounded-lg">
                  <img
                    src={service.imageUrl}
                    alt={service.title}
                    className="object-cover w-full transition-transform duration-300 transform h-60 hover:scale-110"
                  />
                </div>
                <h3 className="mt-4 text-xl font-semibold text-center text-gray-700">
                  {service.title}
                </h3>
                <p className="text-center text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
  )
}

export default ServicesSession