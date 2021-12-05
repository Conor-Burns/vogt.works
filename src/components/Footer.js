import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Footer() {
  return (
    <section id="footer">
      <div className="inner">
        <h2 className="major">Kontakt</h2>
        <form
          action="https://mailto:yannik+kontakt@vogt.works"
          method="POST"
          encType="multipart/form-data"
        >
          <div className="fields">
            <div className="field">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" required />
            </div>
            <div className="field">
              <label htmlFor="email">Email</label>
              <input type="email" name="email" id="email" required />
            </div>
            <div className="field">
              <label htmlFor="message">Nachricht</label>
              <textarea
                name="message"
                id="message"
                rows="4"
                required
              ></textarea>
            </div>
          </div>
          <ul className="actions">
            <li>
              <input type="submit" value="Nachricht senden" />
            </li>
          </ul>
        </form>
        <ul className="contact">
          <li className="icon">
            <FontAwesomeIcon icon="store" size="1x" /> Vogt - Innenausbau und
            Montage
            <br />
            Sebastianstr. 29
            <br />
            52066, Aachen
          </li>
          <li className="icon">
            <FontAwesomeIcon icon="phone" size="1x" />
            <a href="tel:+4915118614094"> (+49) 151 18614094</a>
          </li>
          <li className="icon">
            <FontAwesomeIcon icon="envelope" size="1x" />
            <a href="mailto:yannik@vogt.works"> yannik@vogt.works</a>
          </li>
          <li className="icon">
            <FontAwesomeIcon icon={['fab', 'instagram']} size="1x" />
            <a href="https://www.instagram.com/yavijo/"> @yavijo</a>
          </li>
        </ul>
        <ul className="copyright">
          <li>Vogt - Innenausbau und Montage &copy; 2021</li>
          <li>
            Design: <a href="https://conor-burns.com">C.B.</a>
          </li>
        </ul>
      </div>
    </section>
  );
}
