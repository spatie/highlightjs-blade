/**
 * Based on https://github.com/highlightjs/highlight.js/blob/main/src/languages/php-template.js
 * and https://github.com/miken32/highlightjs-blade.
 */

module.exports = function (hljs) {
    const COMMENT = hljs.COMMENT(/\{\{--/, /--\}\}/);

    // {{ $escapedTemplateVariable }}
    const ESCAPED_TEMPLATE_VARIABLE = {
        className: 'template-variable',
        begin: /\{\{/,
        starts: {
            end: /\}\}/,
            returnEnd: true,
            subLanguage: 'php',
        },
    };

    // `}}` - just in case we're highlighting a partial file
    const ESCAPED_TEMPLATE_VARIABLE_END = {
        className: 'template-variable',
        begin: /\}\}/,
    };

    // {{{ $likeThis }}}
    const ESCAPED_TEMPLATE_VARIABLE_WITH_TRIPLE_CURLY_BRACKETS = {
        className: 'template-variable',
        begin: /\{\{\{/,
        starts: {
            end: /\}\}\}/,
            returnEnd: true,
            subLanguage: 'php',
        },
    };

    // `}}}` - just in case we're highlighting a partial file
    const ESCAPED_TEMPLATE_VARIABLE_WITH_TRIPLE_CURLY_BRACKETS_END = {
        className: 'template-variable',
        begin: /\}\}\}/,
    };

    // {!! $hello !!}
    const UNESCAPED_TEMPLATE_VARIABLE = {
        className: 'template-variable',
        begin: /\{!!/,
        starts: {
            end: /!!\}/,
            returnEnd: true,
            subLanguage: 'php',
        },
    }

    const UNESCAPED_TEMPLATE_VARIABLE_END = {
        className: 'template-variable',
        begin: /!!\}/,
    };

    // @php($a = 2)
    const SINGLE_LINE_PHP_DIRECTIVE = {
        className: 'template-tag',
        begin: /@php\(/,
        starts: {
            end: /\)/,
            returnEnd: true,
            subLanguage: 'php',
        },
        relevance: 15,
    };

    // @php $a = 1 @endphp
    const MULTI_LINE_PHP_DIRECTIVE = {
        className: 'template-tag',
        begin: /@php/,
        starts: {
            end: /@endphp/,
            returnEnd: true,
            subLanguage: 'php',
        },
        relevance: 10,
    };

    // :blade-value="$phpVar"
    const BLADE_COMPONENT_ATTRIBUTE = {
        className: 'attr',
        begin: /:[\w-]+="/,
        starts: {
            end: /"(?=\s|\n|\/)/,
            returnEnd: true,
            subLanguage: 'php',
        },
    };

    // @something
    const CATCH_ALL_DIRECTIVE = {
        begin: /@\w+/,
        end: /\W/,
        excludeEnd: true,
        className: 'template-tag',
    };

    return {
        name: 'Blade',
        case_insensitive: true,
        subLanguage: 'php-template',
        contains: [
            COMMENT,
            ESCAPED_TEMPLATE_VARIABLE,
            ESCAPED_TEMPLATE_VARIABLE_END,
            ESCAPED_TEMPLATE_VARIABLE_WITH_TRIPLE_CURLY_BRACKETS,
            ESCAPED_TEMPLATE_VARIABLE_WITH_TRIPLE_CURLY_BRACKETS_END,
            UNESCAPED_TEMPLATE_VARIABLE,
            UNESCAPED_TEMPLATE_VARIABLE_END,
            SINGLE_LINE_PHP_DIRECTIVE,
            MULTI_LINE_PHP_DIRECTIVE,
            BLADE_COMPONENT_ATTRIBUTE,
            CATCH_ALL_DIRECTIVE
        ],
    };
}
