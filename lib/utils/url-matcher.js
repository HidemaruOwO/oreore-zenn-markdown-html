"use strict";
// Thanks: https://github.com/forem/forem/blob/d2d9984f28b1d0662f2a858b325a0e6b7a27a24c/app/liquid_tags/gist_tag.rb
Object.defineProperty(exports, "__esModule", { value: true });
exports.isYoutubeUrl = exports.extractYoutubeVideoParameters = exports.isJsfiddleUrl = exports.isCodepenUrl = exports.isCodesandboxUrl = exports.isStackblitzUrl = exports.isTweetUrl = exports.isGistUrl = void 0;
function isGistUrl(url) {
    return /^https:\/\/gist\.github\.com\/([a-zA-Z0-9](-?[a-zA-Z0-9]){0,38})\/([a-zA-Z0-9]){1,32}(\/[a-zA-Z0-9]+)?(\?file=.+)?$/.test(url);
}
exports.isGistUrl = isGistUrl;
function isTweetUrl(url) {
    return /^https:\/\/twitter\.com\/[a-zA-Z0-9_-]+\/status\/[a-zA-Z0-9?=&\-_]+$/.test(url);
}
exports.isTweetUrl = isTweetUrl;
function isStackblitzUrl(url) {
    return /^https:\/\/stackblitz\.com\/[a-zA-Z0-9\-_/.@?&=%]+$/.test(url);
}
exports.isStackblitzUrl = isStackblitzUrl;
function isCodesandboxUrl(url) {
    return /^https:\/\/codesandbox\.io\/embed\/[a-zA-Z0-9\-_/.@?&=%]+$/.test(url);
}
exports.isCodesandboxUrl = isCodesandboxUrl;
function isCodepenUrl(url) {
    return /^https:\/\/codepen\.io\/[a-zA-Z0-9]/.test(url);
}
exports.isCodepenUrl = isCodepenUrl;
function isJsfiddleUrl(url) {
    return /^(http|https):\/\/jsfiddle\.net\/[a-zA-Z0-9_,/-]+$/.test(url);
}
exports.isJsfiddleUrl = isJsfiddleUrl;
var youtubeRegexp = /^(http(s?):\/\/)?(www\.)?youtu(be)?\.([a-z])+\/(watch(.*?)([?&])v=)?(.*?)(&(.)*)?$/;
function extractYoutubeVideoParameters(youtubeUrl) {
    var match = youtubeUrl.match(youtubeRegexp);
    if (match && match[9].length == 11) {
        var urlParams = new URLSearchParams(youtubeUrl);
        var start = urlParams.get('t');
        return {
            videoId: match[9],
            start: start === null || start === void 0 ? void 0 : start.replace('s', ''), // https://www.youtube.com/watch?v=ABCSDGG&t=19101s => 19101
        };
    }
    else {
        return undefined;
    }
}
exports.extractYoutubeVideoParameters = extractYoutubeVideoParameters;
function isYoutubeUrl(url) {
    return youtubeRegexp.test(url);
}
exports.isYoutubeUrl = isYoutubeUrl;
