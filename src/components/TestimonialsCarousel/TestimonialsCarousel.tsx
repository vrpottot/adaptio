import { useState } from 'react';
import './TestimonialsCarousel.css';

interface Testimonial {
  id: number;
  quote: string;
  author: string;
  role: string;
  company: string;
  photo: string;
  logo: string;
}

const TestimonialsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials: Testimonial[] = [
    {
      id: 1,
      quote: 'Мы протестировали более трехсот пейволлов за четыре месяца. Adapty позволяет тестировать практически любой элемент пейволла, и мы воспользовались этим. Мы протестировали всё: продукты, текст заголовка, кнопки CTA, изображения, видео и т.д. Благодаря A/B тестированию Adapty, мы смогли удвоить наш месячный доход. Я не был уверен, что один инструмент может оказать такое влияние, но я стал свидетелем этого сам.',
      author: 'Рой Мулия',
      role: 'Основатель и генеральный директор',
      company: 'SocialKit',
      photo: 'https://adapty.io/assets/uploads/2023/12/photo-Roi-Mulia.webp',
      logo: 'https://adapty.io/assets/uploads/2024/02/logo-social-white.svg'
    },
    {
      id: 2,
      quote: 'Миграция с RevenueCat была не легким решением для нас. Мы выбрали Adapty, потому что верим, что они - лучший партнер для нашего роста. Оглядываясь назад, это было правильное решение. Несмотря на некоторые сложности, команда Adapty всегда была рядом, чтобы помочь нам во время миграции и после, и их поддержка на высшем уровне. Я рекомендую Adapty как надежного партнера.',
      author: 'Джем Ортабаш',
      role: 'Соучредитель и генеральный директор',
      company: 'HubX',
      photo: 'https://adapty.io/assets/uploads/2023/12/photo-Cem-Ortabas.webp',
      logo: 'https://adapty.io/assets/uploads/2023/12/logo-HabX-white.svg'
    },
    {
      id: 3,
      quote: 'Мы работаем с Adapty с 2021 года, и я не мог бы быть более счастливым от этого. Мы пробовали другие платформы управления подписками в прошлом, так что могу сравнить. Adapty представила множество функций на протяжении лет и постоянно помогала нам расти. У них лучшие аналитические инструменты на рынке и все интеграции, о которых вы можете подумать. Если вы хотите увеличить доход вашего приложения, я определенно рекомендую Adapty.',
      author: 'Крис Бик',
      role: 'Основатель и генеральный директор',
      company: 'Bickster',
      photo: 'https://adapty.io/assets/uploads/2023/12/photo-Chris-Bick.webp',
      logo: 'https://adapty.io/assets/uploads/2023/12/logo-bickster.png'
    },
    {
      id: 4,
      quote: 'Мы выбрали Adapty за мощные возможности A/B тестирования пейволлов, которые помогли нам эффективно оптимизировать нашу стратегию монетизации. Удобная платформа, гибкое ценообразование и исключительная поддержка клиентов делают Adapty превосходным выбором по сравнению с конкурентами.',
      author: 'Ялчын Оздемир',
      role: 'Основатель и генеральный директор',
      company: 'AppNation',
      photo: 'https://adapty.io/assets/uploads/2024/02/Asman.webp',
      logo: 'https://adapty.io/assets/uploads/2024/02/logo-AppNation-white.png'
    },
    {
      id: 5,
      quote: 'Платформа Adapty позволяет неразработчикам легко создавать и управлять A/B тестами, пейволлами, ассортиментом продуктов и ценовой структурой. У них есть отличный внешний API, который облегчает передачу связанных событий в другие аналитические инструменты, такие как Amplitude и Mixpanel.',
      author: 'Кайл Смит',
      role: 'Руководитель отдела данных',
      company: 'Smitten Dating',
      photo: 'https://adapty.io/assets/uploads/2024/02/Kyle2.webp',
      logo: 'https://adapty.io/assets/uploads/2024/02/Smitten_Color-Logo-Small-02.webp'
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToTestimonial = (index: number) => {
    setCurrentIndex(index);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="testimonials-carousel">
      <div className="container">
        <h2 className="testimonials-carousel__title">
          От Indie до Enterprise – Adapty помогает увеличить доход приложениям любого уровня
        </h2>

        <div className="testimonials-carousel__wrapper">
          <button
            className="testimonials-carousel__arrow testimonials-carousel__arrow--prev"
            onClick={prevTestimonial}
            type="button"
            aria-label="Предыдущий отзыв"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path
                d="M15 18L9 12L15 6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          <div className="testimonials-carousel__content">
            <div className="testimonials-carousel__testimonial">
              <div className="testimonials-carousel__photo">
                <img
                  src={currentTestimonial.photo}
                  alt={currentTestimonial.author}
                  className="testimonials-carousel__photo-img"
                />
              </div>

              <div className="testimonials-carousel__text">
                <p className="testimonials-carousel__quote">
                  «{currentTestimonial.quote}»
                </p>

                <div className="testimonials-carousel__author">
                  <div className="testimonials-carousel__author-name">
                    {currentTestimonial.author}
                  </div>
                  <div className="testimonials-carousel__author-role">
                    {currentTestimonial.role}, {currentTestimonial.company}
                  </div>
                </div>

                <div className="testimonials-carousel__logo">
                  <img
                    src={currentTestimonial.logo}
                    alt={currentTestimonial.company}
                    className="testimonials-carousel__logo-img"
                  />
                </div>
              </div>
            </div>
          </div>

          <button
            className="testimonials-carousel__arrow testimonials-carousel__arrow--next"
            onClick={nextTestimonial}
            type="button"
            aria-label="Следующий отзыв"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path
                d="M9 18L15 12L9 6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>

        <div className="testimonials-carousel__dots">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`testimonials-carousel__dot ${
                index === currentIndex ? 'testimonials-carousel__dot--active' : ''
              }`}
              onClick={() => goToTestimonial(index)}
              type="button"
              aria-label={`Перейти к отзыву ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsCarousel;

