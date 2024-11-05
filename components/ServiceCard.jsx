const ServiceCard = ({ title, description, icon }) => (
  <div className="p-6 transition-transform duration-300 rounded-lg shadow-lg bg-white/90 backdrop-blur-sm hover:scale-105">
    <div className="flex items-center gap-4 mb-4">
      <div className="p-3 rounded-full bg-wisp-pink-800">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-wisp-pink-800">{title}</h3>
    </div>
    <p className="text-gray-600">{description}</p>
  </div>
);

export default ServiceCard;