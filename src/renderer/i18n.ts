// @ts-nocheck
import i18n from 'i18next';
import { reactI18nextModule } from 'react-i18next';
import Backend from 'i18next-xhr-backend';

i18n
	.use(Backend)
	.use(reactI18nextModule) // pas
	.init({
		defaultLocale: 'en',
		fallbackLng: 'en',
		debug: false,
		interpolation: {
			escapeValue: false, // not needed for react!!
		},
	});

export default i18n;
