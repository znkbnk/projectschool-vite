// Polyfill for String.prototype.replaceAll (needed for react-snap's older Chromium)
if (!String.prototype.replaceAll) {
  String.prototype.replaceAll = function(search, replacement) {
    // Handle regex with global flag
    if (search instanceof RegExp) {
      if (!search.global) {
        throw new TypeError('replaceAll must be called with a global RegExp');
      }
      return this.replace(search, replacement);
    }
    // Handle string search
    return this.split(search).join(replacement);
  };
}