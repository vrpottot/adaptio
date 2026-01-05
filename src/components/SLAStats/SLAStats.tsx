import { useState, useEffect, useRef } from 'react';
import './SLAStats.css';

interface Stat {
  value: string;
  label: string;
}

interface ParsedStat {
  prefix: string;
  number: number;
  suffix: string;
  original: string;
}

const SLAStats = () => {
  const [animatedValues, setAnimatedValues] = useState<number[]>([0, 0, 0, 0]);
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const stats: Stat[] = [
    {
      value: '$2 млрд.',
      label: 'обрабатываемого дохода'
    },
    {
      value: '99.99%',
      label: 'времени безотказной работы'
    },
    {
      value: '2.5 млрд.',
      label: 'обслуживаемых пользователей'
    },
    {
      value: '60 млрд.',
      label: 'обращений к API / месяц'
    }
  ];

  // Парсинг значения из строки
  const parseValue = (value: string): ParsedStat => {
    // Удаляем пробелы и разбираем строку
    const trimmed = value.trim();
    
    // Проверяем наличие префикса ($)
    const hasPrefix = trimmed.startsWith('$');
    const prefix = hasPrefix ? '$' : '';
    
    // Проверяем наличие процента
    const hasPercent = trimmed.includes('%');
    const suffix = hasPercent ? '%' : trimmed.includes('млрд.') ? ' млрд.' : '';
    
    // Извлекаем число
    const numberMatch = trimmed.match(/[\d.]+/);
    const number = numberMatch ? parseFloat(numberMatch[0]) : 0;
    
    return {
      prefix,
      number,
      suffix,
      original: value
    };
  };

  // Форматирование числа обратно в строку
  const formatValue = (parsed: ParsedStat, animatedNumber: number): string => {
    if (parsed.suffix === '%') {
      return `${animatedNumber.toFixed(2)}%`;
    }
    
    // Для миллиардов округляем до 1 знака после запятой
    if (parsed.suffix.includes('млрд.')) {
      const rounded = Math.floor(animatedNumber * 10) / 10;
      return `${parsed.prefix}${rounded}${parsed.suffix}`;
    }
    
    return `${parsed.prefix}${Math.floor(animatedNumber)}${parsed.suffix}`;
  };

  // Анимация счетчика
  const animateValue = (
    start: number,
    end: number,
    duration: number,
    index: number
  ) => {
    const startTime = performance.now();
    
    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Easing функция для плавной анимации
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const current = start + (end - start) * easeOutQuart;
      
      setAnimatedValues((prev) => {
        const newValues = [...prev];
        newValues[index] = current;
        return newValues;
      });
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    
    requestAnimationFrame(animate);
  };

  // Intersection Observer для запуска анимации при появлении в viewport
  useEffect(() => {
    if (hasAnimated || !sectionRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            
            // Запускаем анимацию для каждого значения
            stats.forEach((stat, index) => {
              const parsed = parseValue(stat.value);
              const duration = 2000; // 2 секунды
              animateValue(0, parsed.number, duration, index);
            });
          }
        });
      },
      {
        threshold: 0.3 // Запускаем когда 30% секции видно
      }
    );

    const currentRef = sectionRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hasAnimated]);

  return (
    <section ref={sectionRef} className="sla-stats">
      <div className="container">
        <h2 className="sla-stats__title">
          Adapty обрабатывает доход от подписок
        </h2>
        <h3 className="sla-stats__subtitle">
          с самым высоким SLA уровнем в индустрии
        </h3>

        <div className="sla-stats__grid">
          {stats.map((stat, index) => {
            const parsed = parseValue(stat.value);
            const displayValue = hasAnimated
              ? formatValue(parsed, animatedValues[index])
              : formatValue(parsed, 0);
            
            return (
              <div key={stat.label} className="sla-stats__item">
                <div className="sla-stats__value">{displayValue}</div>
                <div className="sla-stats__label">{stat.label}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SLAStats;

