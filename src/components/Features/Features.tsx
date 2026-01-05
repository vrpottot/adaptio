import { useState } from 'react';
import './Features.css';

interface FeatureCard {
  id: string;
  title: string;
  image: string;
  link: string;
  features: string[];
}

const Features = () => {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  const featureCards: FeatureCard[] = [
    {
      id: 'developers',
      title: 'Для разработчиков',
      image: 'https://ext.same-assets.com/1155376611/402537502.webp',
      link: '/for-developers/',
      features: [
        'Подписки SDK',
        'Сбережение на возвратах',
        'Удалённая конфигурация',
        'Резервные пейволлы'
      ]
    },
    {
      id: 'marketers',
      title: 'Для маркетологов',
      image: 'https://ext.same-assets.com/1155376611/3034448623.webp',
      link: '/for-marketers/',
      features: [
        'A/B тестирование',
        'Конструктор без кода',
        'Локализация',
        'Ориентирование'
      ]
    },
    {
      id: 'owners',
      title: 'Для владельцев',
      image: 'https://ext.same-assets.com/1155376611/854854316.webp',
      link: '/for-app-owners/',
      features: [
        'Аналитика доходов',
        'Аналитика LTV',
        'Прогнозы ИИ для LTV и доходов'
      ]
    }
  ];

  return (
    <section className="features">
      <div className="container">
        <h2 className="features__title">
          Управляйте своим подписочным бизнесом.
        </h2>
        <h3 className="features__subtitle">
          Быстрее и дешевле.
        </h3>
        
        <div className="features__grid">
          {featureCards.map((card) => (
            <a 
              key={card.id} 
              href={card.link} 
              className="feature-card"
              onMouseEnter={() => setHoveredCard(card.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="feature-card__image-wrapper">
                <img
                  src={card.image}
                  alt={card.title}
                  className="feature-card__image"
                />
              </div>
              
              <div className="feature-card__content">
                <div className="feature-card__header">
                  <h4 className="feature-card__title">{card.title}</h4>
                  <svg 
                    className={`feature-card__arrow ${
                      hoveredCard === card.id ? 'feature-card__arrow--hovered' : ''
                    }`}
                    width="20" 
                    height="20" 
                    viewBox="0 0 20 20" 
                    fill="none"
                  >
                    <path 
                      d="M4.16666 10H15.8333M15.8333 10L10 4.16669M15.8333 10L10 15.8334" 
                      stroke="currentColor" 
                      strokeWidth="1.5" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                
                <div className="feature-card__features">
                  {card.features.map((feature, idx) => (
                    <span key={idx} className="feature-card__badge">
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;