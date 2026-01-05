import { useState } from 'react';
import './SDKIntegration.css';

interface SDKExample {
  id: string;
  name: string;
  code: string;
  githubUrl: string;
}

const SDKIntegration = () => {
  const [activeSDK, setActiveSDK] = useState<string>('swift');

  const sdks: SDKExample[] = [
    {
      id: 'swift',
      name: 'Swift',
      code: `// Your app's code
import Adapty

do {
    try await Adapty.activate("PUBLIC_SDK_KEY")

    // Make a purchase, Adapty handles the rest
    let purchaseResult = try await Adapty.makePurchase(product)
    // successful purchase
} catch {
    // handle the error
}`,
      githubUrl: 'https://github.com/adaptyteam/AdaptySDK-iOS'
    },
    {
      id: 'kotlin',
      name: 'Kotlin',
      code: `// Your app's code
import com.adapty.Adapty

Adapty.activate(applicationContext, "PUBLIC_SDK_KEY")

// Make a purchase, Adapty handles the rest
Adapty.makePurchase(activity, product) { result ->
    when (result) {
        is AdaptyResult.Success -> {
            // successful purchase
        }
        is AdaptyResult.Error -> {
            // handle error
        }
    }
}`,
      githubUrl: 'https://github.com/adaptyteam/AdaptySDK-Android'
    },
    {
      id: 'react-native',
      name: 'React Native',
      code: `// Your app's code
import { adapty } from 'react-native-adapty';

await adapty.activate('PUBLIC_SDK_KEY');

// Make a purchase, Adapty handles the rest
try {
    const purchase = await adapty.makePurchase(product);
    // successful purchase
} catch (error) {
    // handle error
}`,
      githubUrl: 'https://github.com/adaptyteam/react-native-adapty'
    },
    {
      id: 'flutter',
      name: 'Flutter',
      code: `// Your app's code
import 'package:adapty_flutter/adapty_flutter.dart';

await Adapty().activate('PUBLIC_SDK_KEY');

// Make a purchase, Adapty handles the rest
try {
    final purchase = await Adapty().makePurchase(product: product);
    // successful purchase
} catch (e) {
    // handle error
}`,
      githubUrl: 'https://github.com/adaptyteam/AdaptySDK-Flutter'
    },
    {
      id: 'unity',
      name: 'Unity',
      code: `// Your app's code
using AdaptySDK;

Adapty.Activate("PUBLIC_SDK_KEY");

// Make a purchase, Adapty handles the rest
Adapty.MakePurchase(product, (profile, error) => {
    if (error == null) {
        // successful purchase
    } else {
        // handle error
    }
});`,
      githubUrl: 'https://github.com/adaptyteam/AdaptySDK-Unity'
    }
  ];

  const activeSDKData = sdks.find(sdk => sdk.id === activeSDK) || sdks[0];

  // Функция для подсветки синтаксиса
  const highlightCode = (code: string) => {
    const lines = code.split('\n');
    return lines.map((line, index) => {
      const lineNumber = index + 1;

      // Подсветка комментариев
      if (line.trim().startsWith('//')) {
        return { lineNumber, content: line, type: 'comment' };
      }

      // Подсветка импортов
      if (line.includes('import') || line.includes('using')) {
        return { lineNumber, content: line, type: 'import' };
      }

      // Подсветка ключевых слов
      const keywords = ['try', 'await', 'let', 'const', 'final', 'if', 'else', 'when', 'is', 'catch'];
      const hasKeyword = keywords.some(keyword => line.includes(keyword));
      
      return { lineNumber, content: line, type: hasKeyword ? 'keyword' : 'normal' };
    });
  };

  const highlightedCode = highlightCode(activeSDKData.code);

  return (
    <section className="sdk-integration">
      <div className="container">
        <div className="sdk-integration__header">
          <h2 className="sdk-integration__title">
            Интегрируйте покупки в приложении
          </h2>
          <h2 className="sdk-integration__title">
            с помощью нескольких строк кода
          </h2>
        </div>

        <div className="sdk-integration__grid">
          {/* Левая колонка - текст и отзыв */}
          <div className="sdk-integration__left">
            <p className="sdk-integration__description">
              Интегрируйте IAP за несколько часов без серверного кодирования с помощью простого и удобного SDK. А дальше, Adapty будет управлять работой и состоянием каждой вашей подписки – от активации, до возврата.
            </p>

            <a href="/docs/quick-start" className="sdk-integration__quick-link">
              Быстрая интеграция
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
            <div className="sdk-integration__testimonial">
              <div className="sdk-integration__testimonial-quote">"</div>
              <div className="sdk-integration__testimonial-logo">
                <img 
                  src="https://ext.same-assets.com/1155376611/3989131644.webp" 
                  alt="Smitten" 
                  className="sdk-integration__testimonial-logo-img"
                />
              </div>
              <p className="sdk-integration__testimonial-text">
                «С SDK Adapty, добавить покупки в приложение оказалось проще простого. С помощью всего нескольких строк кода я смог без проблем добавить подписки как для iOS, так и для Android.»
              </p>
              <div className="sdk-integration__testimonial-author">
                <img 
                  src="https://ext.same-assets.com/1155376611/3956797299.webp" 
                  alt="Magnus Olafsson" 
                  className="sdk-integration__testimonial-avatar"
                />
                <div className="sdk-integration__testimonial-info">
                  <div className="sdk-integration__testimonial-name">Магнус Олафссон</div>
                  <div className="sdk-integration__testimonial-role">Главный технический директор в Smitten</div>
                </div>
              </div>
            </div>
          </div>

          {/* Правая колонка - редактор кода */}
          <div className="sdk-integration__right">
            <div className="sdk-integration__code-editor">
              {/* Табы языков */}
              <div className="sdk-integration__tabs">
                {sdks.map((sdk) => (
                  <button
                    key={sdk.id}
                    className={`sdk-integration__tab ${
                      activeSDK === sdk.id ? 'sdk-integration__tab--active' : ''
                    }`}
                    onClick={() => setActiveSDK(sdk.id)}
                    type="button"
                  >
                    {sdk.name}
                  </button>
                ))}
              </div>

              {/* Блок кода */}
              <div className="sdk-integration__code-wrapper">
                <button 
                  className="sdk-integration__copy-btn"
                  onClick={() => {
                    navigator.clipboard.writeText(activeSDKData.code);
                  }}
                  type="button"
                  aria-label="Копировать код"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="9" y="9" width="13" height="13" rx="2" ry="2"/>
                    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>
                  </svg>
                </button>
                <div className="sdk-integration__code-content">
                  <pre className="sdk-integration__code">
                    <code>
                      {highlightedCode.map((item) => (
                        <div key={item.lineNumber} className="sdk-integration__code-line">
                          <span className="sdk-integration__code-line-number">{item.lineNumber}</span>
                          <span className={`sdk-integration__code-line-content sdk-integration__code-line-content--${item.type}`}>
                            {item.content}
                          </span>
                        </div>
                      ))}
                    </code>
                  </pre>
                </div>
              </div>

              {/* GitHub ссылка */}
              <div className="sdk-integration__code-footer">
                <div className="sdk-integration__github-badge">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z"
                      fill="currentColor"
                    />
                  </svg>
                  <span>100% Open Source</span>
                </div>
                <a
                  href={activeSDKData.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="sdk-integration__github-link"
                >
                  Go to GitHub
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path
                      d="M2.5 9.5L9.5 2.5M9.5 2.5H4M9.5 2.5V8"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SDKIntegration;

