var GH = 'https://github.com/';

module.exports = function (defaults) {
defaults = defaults || {};

    return function (options) {
        options = options || {};

        if (typeof options.user !== 'string') options.user = defaults.user;
        if (typeof options.repo !== 'string') options.repo = defaults.repo;
        if (typeof options.title !== 'string') options.title = defaults.title;
        if (typeof options.body !== 'string') options.body = defaults.body;

        var url = GH;

        // Not sure how best to handle missing user or repo right now.
        if (options.user) url += options.user;
        if (options.repo) url += '/' + options.repo;

        url += '/issues/new';

        if (options.title || options.body) {
            url += '?title=' + encodeURIComponent(options.title) +
                   '&body=' + encodeURIComponent(options.body);
        }

        return url;
    }
};
