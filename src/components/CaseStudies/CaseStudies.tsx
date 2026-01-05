import './CaseStudies.css';

interface CaseStudy {
  id: string;
  icon: string;
  name: string;
  category: string;
  metric: string;
  description: string;
  link: string;
}

const CaseStudies = () => {
  const caseStudies: CaseStudy[] = [
    {
      id: 'productivity-app',
      icon: 'https://adapty.io/assets/uploads/2025/12/app-icon-productivity-app@4x.webp',
      name: 'Productivity app',
      category: 'Продуктивность',
      metric: '+50% общей выручки',
      description: 'Как ценовые тесты раскрыли потенциал',
      link: 'https://adapty.io/case-studies/productivity-app-and-autopilot/'
    },
    {
      id: 'text-on-pic',
      icon: 'https://adapty.io/assets/uploads/2025/12/app-icon-text-on-pic@3x.webp',
      name: 'Text on Pic',
      category: 'Фото и видео',
      metric: 'Рост MRR более 30%',
      description: 'Как увеличить доход с помощью правильных тестов',
      link: 'https://adapty.io/case-studies/photo-editing-app-and-autopilot/'
    },
    {
      id: 'secret-app',
      icon: 'https://adapty.io/assets/uploads/2025/11/logo-secret-app@3x.webp',
      name: 'Secret app',
      category: 'Путешествия',
      metric: '+102% рост ARPU',
      description: 'Новая онбординг удвоила доход с пользователя',
      link: 'https://adapty.io/case-studies/travel-app/'
    },
    {
      id: 'going-merry',
      icon: 'https://adapty.io/assets/uploads/2025/09/going-merry-app-logo.webp',
      name: 'Going Merry',
      category: 'Издатель приложения',
      metric: 'Рост MRR в 5 раз',
      description: 'Как масштабировать доход от подписок с помощью Paywall Builder',
      link: 'https://adapty.io/case-studies/going-merry/'
    },
    {
      id: 'shmoody',
      icon: 'https://adapty.io/assets/uploads/2025/05/app-logo-shmoody.webp',
      name: 'Shmoody',
      category: 'Ментальное здоровье',
      metric: 'ARR вырос с $0 до $2M',
      description: 'Как вырасти от бесплатного приложения до $2M ARR с Adapty',
      link: 'https://adapty.io/case-studies/shmoody/'
    },
    {
      id: 'lively',
      icon: 'https://adapty.io/assets/uploads/2025/04/app-logo-lively@2x.png',
      name: 'Lively',
      category: 'Здоровье и фитнес',
      metric: 'На 83% меньше возвратов',
      description: 'Сэкономлено 82% потенциально дохода',
      link: 'https://adapty.io/case-studies/lively/'
    },
    {
      id: 'glam-ai',
      icon: 'https://adapty.io/assets/uploads/2025/03/app-logo-glam-ai.webp',
      name: 'Glam AI',
      category: 'Макияж и красота',
      metric: 'ROAS от Adapty – 108%',
      description: 'До 1.2 млн долларов в год за 3 месяца',
      link: 'https://adapty.io/case-studies/glam-ai/'
    },
    {
      id: 'pepapp',
      icon: 'https://adapty.io/assets/uploads/2025/01/Pepapp-icon@2x.webp',
      name: 'Pepapp',
      category: 'Здоровье и фитнес',
      metric: 'Окупаемость – 400%',
      description: 'Как сделать Adapty бесплатным с помощью Refund Saver',
      link: 'https://adapty.io/case-studies/pepapp/'
    },
    {
      id: 'fotorama',
      icon: 'https://adapty.io/assets/uploads/2024/12/app-icon-fotorama-original.webp',
      name: 'Fotorama',
      category: 'Фото и Видео',
      metric: '-40% возвратов',
      description: 'Как снизить уровень возвратов с помощью Adapty',
      link: 'https://adapty.io/case-studies/fotorama/'
    }
  ];

  return (
    <section className="case-studies">
      <div className="container">
        <h2 className="case-studies__title">
          Реальные истории роста наших клиентов
        </h2>

        <div className="case-studies__grid">
          {caseStudies.map((study) => (
            <a
              key={study.id}
              href={study.link}
              target="_blank"
              rel="noopener noreferrer"
              className="case-studies__card"
            >
              <div className="case-studies__icon">
                <img
                  src={study.icon}
                  alt={study.name}
                  className="case-studies__icon-img"
                />
              </div>

              <div className="case-studies__content">
                <div className="case-studies__name">{study.name}</div>
                <div className="case-studies__category">{study.category}</div>
                <div className="case-studies__metric">{study.metric}</div>
                <div className="case-studies__description">{study.description}</div>
                <div className="case-studies__link">
                  Подробнее
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path
                      d="M6 12L10 8L6 4"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </a>
          ))}
        </div>

        <div className="case-studies__footer">
          <a
            href="https://adapty.io/ru/case-studies/"
            className="case-studies__all-link"
          >
            Открыть все кейсы
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
    </section>
  );
};

export default CaseStudies;

