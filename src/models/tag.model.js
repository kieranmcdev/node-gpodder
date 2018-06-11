/**
 * Container class for a tag in the top tag lis
 */

class Tag {
	/**
	 *
	 * @param {string} tag -  name of the tag
	 * @param {string} usage - usage of the tag
	 */
	constructor(tag, usage) {
		this.tag = tag;
		this.usage = usage;
	}

	static getName() {
		return "Tag";
	}

	static getRequiredFields() {
		return ["tag", "usage"];
	}
}

module.exports = Tag;
