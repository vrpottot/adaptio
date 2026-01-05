import './CTASection.css';

const CTASection = () => {
  return (
    <section className="cta-section">
      <div className="container">
        <div className="cta-section__content cta-section__content--inline">
          <span className="cta-section__inline-text">
            Начните сегодня или запланируйте демонстрацию для вашего личного онбординга
          </span>
          <div className="cta-section__buttons">
            <a href="https://app.adapty.io/registration" className="cta-section__btn cta-section__btn--outline">
              Начать бесплатно
            </a>
            <a href="https://adapty.io/ru/schedule-demo/" className="cta-section__btn cta-section__btn--primary">
              Записаться на демонстрацию
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};


export default CTASection;

