// 週番号の取得
var Koyomi = require(global.minify ? '../lib/minify' : '..');
var get = Koyomi.getDateArray;
var eq = require('assert').deepEqual;

eq(get('12/29-1/3'), [1229, 1230, 1231, 101, 102, 103]);
eq(get('12/29-1/3, 8/16-8/19'), [1229, 1230, 1231, 101, 102, 103, 816, 817, 818, 819]);
eq(get('4/29-5/2'), [429, 430, 501, 502]);
eq(get('2/29-3/1'), [229, 301]);
eq(get('1/2, 1/5, 1/10'), [102, 105, 110]);