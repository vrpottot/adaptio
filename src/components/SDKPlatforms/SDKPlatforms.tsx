import './SDKPlatforms.css';
import Divider from "./Divider";
import './Divider.css';

interface Platform {
  id: string;
  name: string;
  icon: string;
  link: string;
  color: string;
}

const SDKPlatforms = () => {
  const platforms: Platform[] = [
    {
      id: 'swift',
      name: 'Swift SDK',
      icon: '⚡',
      link: '/docs/swift',
      color: '#FA7343'
    },
    {
      id: 'kotlin',
      name: 'Kotlin SDK',
      icon: '☕',
      link: '/docs/kotlin',
      color: '#7F52FF'
    },
    {
      id: 'react-native',
      name: 'React Native SDK',
      icon: '⚛️',
      link: '/docs/react-native',
      color: '#61DAFB'
    },
    {
      id: 'unity',
      name: 'Unity SDK',
      icon: '🎮',
      link: '/docs/unity',
      color: '#FFFFFF'
    },
    {
      id: 'flutter',
      name: 'Flutter SDK',
      icon: '🎯',
      link: '/docs/flutter',
      color: '#02569B'
    },
    {
      id: 'capacitor',
      name: 'Capacitor SDK',
      icon: '📱',
      link: '/docs/capacitor',
      color: '#119EFF'
    },
    {
      id: 'kotlin-multiplatform',
      name: 'Kotlin Multiplatform',
      icon: '🔷',
      link: '/docs/kotlin-multiplatform',
      color: '#7F52FF'
    },
    {
      id: 'flutterflow',
      name: 'FlutterFlow',
      icon: '🌊',
      link: '/docs/flutterflow',
      color: '#8B5CF6'
    },
    {
      id: 'web',
      name: 'Web API',
      icon: '🌐',
      link: '/docs/web',
      color: '#2563EB'
    },
    {
      id: 'stripe',
      name: 'Stripe',
      icon: '💳',
      link: '/docs/stripe',
      color: '#635BFF'
    }
  ];

  return (
    <section className="sdk-platforms">
      <div className="container">
        <h2 className="sdk-platforms__title">
          Установите SDK для своей платформы
        </h2>

        <div className="sdk-platforms__grid">
          {platforms.map((platform) => (
            <a
              key={platform.id}
              href={platform.link}
              className="sdk-platforms__card"
              style={{ '--platform-color': platform.color } as React.CSSProperties}
            >
              <div className="sdk-platforms__icon">
                <span className="sdk-platforms__icon-emoji">{platform.icon}</span>
              </div>
              <div className="sdk-platforms__name">{platform.name}</div>
              <svg
                className="sdk-platforms__arrow"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <path
                  d="M6 12L10 8L6 4"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SDKPlatforms;

