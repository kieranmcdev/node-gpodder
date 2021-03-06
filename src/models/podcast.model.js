/**
 * Container class for a podcast. Encapsulates the metadata for a podcast.
 * @param {string} url - The URL of the podcast feed
 * @param {string} title - The title of the podcast
 * @param {string} description - The description of the podcast
 */
class Podcast {
	constructor(
		url,
		title,
		description,
		website,
		subscribers,
		subscribersLastWeek,
		mygpoLink,
		logoUrl
	) {
		this.url = url;
		this.title = title;
		this.description = description;
		this.website = website;
		this.subscribers = subscribers;
		this.subscribersLastWeek = subscribersLastWeek;
		this.mygpoLink = mygpoLink;
		this.logoUrl = logoUrl;
	}

	static getName() {
		return "Podcast";
	}

	static getRequiredFields() {
		return [
			"url",
			"title",
			"description",
			"website",
			"subscribers",
			"subscribersLastWeek",
			"mygpoLink",
			"logoUrl"
		];
	}
}

module.exports = Podcast;
