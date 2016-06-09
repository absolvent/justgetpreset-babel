/**
 * Copyright (c) 2016-present, lookly
 * All rights reserved.
 *
 * This source code is licensed under the MIT-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

'use strict';

const gulp = require('gulp');
const esformatter = require('lookly-preset-esformatter');
const eslint = require('lookly-preset-eslint');

gulp.task('format', function () {
  return esformatter.formatGlob('./src/**/*.js');
});

gulp.task('lint', function () {
  return eslint('./src/**/*.js');
});
