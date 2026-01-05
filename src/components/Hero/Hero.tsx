import { useState } from "react";
import "./Hero.css";

const Hero = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Email submitted:", email);
  };

  return (
    <section className="hero">
      <div className="hero__container">
        <div className="hero__content">
          <a href="/guide" className="hero__badge">
            <span className="hero__badge-label">Гайд</span>
            <span className="hero__badge-text">
              Как вырасти до $100K | Скачать
            </span>
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

          <h1 className="hero__title">
            Платформа
            <br />
            для роста
            <br />
            мобильных
            <br />
            приложений
          </h1>

          <p className="hero__description">
            Сэкономьте месяцы на внедрении подписок и
            <br />
            удвойте доход от приложения благодаря
            <br />
            эффективному управлению пейволлами.
          </p>

          <form className="hero__form" onSubmit={handleSubmit}>
            <div className="hero__form-input-wrapper">
              <input
                type="email"
                className="hero__form-input"
                placeholder="Email адрес"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="hero__form-btn">
              Начать
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path
                  d="M6 12L10 8L6 4"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </form>

          <a href="/demo" className="hero__demo-link">
            Запись на демо
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
        </div>

        <div className="hero__visual">
          <div className="hero__visual-wrapper">
            <div className="hero__phone">
              <div className="phone-mockup">
                <div className="phone-mockup__notch" />
                <div className="phone-mockup__screen">
                  <div className="phone-mockup__header">
                    <div className="phone-mockup__status">FIRSTPAGE</div>
                  </div>
                  <div className="phone-mockup__image">
                    <div className="phone-mockup__image-placeholder" />
                  </div>
                  <div className="phone-mockup__content">
                    <div className="phone-mockup__title">
                      Breathe, Bend, Begin
                    </div>
                    <div className="phone-mockup__subtitle">
                      Start your yoga journey
                    </div>
                  </div>
                  <button className="phone-mockup__cta" type="button">
                    Start with trial
                  </button>
                </div>
              </div>
            </div>
            <div className="hero__dashboard">
              <div className="dashboard-mockup">
                <div className="dashboard-mockup__header">
                  <span className="dashboard-mockup__title">Overview</span>
                  <div className="dashboard-mockup__tabs">
                    <span className="dashboard-mockup__tab dashboard-mockup__tab--active">
                      Revenue
                    </span>
                    <span className="dashboard-mockup__tab">Users</span>
                  </div>
                </div>
                <div className="dashboard-mockup__stats">
                  <div className="dashboard-mockup__stat">
                    <span className="dashboard-mockup__stat-value">
                      $1,384,646
                    </span>
                    <span className="dashboard-mockup__stat-label">
                      Total Revenue
                    </span>
                  </div>
                </div>
                <div className="dashboard-mockup__chart">
                  <div className="dashboard-mockup__chart-bars">
                    <div
                      className="dashboard-mockup__bar"
                      style={{ height: "60%" }}
                    />
                    <div
                      className="dashboard-mockup__bar"
                      style={{ height: "80%" }}
                    />
                    <div
                      className="dashboard-mockup__bar"
                      style={{ height: "45%" }}
                    />
                    <div
                      className="dashboard-mockup__bar"
                      style={{ height: "90%" }}
                    />
                    <div
                      className="dashboard-mockup__bar"
                      style={{ height: "70%" }}
                    />
                    <div
                      className="dashboard-mockup__bar"
                      style={{ height: "85%" }}
                    />
                    <div
                      className="dashboard-mockup__bar dashboard-mockup__bar--highlight"
                      style={{ height: "95%" }}
                    />
                  </div>
                </div>
                <div className="dashboard-mockup__metrics">
                  <div className="dashboard-mockup__metric">
                    <span className="dashboard-mockup__metric-value">
                      $24.74
                    </span>
                    <span className="dashboard-mockup__metric-label">ARPU</span>
                  </div>
                  <div className="dashboard-mockup__metric">
                    <span className="dashboard-mockup__metric-value">768</span>
                    <span className="dashboard-mockup__metric-label">
                      New Subs
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
