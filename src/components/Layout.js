import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import '../assets/sass/main.scss';
import Footer from './Footer';
import SideBar from './Sidebar';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import {
  faStore,
  faEnvelope,
  faPhone,
} from '@fortawesome/free-solid-svg-icons';
library.add(fab, faStore, faEnvelope, faPhone);

class Layout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isPreloaded: true,
    };
  }

  componentDidMount() {
    this.timeoutId = setTimeout(() => {
      this.setState({ isPreloaded: false });
    }, 100);
  }

  componentWillUnmount() {
    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
    }
  }

  render() {
    const { children, fullMenu } = this.props;
    const { isPreloaded } = this.state;
    return (
      <>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Vogt - Innenausbau und Montage</title>
          <meta
            name="description"
            content="Wohngefühl schaffen, durch Qualität und Kompetenz."
          />
          <meta property="og:type" content="business.business" />
          <meta property="og:title" content="Vogt - Innenausbau und Montage" />
          <meta property="og:url" content="https://vogt.works" />
          <meta property="og:image" content="https://vogt.works/og.jpg" />
          <meta
            property="og:description"
            content="Wohngefühl schaffen, durch Qualität und Kompetenz."
          />
          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:url" content="https://vogt.works/" />
          <meta
            property="twitter:title"
            content="Vogt - Innenausbau und Montage"
          />
          <meta
            property="twitter:description"
            content="Wohngefühl schaffen, durch Qualität und Kompetenz."
          />
          <meta property="twitter:image" content="https://vogt.works/og.jpg" />
          <meta
            property="business:contact_data:street_address"
            content="Sebastianstr. 29"
          />
          <meta property="business:contact_data:locality" content="Aachen" />
          <meta property="business:contact_data:region" content="NRW" />
          <meta property="business:contact_data:postal_code" content="52066" />
          <meta
            property="business:contact_data:country_name"
            content="Germany"
          />
          <html lang="de" />
        </Helmet>
        <div className={isPreloaded ? ' main-body  is-preload' : ' main-body'}>
          <div id="page-wrapper">
            <SideBar fullMenu={fullMenu} />
            {children}
            <Footer />
          </div>
        </div>
      </>
    );
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
