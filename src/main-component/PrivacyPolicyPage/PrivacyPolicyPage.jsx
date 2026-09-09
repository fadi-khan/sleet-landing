"use client";

import React, { Fragment } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import PageTitle from '../../components/pagetitle/PageTitle';
import FooterS2 from '../../components/FooterS2/FooterS2';
import Scrollbar from '../../components/scrollbar/scrollbar';
import Logo from '../../images/logo.png';

// NOTE: Draft placeholder content only. Have this reviewed by legal counsel
// (and adapted for applicable data-protection law, e.g. Saudi PDPL) before
// treating it as your published Privacy Policy.
const PrivacyPolicyPage = () => {
    return (
        <Fragment>
            <Navbar hclass={'wpo-site-header'} Logo={Logo} />
            <PageTitle pageTitle={'Privacy Policy'} pagesub={'How we collect, use, and protect your data'} />
            <section className="section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col col-lg-10 offset-lg-1 col-12 legal-content">
                            <p><em>Last updated: [add date]</em></p>

                            <h3>1. Introduction</h3>
                            <p>
                                Sleet Logistics (&ldquo;Sleet&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;) provides fleet management,
                                logistics SaaS, and related digital services. This Privacy Policy
                                explains what information we collect from visitors and customers,
                                how we use it, and the choices you have.
                            </p>

                            <h3>2. Information We Collect</h3>
                            <ul>
                                <li>Contact details you submit through forms (name, email, phone, company).</li>
                                <li>Account and operational data when you use the Sleet platform (e.g. fleet, shipment, or vehicle data).</li>
                                <li>Usage data collected automatically (pages visited, device/browser information).</li>
                            </ul>

                            <h3>3. How We Use Your Information</h3>
                            <ul>
                                <li>To respond to inquiries and provide requested demos or quotes.</li>
                                <li>To operate, maintain, and improve our platform and services.</li>
                                <li>To send service updates and, where you have opted in, marketing communications.</li>
                            </ul>

                            <h3>4. Sharing of Information</h3>
                            <p>
                                We do not sell your personal data. We may share information with
                                service providers who support our operations (e.g. hosting,
                                analytics), or where required by law.
                            </p>

                            <h3>5. Data Security</h3>
                            <p>
                                We apply reasonable technical and organizational measures to protect
                                information against unauthorized access, alteration, or loss.
                            </p>

                            <h3>6. Your Rights</h3>
                            <p>
                                Depending on your jurisdiction, you may have the right to access,
                                correct, or request deletion of your personal data. To exercise these
                                rights, contact us using the details below.
                            </p>

                            <h3>7. Contact Us</h3>
                            <p>
                                Questions about this policy can be sent to{' '}
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

export default PrivacyPolicyPage;
