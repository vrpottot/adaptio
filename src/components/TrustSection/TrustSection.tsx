import './TrustSection.css';

const TrustSection = () => {
  const awards = [
    {
      id: 1,
      title: 'Best Results',
      bannerColor: '#8B5CF6',
      image: 'https://adapty.io/assets/uploads/2025/03/g2-best_results-winter_2025.svg',
      url: 'https://www.g2.com/products/adapty-io/reviews'
    },
    {
      id: 2,
      title: 'High Performer',
      bannerColor: '#F97316',
      image: 'https://adapty.io/assets/uploads/2025/03/g2-high_performer-winter_2025.svg',
      url: 'https://www.g2.com/products/adapty-io/reviews'
    },
    {
      id: 3,
      title: 'Best Usability',
      bannerColor: '#EAB308',
      image: 'https://adapty.io/assets/uploads/2025/03/g2-best_usability-winter_2025.svg',
      url: 'https://www.g2.com/products/adapty-io/reviews'
    },
    {
      id: 4,
      title: 'Best Relationship',
      bannerColor: '#14B8A6',
      image: 'https://adapty.io/assets/uploads/2025/03/g2-best_relationship-winter_2025.svg',
      url: 'https://www.g2.com/products/adapty-io/reviews'
    },
    {
      id: 5,
      title: 'Most Implementable',
      bannerColor: '#3B82F6',
      image: 'https://adapty.io/assets/uploads/2025/03/g2-most_implementable-winter_2025.svg',
      url: 'https://www.g2.com/products/adapty-io/reviews'
    }
  ];

  return (
    <section className="trust-section">
      <div className="container">
        <h2 className="trust-section__title">
          Доверие к удобству и обслуживанию клиентов
        </h2>

        <div className="trust-section__reviews">
          <div className="trust-section__stars">
            {[...Array(5)].map((_, index) => (
              <svg
                key={index}
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                className="trust-section__star"
              >
                <path
                  d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
                  fill="#6B7280"
                />
              </svg>
            ))}
          </div>
          <a
            href="https://www.g2.com/products/adapty-io/reviews"
            target="_blank"
            rel="noopener noreferrer"
            className="trust-section__reviews-link"
          >
            На основе 500+ отзывов
          </a>
        </div>

        <div className="trust-section__awards">
          {awards.map((award) => (
            <a
              key={award.id}
              href={award.url}
              target="_blank"
              rel="noopener noreferrer"
              className="trust-section__award"
            >
              <img
                src={award.image}
                alt={award.title}
                className="trust-section__award-img"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustSection;

