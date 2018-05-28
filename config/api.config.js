module.exports = {
	base: "https://gpodder.net",
	endpoints: {
		subscriptions: "/subscriptions",
		toplist: "/toplist",
		suggestions: "/suggestions",
		search: "/search",
		devices: "/devices",
		tag: "/tag",
		tags: "/tags",
		data: "/data",
		favorites: "/favorites",
		settings: "/settings",
		episodes: "/episodes"
	},
	constants: {
		TOPLIST_DEFAULT: 50,
		FORMAT_DEFAULT: "json"
	},
	version: "2"
};
