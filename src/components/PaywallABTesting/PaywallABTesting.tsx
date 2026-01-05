import './PaywallABTesting.css';

const PaywallABTesting = () => {
  return (
    <section className="paywall-ab-testing">
      <div className="container">
        <div className="paywall-ab-testing__grid">
          {/* Левая колонка - текст и отзыв */}
          <div className="paywall-ab-testing__left">
            <h2 className="paywall-ab-testing__title">
              Тестируйте пейволлы без релизов приложения
            </h2>
            
            <p className="paywall-ab-testing__description">
              Управляйте пейволлами, таргетируйте их, локализуйте и персонализируйте не выходя из браузера.
            </p>

            <a href="/docs/ab-testing" className="paywall-ab-testing__link">
              Больше про A/B-тесты
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path
                  d="M6 12L10 8L6 4"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>

            {/* Отзыв клиента */}
            <div className="paywall-ab-testing__testimonial">
              <div className="paywall-ab-testing__testimonial-quote">"</div>
              <div className="paywall-ab-testing__testimonial-header">
                <div className="paywall-ab-testing__testimonial-logo">
                  <span className="paywall-ab-testing__testimonial-logo-text">smartist</span>
                </div>
              </div>
              <p className="paywall-ab-testing__testimonial-text">
                «Будь то A/B-тестирование пейволлов, прогнозирование LTV или анализ показателей подписки, Adapty — это идеальный набор инструментов для роста приложения»
              </p>
              <div className="paywall-ab-testing__testimonial-author">
                <img 
                  src="https://ext.same-assets.com/1155376611/3956797299.webp" 
                  alt="Ильгар Тали" 
                  className="paywall-ab-testing__testimonial-avatar"
                />
                <div className="paywall-ab-testing__testimonial-info">
                  <div className="paywall-ab-testing__testimonial-name">Ильгар Тали</div>
                  <div className="paywall-ab-testing__testimonial-role">Основатель и директор по позиционированию</div>
                </div>
              </div>
            </div>
          </div>

          {/* Правая колонка - визуализация A/B теста */}
          <div className="paywall-ab-testing__right">
            <div className="paywall-ab-testing__visual">
              <img
                src="https://adapty.io/assets/uploads/2025/05/paywall-ab-testing@2x.webp"
                alt="A/B тестирование пейволлов"
                className="paywall-ab-testing__image"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PaywallABTesting;

