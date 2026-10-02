"use client";

import React from 'react';
import { useTranslations } from 'next-intl';
import { Link } from '../../i18n/navigation';
import Services from '../../lib/api/Services';
import { getLandingPagesByGroup, landingPath } from '../../lib/api/landingPages';

// The three link groups shown under "Services" in the header (desktop panel)
// and in the mobile drawer. Both read from here so they never drift apart.
export const useServicesMenuGroups = () => {
    const t = useTranslations();
    const landingLinks = (group) => getLandingPagesByGroup(group).map((page) => ({
        key: page.key,
        href: landingPath(page),
        title: t(`landing.pages.${page.key}.navTitle`),
        Icon: page.Icon,
    }));

    return [
        {
            key: 'solutions',
            title: t('nav.solutions'),
            links: Services.map((service) => ({
                key: service.key,
                href: `/solutions/${service.slug}`,
                title: t(`servicesData.${service.key}.title`),
                Icon: service.Icon,
                soon: service.isCommingSoon ? t('serviceSingle.soon') : null,
            })),
        },
        { key: 'features', title: t('nav.features'), links: landingLinks('features') },
        { key: 'industries', title: t('nav.industries'), links: landingLinks('industries') },
    ];
};

// Desktop dropdown panel. Rendered inside the "Services" <li>, which opens it
// on hover and on keyboard focus (see .has-mega in _landing.scss).
const ServicesMegaMenu = () => {
    const groups = useServicesMenuGroups();

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (
        <div className="nav-mega">
            {groups.map((group) => (
                <div className="nav-mega-group" key={group.key}>
                    <span className="nav-mega-title">{group.title}</span>
                    {group.links.map((link) => (
                        <Link href={link.href} onClick={ClickHandler} className="nav-mega-link" key={link.key}>
                            <link.Icon />
                            <span>{link.title}</span>
                            {link.soon && <em>{link.soon}</em>}
                        </Link>
                    ))}
                </div>
            ))}
        </div>
    );
};

export default ServicesMegaMenu;
