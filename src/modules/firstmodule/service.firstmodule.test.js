import test from 'tape';
import FirstModuleService from './service.firstmodule.js';

const service = new FirstModuleService;

test('firstModuleService', (t) => {
	t.test('should contain at least 1 and maximum the amount of lyric lines', (assert) => {
		const lyricLines = service.totalLyricLines;
		const lyricLength = service.lyrics.length;
		const validLyriclines = lyricLines && lyricLines < lyricLength;

		assert.ok(validLyriclines, 'the amount of lyric lines are valid');
		assert.end();
	});
});
