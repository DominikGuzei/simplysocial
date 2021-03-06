SimplySocial.filter('timeago', function() {
  return function(date) {

    var seconds = Math.floor((Date.now() - parseInt(date)) / 1000);
    var interval = Math.floor(seconds / 31536000);
    if (interval > 1) { return interval + " years"; }

    interval = Math.floor(seconds / 2592000);
    if (interval > 1) { return interval + " months"; }

    interval = Math.floor(seconds / 86400);
    if (interval > 1) { return interval + " days"; }

    interval = Math.floor(seconds / 3600);
    if (interval > 1) { return interval + "h"; }

    interval = Math.floor(seconds / 60);
    if (interval > 1) { return interval + "m"; }

    return Math.floor(seconds) + "s";
  };
});
