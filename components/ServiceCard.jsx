const ServiceCard = ({ title, description, icon }) => (
  <div className="p-6 transition-all duration-300 ease-in-out rounded-lg shadow-lg bg-white/90 backdrop-blur-sm hover:scale-105 hover:bg-wisp-pink-600 hover:shadow-xl group">
    <div className="flex items-center gap-4 mb-4">
      <div className="p-3 rounded-full bg-wisp-pink-800 group-hover:bg-white">
        <div className="transition-colors duration-300 group-hover:text-wisp-pink-600">
          {icon}
        </div>
      </div>
      <h3 className="text-xl font-bold transition-colors duration-300 text-wisp-pink-800 group-hover:text-white">
        {title}
      </h3>
    </div>
    <p className="text-gray-600 transition-colors duration-300 group-hover:text-white/90">
      {description}
    </p>
  </div>
);

export default ServiceCard;