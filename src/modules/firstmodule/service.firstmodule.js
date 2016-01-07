// Import external modules
import _ from 'lodash';

/**
 * The amount of lyriclines we want
 * @type {number}
 * @memberOf module:module-first-module.first-module-service
 */
let totalLyricLines = 5;

/**
 * A nice song split into an array
 * @type {Array}
 * @memberOf module:module-first-module.first-module-service
 */
const lyrics = [
	'Where it began,',
	'I can\'t begin to knowin\'',
	'But then I know it\'s growing strong',
	'Was in the spring',
	'And spring became the summer',
	'Who\'d have believed you\'d come along.',
	'Hands, touchin\' hands',
	'Reachin\' out, touchin\' me, touchin\' you',
	'Sweet Caroline',
	'Good times never seemed so good',
	'I\'ve been inclined',
	'To believe they never would',
	'But now I...',
	'...look at the night',
	'And it don\'t seem so lonely',
	'We fill it up with only two.',
	'And when I hurt,',
	'Hurtin\' runs off my shoulders',
	'How can I hurt when holding you?',
	'Warm, touchin\' warm',
	'Reachin\' out, touchin\' me, touchin\' you',
	'Sweet Caroline',
	'Good times never seemed so good',
	'I\'ve been inclined,',
	'To believe they never would',
	'Oh, no, no',
	'Sweet Caroline',
	'Good times never seemed so good',
	'Sweet Caroline,',
	'I believe they never could',
	'Sweet Caroline',
	'Good times never seemed so good',
	'Sweet Caroline...'
];

/**
 * @namespace first-module-service
 * @desc The first module service does jack shit
 * @memberOf module:module-first-module
 */
class FirstModuleService {

	/**
	 * This will get the total lyric lines
	 * @return {number} The amount of lyric lines
	 * @memberOf module:module-first-module.first-module-service
	 */
	get totalLyricLines() {
		return totalLyricLines;
	}

	/**
	 * This will set the total lyric lines
	 * @param {number} The amount of lyric lines
	 * @memberOf module:module-first-module.first-module-service
	 */
	set totalLyricLines(value) {
		totalLyricLines = value;
	}

	/**
	 * Get the lyrics
	 * @return {Array} The array with lyric lines
	 * @memberOf module:module-first-module.first-module-service
	 */
	get lyrics() {
		return lyrics;
	}

	/**
	 * This function gets a random part of the song
	 * @return {string} A random part of the song
	 * @memberOf module:module-first-module.first-module-service
	 */
	randomSongPart() {
		let songPart = [];

		_.times(totalLyricLines, () => {
			songPart.push(_.sample(lyrics));
		});

		return songPart.join('\n');
	}
}

export default FirstModuleService;
