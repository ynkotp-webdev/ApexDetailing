const base = import.meta.env.BASE_URL;

export const links = [
	{ name: 'Головна', href: `${base}` },
	{ name: 'Про нас', href: '#about' },
	{ name: 'Послуги та прайс', href: `${base}Services` },
	{ name: 'Контакти', href: `${base}Contacts` },
];
