import React from 'react';
import '../styles/services.css'; // Import your specific CSS file for Services

// Define an array of service objects
const servicesData = [
  {
    id: 1,
    title: 'Architecture',
    description: 'Our architecture design services are centred on innovative and sustainable solutions that meet the unique needs of each client. We blend aesthetics with functionality to create structures that are not only visually stunning but also practical and environmentally friendly. From residential homes to commercial buildings, our architectural designs are tailored to reflect the vision and lifestyle of our clients.',
    image: '/images/Architect.jpg',
  },
  {
    id: 2,
    title: 'Interior Design',
    description: 'Our interior design services focus on creating spaces that are both functional and aesthetically pleasing. We work closely with clients to understand their preferences and design spaces that reflect their personality and style. Whether it\'s a residential project or a commercial space, we ensure that every detail enhances the overall ambiance and functionality of the space.',
    image: '/images/Interior.jpg',
  },
  {
    id: 3,
    title: 'Landscape Design',
    description: 'We believe that the exterior of a property should be as captivating as the interior. Our landscaping services encompass everything from initial design to installation and maintenance. We work with a variety of natural elements to craft beautiful gardens, patios, walkways, and outdoor living spaces that complement the architectural style of the property and enhance its overall appeal.',
    image: '/images/Lanscape.jpg',
  },
  {
    id: 4,
    title: 'Maintenance',
    description: 'Our maintenance services ensure that every project we complete remains in optimal condition. From regular inspections to seasonal upkeep, we provide comprehensive maintenance solutions that preserve the integrity and beauty of our architectural, interior, and landscaping designs.',
    image: '/images/Maintaince.jpeg',
  },
];

function Services() {
  return (
    <section id="services">
      <h2>Our Services</h2>
      <div className="services-container">
        {servicesData.map(service => (
          <div className="service" key={service.id}>
            <div className="service-image">
              <img src={service.image} alt={service.title} />
            </div>
            <div className="service-info">
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;
