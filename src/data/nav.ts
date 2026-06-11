const base = import.meta.env.BASE_URL;

export const links = [
	{ name: 'Головна', href: `${base}` },
	{ name: 'Про нас', href: `${base}#about` },
	{ name: 'Послуги та прайс', href: `${base}services` },
	{ name: 'Контакти', href: `${base}contacts` },
];
