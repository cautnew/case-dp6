// Preencha este arquivo com qualquer código que você necessite para realizar a
// coleta, desde a biblioteca analytics.js, gtag.js ou o snippet do Google Tag 
// Manager. No último caso, não é necessário implementar a tag <noscript>.
// O ambiente dispõe da jQuery 3.5.1, então caso deseje, poderá utilizá-la
// para fazer a sua coleta.
// Caso tenha alguma dúvida sobre o case, não hesite em entrar em contato.

(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

const __ = function (selector) {
	return document.querySelectorAll(selector);
}

const getParameterLink = function (link) {
	if (link == null || link === undefined) {
		return null;
	}

	const arrLink = link.split('#');
	const idx = arrLink.length - 1;

	return (idx > 0) ? arrLink[idx] : null;
}

const isLinkExterno = function (link) {
	if (link == null || link === undefined) {
		return false;
	}

	return (link.indexOf('http') !== -1);
}

const getMenuClassEventName = function (el) {
	const listMenuClassEventName = {
		'menu-lista-contato': 'contato',
		'menu-lista-download': 'download',
		'menu-lista-index': 'inicio',
		'menu-menu-home': 'home'
	};

	for(menuClass in listMenuClassEventName) {
		if(el.classList.contains(menuClass)) {
			return listMenuClassEventName[menuClass];
		}
	}

	return false;
}

const sendGA = function (hitType, eventCategory, eventAction, eventLabel){
	ga('send', {hitType, eventCategory, eventAction, eventLabel});
}

const actMenuEvent = {
	contato: () => {
		sendGA('event', 'menu', 'entre_em_contato', 'link_externo');
	},
	download: () => {
		sendGA('event', 'menu', 'download_pdf', 'download_pdf');
	},
	inicio: () => {
		//sendGA('event', 'menu', 'menu', 'inicio');
	},
	home: () => {
		//sendGA('event', 'menu', 'menu', 'home');
	}
}

const clickLinkMenu = function (ev) {
	const el = ev.target.closest('a');

	const eventName = getMenuClassEventName(el);

	if (eventName) {
		actMenuEvent[eventName]();
		return;
	}

	const link = el.getAttribute('href');
	const param = getParameterLink(link);
	const evGA = {
		hitType: 'event',
		eventCategory: 'menu'
	};
	
	if (param !== null) {
		evGA.eventAction = 'submenu';
		evGA.eventLabel = `${link} | ${el.innerHTML}`;
	} else if(isLinkExterno(link)) {
		evGA.eventAction = link;
		evGA.eventLabel = 'link_externo';
	} else {
		evGA.eventAction = 'menu';
		evGA.eventLabel = `${link} | ${el.innerHTML}`;
	}

	// ga('send', evGA);
}

ga('create', 'UA-12345-6', 'auto');
ga('send', 'pageview', location.pathname);

window.addEventListener('load', function () {
	const linksMenu = __('nav.menu a');

	linksMenu.forEach(function (el) {
		el.addEventListener('click', clickLinkMenu);
	});
});
