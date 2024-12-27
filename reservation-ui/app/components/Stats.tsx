export function Stats() {
  const profileImages = [
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=64&h=64&fit=crop",
    "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=64&h=64&fit=crop",
    "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=64&h=64&fit=crop",
    "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=64&h=64&fit=crop",
  ];

  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">
      <div className="w-full md:w-auto flex items-center gap-4 bg-white rounded-[50px] px-6 md:px-8 py-3 md:py-4 shadow-sm">
        <div className="flex -space-x-3">
          {profileImages.map((src, i) => (
            <div
              key={i}
              className="w-8 md:w-10 h-8 md:h-10 rounded-full border-2 border-white relative overflow-hidden"
            >
              <img
                src={src}
                alt={`Customer ${i + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
          <div className="w-8 md:w-10 h-8 md:h-10 rounded-full border-2 border-white bg-purple-100 flex items-center justify-center text-purple-700 text-xs md:text-sm font-medium">
            +
          </div>
        </div>
        <div>
          <p className="text-lg md:text-xl font-bold">72k+ Happy</p>
          <p className="text-sm md:text-base text-gray-600">Customers</p>
        </div>
      </div>

      <div className="w-full md:w-auto flex items-center gap-4 bg-white rounded-[50px] px-6 md:px-8 py-3 md:py-4 shadow-sm">
        <div className="w-12 md:w-14 h-12 md:h-14 rounded-xl overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=96&h=96&fit=crop"
            alt="Property"
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <p className="text-lg md:text-xl font-bold">200+ New</p>
          <p className="text-sm md:text-base text-gray-600">Listings Everyday!</p>
        </div>
      </div>
    </div>
  );
}