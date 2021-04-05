import React from 'react';

import Layout from '../components/Layout';

import icon from '../assets/images/fas-tools.svg';
import pic1 from '../assets/images/transparent.jpg';
import pic2 from '../assets/images/kompetent.jpg';
import pic3 from '../assets/images/hochwertig.jpg';
import pic4 from '../assets/images/beratung.jpg';
import pic5 from '../assets/images/montage.jpg';
import pic6 from '../assets/images/trockenbau.jpg';
import pic7 from '../assets/images/bodenbelagsarbeiten.jpg';

import config from '../../config';
const IndexPage = () => (
  <Layout>
    <section id="banner">
      <div className="inner">
        <div className="logo">
          <img className="icons" src={icon} alt="" />
        </div>
        <h2>{config.heading}</h2>
        <p>{config.subHeading}</p>
      </div>
    </section>

    <section id="wrapper">
      <section id="one" className="wrapper spotlight style1">
        <div className="inner">
          <img className="image" src={pic1} alt="" />
          <div className="content">
            <h2 className="major">Transparent</h2>
            <p>Wir garantieren Ihnen vollste Transparenz bei Materialbeschaffung und Ausführung und eine größtmögliche Kooperation zwischen uns und Ihnen als Auftraggeber.</p>
          </div>
        </div>
      </section>

      <section id="two" className="wrapper alt spotlight style2">
        <div className="inner">
          <img className="image" src={pic2} alt="" />
          <div className="content">
            <h2 className="major">Kompetent</h2>
            <p>Sie können von uns eine normgerechte und professionelle Umsetzung Ihres Projektes erwarten, gerne leiten wir Sie auch weiter und unterstützen Sie bei Fragen und Problemen rund um Ihr Objekt.</p>
          </div>
        </div>
      </section>

      <section id="three" className="wrapper spotlight style3">
        <div className="inner">
          <img className="image" src={pic3} alt="" />
          <div className="content">
            <h2 className="major">Hochwertig</h2>
            <p>Unsere Umsetzung wird immer Normgerecht und Langlebig sein, mit Verwendung von Qualitätsbaustoffen und dem richtigen Werkzeug. Das ist unser Versprechen!</p>
          </div>
        </div>
      </section>

      <section id="four" className="wrapper alt style1">
        <div className="inner">
          <h2 className="major">Angebot</h2>
          <p>Unser Angebot umfasst: </p>
          <section className="features">
            <article>
              <img className="image" src={pic4} alt="" />
              <h3 className="major">Beratung und Planung</h3>
              <p>Haben Sie Fragen zu Ihrem Objekt, oder benötigen Beratung bezüglich Renovierung? Wir helfen ihnen gerne weiter. </p>
            </article>
            <article>
              <img className="image" src={pic5} alt="" />
              <h3 className="major">Montage</h3>
              <p>Wir bieten ihnen professionellen Einbau von Türen, Deckenverkleidungen, Fensterbänken bis zu Möbeln an.</p>
            </article>
            <article>
              <img className="image" src={pic6} alt="" />
              <h3 className="major">Trockenbau</h3>
              <p>Trockenbau eignet sich perfekt zur einfachen und flexiblen Umgestaltung von Räumen. Ob es sich um ein Fenstersims, um eine neue Trennwand oder einen Dachstuhlausbau handelt, Trockenbau ist das Mittel der Wahl.</p>
            </article>
            <article>
              <img className="image" src={pic7} alt="" />
              <h3 className="major">Bodenbelagsarbeiten</h3>
              <p>Ob Parkett, Laminat oder Teppich, ein neuer Boden macht den Unterschied. Im Zusammenhang mit geigneter Trittschall- und Wärmedämmung bieten wir ihnen topaktuelle und energieeffiezente Bodenlegearbeiten an.</p>
            </article>
          </section>
        </div>
      </section>
    </section>
  </Layout>
);

export default IndexPage;
