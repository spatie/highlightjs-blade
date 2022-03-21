
[<img src="https://github-ads.s3.eu-central-1.amazonaws.com/support-ukraine.svg?t=1" />](https://supportukrainenow.org)

# Blade language definition for Highlight.js

Syntax implementation of [Laravel's](https://laravel.com/)'s Blade language
for [highlight.js](https://github.com/highlightjs/highlight.js).

## Support us

[<img src="https://github-ads.s3.eu-central-1.amazonaws.com/highlightjs-blade.jpg?t=1" width="419px" />](https://spatie.be/github-ad-click/highlightjs-blade)

We invest a lot of resources into creating [best in class open source packages](https://spatie.be/open-source). You can
support us by [buying one of our paid products](https://spatie.be/open-source/support-us).

We highly appreciate you sending us a postcard from your hometown, mentioning which of our package(s) you are using.
You'll find our address on [our contact page](https://spatie.be/about-us). We publish all received postcards
on [our virtual postcard wall](https://spatie.be/open-source/postcards).

## Installation

This package can be installed from NPM using `npm` or `yarn`:

```bash
yarn install highlightjs-blade
```

## Usage

Simply include the Highlight.js library in your webpage or Node app, then load this module.

### With Node or another build system

If you're using Node / Webpack / Rollup / Browserify, etc, simply require the language module, then register it with
Highlight.js.

```javascript
var hljs = require('highlightjs');
var hljsBlade = require('highlightjs-blade');

hljs.registerLanguage("blade", hljsBlade);
hljs.initHighlightingOnLoad();
```

### Static website or simple usage

Simply load the module after loading Highlight.js. You'll use the minified version found in the `dist` directory. This
module is just a CDN build of the language, so it will register itself as the Javascript is loaded.

```html

<script type="text/javascript" src="/path/to/highlight.min.js"></script>
<script
        type="text/javascript" charset="UTF-8"
        src="/path/to/highlightjs-blade/dist/blade.min.js"
></script>
<script type="text/javascript">
    hljs.initHighlightingOnLoad();
</script>
```

### Using directly from the UNPKG CDN

```html

<script
        type="text/javascript"
        src="https://unpkg.com/highlightjs-blade/dist/blade.min.js"
></script>
```

- More info: <https://unpkg.com>

### React

You need to import both Highlight.js and third-party language like Blade:

```js
import React, {Component} from 'react';
import 'highlight.js/scss/darcula.scss'; // your favourite theme
import blade from './blade'; // TODO: Figure out exact path in package
import hljs from 'highlight.js';

hljs.registerLanguage('blade', blade);

class Highlighter extends Component {
    constructor(props) {
        super(props);
        hljs.initHighlightingOnLoad();
    }

    render() {
        let {children} = this.props;
        return
        {
            <pre ref={(node) => this.node = node}>
                <code className="blade">
                    {children}
                </code>
            </pre>
        }
    }
}

export default Highlighter;
```

## Changelog

Please see [CHANGELOG](CHANGELOG.md) for more information on what has changed recently.

## Contributing

Please see [CONTRIBUTING](https://github.com/spatie/.github/blob/main/CONTRIBUTING.md) for details.

### Building

⚠️ These instructions are only for contributing to this package. If you just want to use the language definition, please
refer to the [Usage](#usage) section above.

To build a distribution version of this module you need to use tools provided by Highlight.js. Please refer to the [language contribution guide](https://github.com/highlightjs/highlight.js/blob/main/extra/3RD_PARTY_QUICK_START.md) for more details on building this package.

1. Checkout `highlightjs/highlight.js` from GitHub.
2. Create the `extra` folder in the root directory, if missing.
3. In the `extra` directory create a `blade` subdirectory and put the contents of this repository there.
4. Run build tools for the `cdn` target and you should see the `blade` language module being build alongside
   Highlight.js itself:

```
node ./tools/build.js -t cdn

...
Building extra\blade\dist/blade.min.js.
```

## Security Vulnerabilities

Please review [our security policy](../../security/policy) on how to report security vulnerabilities.

## Credits

- [Alex Vanderbist](https://github.com/alexvanderbist)
- [All Contributors](../../contributors)

## License

The MIT License (MIT). Please see [License File](LICENSE.md) for more information.
