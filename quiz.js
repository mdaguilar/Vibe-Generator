const mathjs = require('mathjs');
const playlist_keys = require('./playlists.json');

const result_values = {
	1: "lofi",
	2: "pop",
	3: "rap",
	4: "country",
	5: "rock"
};

module.exports = {
	// score = array
	getPlaylistLink: (score) => {
		let median_result = Math.floor(mathjs.median(score));

		if (median_result) {
			return playlist_keys[result_values[median_result]];
		}
		return undefined;
	}
}