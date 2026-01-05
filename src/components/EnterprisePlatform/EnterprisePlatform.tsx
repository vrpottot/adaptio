import './EnterprisePlatform.css';

const EnterprisePlatform = () => {
  return (
    <section className="enterprise-platform">
      <div className="container">
        <h2 className="enterprise-platform__title">
          Платформа уровня Enterprise
        </h2>

        <div className="enterprise-platform__grid">
          {/* Безопасность */}
          <div className="enterprise-platform__column">
            <h3 className="enterprise-platform__column-title">Безопасность</h3>
            <ul className="enterprise-platform__list">
              <li className="enterprise-platform__item">Сертификация SOC2</li>
              <li className="enterprise-platform__item">Шифрование данных</li>
              <li className="enterprise-platform__item">
                Круглосуточный мониторинг мошенничества
              </li>
            </ul>
          </div>

          {/* Надежность */}
          <div className="enterprise-platform__column">
            <h3 className="enterprise-platform__column-title">Надежность</h3>
            <ul className="enterprise-platform__list">
              <li className="enterprise-platform__item">
                <a
                  href="https://status.adapty.io/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="enterprise-platform__link"
                >
                  99.99% SLA
                </a>
              </li>
              <li className="enterprise-platform__item">
                $500 млн. в год обработанных платежей в приложениях
              </li>
            </ul>
          </div>

          {/* Отзывчивость */}
          <div className="enterprise-platform__column">
            <h3 className="enterprise-platform__column-title">Отзывчивость</h3>
            <ul className="enterprise-platform__list">
              <li className="enterprise-platform__item">
                Выделенный менеджер по работе с клиентами
              </li>
              <li className="enterprise-platform__item">
                Прямая связь через Slack
              </li>
              <li className="enterprise-platform__item">
                Онлайн-чат на сайте
              </li>
              <li className="enterprise-platform__item">
                Четыре способа связаться с нами
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnterprisePlatform;

