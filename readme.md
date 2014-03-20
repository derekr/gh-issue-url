# gh-issue-url

#### Create links for pre-populating new issue forms on github.

I didn't know you could create links to pre-populate new github issue forms.
Did you?!

Should have guessed. You're pretty smart lookin'. Anyway I made this for you
so it's a little easier to generate said new issue links.

# Install

```
npm install --save gh-issue-url
```

# Usage

```js
var gh = require('gh-issue-url')({
        user: 'derekr', // target user
        repo: 'gh-issue-url' // target repo
    });

gh(); // https://github.com/derekr/gh-issue-url

gh({
    title: 'Something broke',
    body: 'You should fix it'
}); // https://github.com/derekr/gh-issue-url?title=Something%20broke&body=Your%20should%20fix%20it
```

The module is a factory that can take `defaults` so if your `user` and `repo`
or `title` or `body` don't change often or at all you can pass those in
when creating the `gh` function. All properties are overridable for each `gh`
call though.

```js
gh({
    title: 'Something broke',
    body: 'You should fix it',
    user: 'notme'
});
// https://github.com/notme/gh-issue-url?title=Something%20broke&body=Your%20should%20fix%20it
```

Would create a link to `notme`'s fork.

# Methods

## createGh = require('gh-issue-url');

This function will create a new gh issue url function. You can pass in default
values that will be used in all gh issue url funciton calls.

```
var gh = createGh({
    user: '',
    repo: '',
    title: '',
    body: ''
});
```

## gh()

Has a similar interface to createGh, but instead returns a string of the
new issue url. You can override defaults set when creating this function.

```
var url = gh({
    user: 'Hey',
    repo: 'Yo',
    title: 'Bye',
    body: 'Lata'
});
```

![Octocat](http://media.giphy.com/media/t2Ugbz2ycyWnm/giphy.gif)
