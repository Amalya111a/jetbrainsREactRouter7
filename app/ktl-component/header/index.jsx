import React, { useState } from "react";

const navItems = [
    {
        title: 'Solutions',
        dropdown: [
            { title: 'Multiplatform Mobile', url: '/lp/mobile/' },
            { title: 'Multiplatform for other platforms', url: '/docs/multiplatform.html' },
            { title: 'Server-side', url: '/lp/server-side/' },
            { title: 'Web frontend', url: '/docs/js-overview.html' },
            { title: 'Data science', url: '/docs/data-science-overview.html' },
            { title: 'Android', url: '/docs/android-overview.html' },
        ]
    },
    { title: 'Docs', url: '/docs/home.html' },
    { title: 'Community', url: '/community/' },
    { title: 'Teach', url: '/education/' },
    {
        title: 'Play',
        alignRight: true,
        dropdown: [
            { title: 'Playground', url: 'https://play.kotlinlang.org/' },
            { title: 'Hands-on', url: 'https://play.kotlinlang.org/hands-on' },
            { title: 'Examples', url: 'https://play.kotlinlang.org/byExample' },
            { title: 'Koans', url: 'https://play.kotlinlang.org/koans' },
        ]
    },
];

const KotlinLogo = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 24" width="120" height="28">
        <radialGradient id="kotlin-logo-large_svg__a" cx="22.432" cy="3.493" r="21.679" gradientTransform="translate(-.19 .042) scale(.9998)" gradientUnits="userSpaceOnUse">
            <stop offset="0.003" stopColor="#e44857"/>
            <stop offset="0.469" stopColor="#c711e1"/>
            <stop offset="1" stopColor="#7f52ff"/>
        </radialGradient>
        <path fill="url(#kotlin-logo-large_svg__a)" d="M22.87 21.68H3.94V2.76h18.93l-9.66 9.32z"/>
        <g fill="#fff">
            <path d="M45.69 2.73h-3.76l-8.18 8.73v-8.7h-3.02v18.92h3.02v-9.17l8.21 9.17h3.89l-8.75-9.79z"/>
            <path d="M55.93 8.44c-1.07-.62-2.28-.93-3.64-.93-1.38 0-2.61.31-3.7.93a6.63 6.63 0 00-2.55 2.57c-.61 1.1-.91 2.35-.91 3.74 0 1.4.3 2.64.91 3.74a6.45 6.45 0 002.53 2.57c1.09.62 2.32.93 3.7.93 1.36 0 2.58-.31 3.66-.93a6.53 6.53 0 002.51-2.57c.6-1.1.9-2.35.9-3.74 0-1.4-.3-2.64-.9-3.74-.6-1.1-1.43-1.95-2.51-2.57zm-.19 8.7c-.33.69-.8 1.23-1.4 1.61-.6.39-1.3.58-2.08.58-.79 0-1.49-.19-2.11-.58-.61-.39-1.09-.93-1.43-1.61-.34-.69-.51-1.48-.51-2.38 0-.9.17-1.7.51-2.39.34-.69.82-1.23 1.43-1.61.61-.39 1.32-.58 2.12-.58.77 0 1.46.19 2.07.58.6.39 1.07.93 1.4 1.61.33.69.49 1.48.49 2.39.01.9-.15 1.69-.49 2.38zm9.75-12.76h-2.92v2.35c0 .37-.09.65-.27.83-.18.18-.46.28-.84.28h-1.43v2.49h2.49v7.45c0 .77.16 1.46.47 2.05.31.59.76 1.05 1.34 1.37.58.32 1.27.49 2.06.49h2.23V19.1h-1.68c-.43 0-.78-.15-1.06-.45-.27-.3-.4-.7-.4-1.2v-7.11h3.22v-2.5h-3.22V4.38zM71.03 2H74v19.68h-2.97zm6.32.03h3v3.05h-3zm0 5.81h2.97v13.84h-2.97zm18.08 2.28a4.694 4.694 0 00-1.77-1.92c-.76-.46-1.65-.69-2.67-.69-1.08 0-2.03.26-2.84.79-.65.42-1.17.98-1.58 1.68l-.02-2.14H83.7v13.84h2.97v-7.74c0-.75.14-1.41.43-1.99.28-.58.68-1.03 1.2-1.35.52-.32 1.12-.48 1.82-.48.62 0 1.16.13 1.6.39.45.26.78.64 1.01 1.12.23.49.34 1.07.34 1.74v8.31h2.97v-8.73c.02-1.07-.2-2.01-.61-2.83z"/>
        </g>
    </svg>
);

const Header = () => {
    const [openDropdown, setOpenDropdown] = useState(null);

    return (
        <header style={{
            background: '#27282c',
            height: '64px',
            display: 'flex',
            alignItems: 'center',
            padding: '0 32px',
            position: 'sticky',
            top: 0,
            zIndex: 100,
            boxSizing: 'border-box',
            width: '100%',
            boxShadow: 'inset 0 -1px 0 rgba(255, 255, 255, 0.2)',
        }}>
            <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                width: '100%',
                margin: '0 auto',
            }}>
                {/* Logo */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <a href="https://kotlinlang.org" aria-label="Kotlin Home Page" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
                        <KotlinLogo />
                    </a>
                    <a
                        href="https://github.com/JetBrains/kotlin/releases/tag/v1.6.20"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                            color: '#9a9da5',
                            fontSize: '11px',
                            fontFamily: 'JetBrains Sans, Inter, sans-serif',
                            textDecoration: 'none',
                            marginTop: '-7px',
                        }}
                    >
                        v1.6.20
                    </a>
                </div>

                {/* Nav */}
                <nav style={{ display: 'flex', alignItems: 'center' }}>
                    {navItems.map(item => (
                        <div
                            key={item.title}
                            style={{ position: 'relative' }}
                            onMouseEnter={() => item.dropdown && setOpenDropdown(item.title)}
                            onMouseLeave={() => setOpenDropdown(null)}
                        >
                            {item.url ? (
                                <a
                                    href={item.url}
                                    style={{
                                        color: 'rgba(255,255,255,0.7)',
                                        textDecoration: 'none',
                                        fontSize: '17px',
                                        fontFamily: 'JetBrains Sans, Inter, sans-serif',
                                        padding: '0 20px',
                                        height: '64px',
                                        display: 'flex',
                                        alignItems: 'center',
                                        borderBottom: '2px solid transparent',
                                        boxSizing: 'border-box',
                                    }}
                                    onMouseEnter={e => {
                                        e.currentTarget.style.color = '#fff';
                                        e.currentTarget.style.borderBottom = '2px solid ';
                                    }}
                                    onMouseLeave={e => {
                                        e.currentTarget.style.color = 'rgba(255,255,255,0.7)';
                                        e.currentTarget.style.borderBottom = '2px solid transparent';
                                    }}
                                >
                                    {item.title}
                                </a>
                            ) : (
                                <span
                                    style={{
                                        color: openDropdown === item.title ? '#fff' : 'rgba(255,255,255,0.7)',
                                        fontSize: '17px',
                                        fontFamily: 'JetBrains Sans, Inter, sans-serif',
                                        padding: '0 20px',
                                        height: '64px',
                                        display: 'flex',
                                        alignItems: 'center',
                                        cursor: 'pointer',
                                        borderBottom: openDropdown === item.title ? '2px solid' : '2px solid transparent',
                                        boxSizing: 'border-box',
                                    }}
                                >
                                    {item.title}
                                </span>
                            )}

                            {/* Dropdown */}
                            {item.dropdown && openDropdown === item.title && (
                                <ul style={{
                                    position: 'absolute',
                                    top: '64px',
                                    left: item.alignRight ? 'auto' : '0',
                                    right: item.alignRight ? '0' : 'auto',
                                    background: '#27282c',
                                    listStyle: 'none',
                                    margin: 0,
                                    padding: '8px 0',
                                    minWidth: '220px',
                                    boxShadow: '0 8px 24px rgba(0,0,0,0.4)',
                                    zIndex: 200,
                                    borderTop: '1px solid rgba(255,255,255,0.1)',
                                }}>
                                    {item.dropdown.map(sub => (
                                        <li key={sub.title}>
                                            <a
                                                href={sub.url}
                                                style={{
                                                    display: 'block',
                                                    padding: '10px 20px',
                                                    color: 'rgba(255,255,255,0.7)',
                                                    textDecoration: 'none',
                                                    fontSize: '17px',
                                                    fontFamily: 'JetBrains Sans, Inter, sans-serif',
                                                    whiteSpace: 'nowrap',
                                                }}
                                                onMouseEnter={e => e.currentTarget.style.color = '#fff'}
                                                onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.7)'}
                                            >
                                                {sub.title}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    ))}
                </nav>
            </div>
        </header>
    );
};

export default Header;