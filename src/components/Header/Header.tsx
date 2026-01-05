import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="header__container">
        <a href="/" className="header__logo">
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

        <nav className="header__nav">
          <ul className="header__menu">
            <li className="header__menu-item">
              <button className="header__menu-btn" type="button">
                Продукт
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path
                    d="M3 4.5L6 7.5L9 4.5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </li>
            <li className="header__menu-item">
              <button className="header__menu-btn" type="button">
                Кейсы
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path
                    d="M3 4.5L6 7.5L9 4.5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </li>
            <li className="header__menu-item">
              <button className="header__menu-btn" type="button">
                Ресурсы
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path
                    d="M3 4.5L6 7.5L9 4.5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </li>
            <li className="header__menu-item">
              <button className="header__menu-btn" type="button">
                Документация
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path
                    d="M3 4.5L6 7.5L9 4.5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </li>
            <li className="header__menu-item">
              <a href="/pricing" className="header__menu-link">
                Цены
              </a>
            </li>
          </ul>
        </nav>

        <div className="header__actions">
          <button className="header__lang-btn" type="button">
            <span className="header__lang-flag">RU</span>
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path
                d="M3 4.5L6 7.5L9 4.5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <a href="/signup" className="header__btn header__btn--outline">
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
          </a>
          <a href="/demo" className="header__btn header__btn--primary">
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
      </div>
    </header>
  );
};

export default Header;
