"use client";

import React, { Fragment } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import PageTitle from '../../components/pagetitle/PageTitle';
import FooterS2 from '../../components/FooterS2/FooterS2';
import Scrollbar from '../../components/scrollbar/scrollbar';
import Logo from '../../images/logo.png';

// NOTE: Draft placeholder content only. Have this reviewed by legal counsel
// before treating it as your published Terms & Conditions.
const TermsPage = () => {
    return (
        <Fragment>
            <Navbar hclass={'wpo-site-header'} Logo={Logo} />
            <PageTitle pageTitle={'Terms & Conditions'} pagesub={'The terms that govern use of our website and services'} />
            <section className="section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col col-lg-10 offset-lg-1 col-12 legal-content">
                            <p><em>Last updated: [add date]</em></p>

                            <h3>1. Acceptance of Terms</h3>
                            <p>
                                By accessing this website or using Sleet Logistics&apos; services, you
                                agree to be bound by these Terms &amp; Conditions. If you do not
                                agree, please do not use our website or services.
                            </p>

                            <h3>2. Our Services</h3>
                            <p>
                                Sleet Logistics provides fleet management, logistics SaaS, and
                                related digital platform services. Some services described on this
                                website are in active development and marked &ldquo;Coming Soon&rdquo; —
                                they are not yet available for use.
                            </p>

                            <h3>3. Use of the Website</h3>
                            <p>
                                You agree to use this website only for lawful purposes and not to
                                misuse any content, forms, or functionality provided here.
                            </p>

                            <h3>4. Intellectual Property</h3>
                            <p>
                                All content on this website, including text, logos, and graphics, is
                                the property of Sleet Logistics unless otherwise stated, and may not
                                be reproduced without permission.
                            </p>

                            <h3>5. Limitation of Liability</h3>
                            <p>
                                Sleet Logistics provides this website on an &ldquo;as is&rdquo; basis and makes
                                no warranties as to its uninterrupted availability or accuracy of
                                content.
                            </p>

                            <h3>6. Changes to These Terms</h3>
                            <p>
                                We may update these Terms from time to time. Continued use of the
                                website after changes are posted constitutes acceptance of the
                                revised Terms.
                            </p>

                            <h3>7. Contact Us</h3>
                            <p>
                                Questions about these Terms can be sent to{' '}
                                <a href="mailto:mohammad@sleet.sa">mohammad@sleet.sa</a>.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <FooterS2 />
            <Scrollbar />
        </Fragment>
    );
};

export default TermsPage;
