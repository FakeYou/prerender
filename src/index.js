const requirePage = require.context('./pages', true, /.md$/);

const pages = {};

requirePage.keys().forEach(name => {
	const Page = requirePage(name).default;

	console.log(Page);

	pages[Page.path()] = {
		path: Page.path(),
		screen: Page,
	};
});

console.log(pages);
