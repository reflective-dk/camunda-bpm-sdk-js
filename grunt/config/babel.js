/*
 * Copyright Camunda Services GmbH and/or licensed to Camunda Services GmbH
 * under one or more contributor license agreements. See the NOTICE file
 * distributed with this work for additional information regarding copyright
 * ownership. Camunda licenses this file to you under the Apache License,
 * Version 2.0; you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

module.exports = function(config) {
  'use strict';
  config = config || {};
  return {
    options: {presets: [[
      '@babel/preset-env',
      {
        'targets': 'ie 11, last 1 chrome version, last 1 firefox version, last 1 edge version',
        'forceAllTransforms': true
      }
    ]]
    },
    dist:{
      files: {
        'dist/camunda-bpm-sdk.js': 'dist/camunda-bpm-sdk.js',
        'dist/camunda-bpm-sdk-type-utils.js': 'dist/camunda-bpm-sdk-type-utils.js',
        'dist/camunda-bpm-sdk-angular.js': 'dist/camunda-bpm-sdk-angular.js'
      }
    }
  };
};

