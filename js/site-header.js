class SiteHeader extends HTMLElement {
    connectedCallback() {
        const current = this.getAttribute('current');
        const link = (id, href, label) => `<a href="${href}"${current === id ? ' aria-current="page"' : ''}>${label}</a>`;
        this.innerHTML = `<header class="site-header"><nav class="navbar" aria-label="Główna nawigacja"><a class="brand" href="index.html" aria-label="Animacje Jagódka — strona główna"><img src="assets/logo.png" alt="Animacje Jagódka"></a><div class="nav-links">${link('offer', 'cyrkowo-rozwojowo.html', 'Oferta')}${link('about', 'o-mnie.html', 'O mnie')}${link('contact', 'kontakt.html', 'Kontakt')}</div></nav></header>`;
    }
}

customElements.define('site-header', SiteHeader);
