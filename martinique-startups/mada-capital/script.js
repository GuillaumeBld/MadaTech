const translations = {
    fr: {
        nav: {
            philosophy: "Philosophie",
            performance: "Performance",
            team: "Équipe",
            contact: "Investir"
        },
        hero: {
            title: "L'Excellence Financière<br>au Cœur des Caraïbes",
            subtitle: "Une stratégie d'investissement algorithmique unique, connectant les marchés mondiaux à la dynamique locale.",
            cta: "Découvrir nos Fonds"
        },
        stats: {
            roi: "Rendement Annuel",
            aum: "Actifs sous Gestion"
        },
        philosophy: {
            title: "Notre Philosophie",
            card1: {
                title: "Data-Driven",
                desc: "Nos décisions sont basées sur l'analyse de millions de points de données, éliminant le biais émotionnel."
            },
            card2: {
                title: "Impact Local",
                desc: "Nous réinvestissons une partie de nos profits dans l'écosystème technologique martiniquais."
            },
            card3: {
                title: "Gestion des Risques",
                desc: "Une protection du capital rigoureuse grâce à nos algorithmes de couverture propriétaires."
            }
        },
        contact: {
            title: "Rejoignez l'Élite",
            desc: "L'accès à nos fonds est réservé aux investisseurs qualifiés. Contactez-nous pour recevoir notre prospectus.",
            btn: "Demander l'Accès"
        },
        footer: {
            rights: "Tous droits réservés."
        }
    },
    en: {
        nav: {
            philosophy: "Philosophy",
            performance: "Performance",
            team: "Team",
            contact: "Invest"
        },
        hero: {
            title: "Financial Excellence<br>in the Heart of the Caribbean",
            subtitle: "A unique algorithmic investment strategy, connecting global markets to local dynamics.",
            cta: "Discover our Funds"
        },
        stats: {
            roi: "Annual Return",
            aum: "Assets Under Management"
        },
        philosophy: {
            title: "Our Philosophy",
            card1: {
                title: "Data-Driven",
                desc: "Our decisions are based on analyzing millions of data points, eliminating emotional bias."
            },
            card2: {
                title: "Local Impact",
                desc: "We reinvest a portion of our profits into the Martinique technology ecosystem."
            },
            card3: {
                title: "Risk Management",
                desc: "Rigorous capital protection through our proprietary hedging algorithms."
            }
        },
        contact: {
            title: "Join the Elite",
            desc: "Access to our funds is reserved for qualified investors. Contact us to receive our prospectus.",
            btn: "Request Access"
        },
        footer: {
            rights: "All rights reserved."
        }
    }
};

let currentLang = 'fr';

document.addEventListener('DOMContentLoaded', () => {
    const langBtn = document.getElementById('lang-toggle');

    // Number Animation
    const stats = document.querySelectorAll('.stat-number');
    stats.forEach(stat => {
        const target = parseFloat(stat.dataset.target);
        let current = 0;
        const increment = target / 100;
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                current = target;
                clearInterval(timer);
            }
            // Format: if integer, no decimals. If float, 1 decimal.
            stat.textContent = Number.isInteger(target) ? Math.round(current) : current.toFixed(1);
        }, 20);
    });

    // Language Toggle
    langBtn.addEventListener('click', () => {
        currentLang = currentLang === 'fr' ? 'en' : 'fr';
        langBtn.textContent = currentLang === 'fr' ? 'EN' : 'FR';
        updateLanguage();
    });
});

function updateLanguage() {
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(el => {
        const key = el.dataset.i18n;
        const keys = key.split('.');
        let value = translations[currentLang];
        keys.forEach(k => {
            value = value[k];
        });

        if (value) {
            // Check if element contains HTML (like <br>)
            if (value.includes('<')) {
                el.innerHTML = value;
            } else {
                el.textContent = value;
            }
        }
    });
}
