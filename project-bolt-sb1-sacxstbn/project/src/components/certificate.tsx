import * as React from 'react';

const Certificate: React.FC = () => {
  const [selectedImage, setSelectedImage] = React.useState<string | null>(null);

  const certificates = [
    {
      id: 1,
      title: 'Nptel Certification in IOT',
      issuer: 'SWAYAM',
      date: 'March 2025',
      image: '/photos/iotcertificate.jpg',
    },
    {
      id: 2,
      title: 'Mastering Data Structure and Algorithms',
      issuer: 'Udemy',
      date: 'January 2025',
      image: '/photos/dsa_udemy.jpg',
    },
    {
      id: 3,
      title: 'Game Development with Unity',
      issuer: 'CipherSchools',
      date: 'December 2024',
      image: '/photos/gamed.jpg',
    },
  ];

  return (
    <section id="certificates" className="py-20 bg-gray-50 dark:bg-gray-800">
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          onClick={() => setSelectedImage(null)} // Close overlay when clicking outside
        >
          <div
            className="relative bg-white dark:bg-gray-900 p-4 rounded-lg shadow-lg"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the image container
          >
            <img
              src={selectedImage}
              alt="Selected Certificate"
              className="max-w-full max-h-96 rounded-lg"
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-2 right-2 text-white bg-red-500 rounded-full p-2"
            >
              Close
            </button>
          </div>
        </div>
      )}
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-800 dark:text-white">
            Certifications
          </h2>
          <p className="text-center text-gray-600 dark:text-gray-300 mb-12">
            A showcase of my professional certifications and achievements.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {certificates.map((certificate) => (
              <div
                key={certificate.id}
                className="bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-lg transform transition-all duration-75 hover:-translate-y-2 hover:shadow-inner"
                style={{
                  transition: 'transform 0.3s ease-in-out, opacity 0.3s ease-in-out',
                  opacity: selectedImage === certificate.image ? 0.5 : 1,
                }}
              >
                <img
                  src={certificate.image}
                  alt={certificate.title}
                  className="w-full h-48 object-cover cursor-pointer transition-all duration-500 hover:scale-105"
                  onClick={() => {
                    setSelectedImage(certificate.image);
                    const overlay = document.querySelector('.fixed');
                    if (overlay) {
                      overlay.classList.add('animate-fadeIn');
                    }
                  }} // Open overlay on click with effect
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                    {certificate.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Issued by: {certificate.issuer}
                  </p>
                  <p className="text-gray-600 dark:text-gray-300">
                    Date: {certificate.date}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certificate;