import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__content">
          <div className="footer__logo">
            <a href="/" className="footer__logo-link">
              <svg
                width="100"
                height="28"
                viewBox="0 0 100 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18.5 4C12.5 4 8 8.5 8 14.5C8 20.5 12.5 25 18.5 25C24.5 25 29 20.5 29 14.5C29 8.5 24.5 4 18.5 4Z"
                  fill="#8B5CF6"
                />
                <path
                  d="M14 14.5C14 12 16 10 18.5 10C21 10 23 12 23 14.5C23 17 21 19 18.5 19C16 19 14 17 14 14.5Z"
                  fill="white"
                />
                <text
                  x="34"
                  y="20"
                  fontFamily="Gilroy, Inter, sans-serif"
                  fontSize="18"
                  fontWeight="700"
                  fill="#1a1a1a"
                >
                  adapty
                </text>
              </svg>
            </a>
          </div>

          <div className="footer__grid">
            <div className="footer__column">
              <h4 className="footer__column-title">Менеджмент пейволлов</h4>
              <ul className="footer__list">
                <li><a href="/ru/paywall-builder/">Конструктор пейволлов</a></li>
                <li><a href="/ru/onboarding-builder/">Конструктор онбординга</a></li>
                <li><a href="/ru/ai-paywall-generator/">AI генератор</a></li>
                <li><a href="/ru/paywall-ab-testing/">A/B тестирование</a></li>
                <li><a href="/ru/autopilot/">Автопилот</a></li>
                <li><a href="/ru/paywall-targeting/">Таргетинг</a></li>
                <li><a href="/ru/paywall-localization/">Локализация</a></li>
                <li><a href="/ru/remote-config/">Удаленная конфигурация</a></li>
              </ul>
            </div>

            <div className="footer__column">
              <h4 className="footer__column-title">Инфраструктура</h4>
              <ul className="footer__list">
                <li><a href="/ru/sdk/">SDK для подписок</a></li>
                <li><a href="/ru/subscription-sync/">Синхронизация</a></li>
                <li><a href="/ru/fallback-paywalls/">Резервные пейволлы</a></li>
                <li><a href="/ru/refund-saver/">Контроль возвратов</a></li>
                <li><a href="/ru/integrations/">Интеграции</a></li>
              </ul>
            </div>

            <div className="footer__column">
              <h4 className="footer__column-title">Роли</h4>
              <ul className="footer__list">
                <li><a href="/ru/for-developers/">Для разработчиков</a></li>
                <li><a href="/ru/for-marketers/">Для маркетологов</a></li>
                <li><a href="/ru/for-app-owners/">Для владельцев</a></li>
              </ul>
            </div>

            <div className="footer__column">
              <h4 className="footer__column-title">Уровни</h4>
              <ul className="footer__list">
                <li><a href="/ru/for-indie/">Инди</a></li>
                <li><a href="/ru/for-startups/">Стартапы</a></li>
                <li><a href="/ru/for-publishers/">Издательство</a></li>
                <li><a href="/ru/for-enterprises/">Предприятие</a></li>
              </ul>
            </div>

            <div className="footer__column">
              <h4 className="footer__column-title">Кейсы клиентов</h4>
              <ul className="footer__list">
                <li><a href="/ru/subscription-integration/">Интеграция подписок</a></li>
                <li><a href="/ru/revenue-growth/">Увеличение доходов</a></li>
                <li><a href="/ru/performance-analytics/">Производительность</a></li>
                <li><a href="/ru/case-studies/">Читать кейсы клиентов</a></li>
              </ul>
            </div>

            <div className="footer__column">
              <h4 className="footer__column-title">Сравнение</h4>
              <ul className="footer__list">
                <li><a href="/ru/compare/revenuecat/">RevenueCat</a></li>
                <li><a href="/ru/compare/purchasely/">Purchasely</a></li>
                <li><a href="/ru/compare/qonversion/">Qonversion</a></li>
                <li><a href="/ru/compare/superwall/">Superwall</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer__bottom">
          <div className="footer__copyright">
            © 2025 Adapty Tech Inc.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

