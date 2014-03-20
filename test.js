var test = require('tap').test;
var ghIssues = require('./');

test('No input', function (t) {
    var ghi = ghIssues();

    t.equal(ghi(), 'https://github.com//issues/new', 'Empty input');
    t.end();
});

test('Good input', function (t) {
    var ghi = ghIssues();
    var url = ghi({
        user: 'me',
        repo: 'test',
        title: 'Test',
        body: 'There is something wrong!'
    });

    var wanted = 'https://github.com/me/test/issues/new'
               + '?title=Test'
               + '&body=There%20is%20something%20wrong!';

    t.equal(url, wanted, 'Good input');
    t.end();
});

test('Defaults', function (t) {
    var ghi = ghIssues({
        user: 'me',
        repo: 'test',
        title: 'Test',
        body: 'There is something wrong!'
    });

    var url = ghi();
    var wanted = 'https://github.com/me/test/issues/new'
               + '?title=Test'
               + '&body=There%20is%20something%20wrong!';

    t.equal(url, wanted, 'Defaults pass through');

    var url = ghi({
        title: 'This is a diff issue',
        body: 'I mean it'
    });
    var wanted = 'https://github.com/me/test/issues/new'
               + '?title=This%20is%20a%20diff%20issue'
               + '&body=I%20mean%20it';

    t.equal(url, wanted, 'Override defaults');

    t.end();
});
