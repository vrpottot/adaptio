import './TrustBy.css';

const TrustedBy = () => {
  const companies = [
    { name: 'Feeld', logo: 'feeld' },
    { name: 'Bumble', logo: 'bumble' },
    { name: 'WeeWoo', logo: 'weewoo' },
    { name: 'AppNation', logo: 'appnation' },
    { name: 'Almus', logo: 'almus' },
    { name: 'Impala Studios', logo: 'impala' },
    { name: 'HUBX', logo: 'hubx' },
  ];

  return (
    <section className="trusted-by">
      <div className="container">
        <h2 className="trusted-by__title">
          Доверяют более 15,000+ приложений и крупнейших мировых издателей приложений
        </h2>
        <div className="trusted-by__logos">
          {companies.map((company, index) => (
            <div key={index} className="trusted-by__logo-item">
              <div className={`trusted-by__logo trusted-by__logo--${company.logo}`}>
                {company.name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;