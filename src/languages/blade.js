/**
 * Based on https://github.com/highlightjs/highlight.js/blob/main/src/languages/php-template.js
 * and https://github.com/miken32/highlightjs-blade.
 */

export default function (hljs) {
    const COMMENT = hljs.COMMENT(/\{\{--/, /--}}/);

    // {{ $escapedTemplateVariable }}
    const ESCAPED_TEMPLATE_VARIABLE = {
        begin: /(?<begin>\{\{)/,
        beginScope: 'template-variable',
        end: /(?<end>}})/,
        endScope: 'template-variable',
        subLanguage: 'php',
    };

    // {!! $hello !!}
    const UNESCAPED_TEMPLATE_VARIABLE = {
        begin: /(?<begin>\{!!)/,
        beginScope: 'template-variable',
        end: /(?<end>!!})/,
        endScope: 'template-variable',
        subLanguage: 'php',
    }

    // @php $a = 1 @endphp
    const MULTI_LINE_PHP_DIRECTIVE = {
        begin: /(?<begin>@php)/,
        beginScope: 'keyword',
        end: /(?<end>@endphp)/,
        endScope: 'keyword',
        subLanguage: 'php',
    };

    // :blade-value="$phpVar"
    const BLADE_COMPONENT_ATTRIBUTE = {
        begin: /(?<=\s)(?<begin>:[\w-]+=")/,
        excludeBegin: true,
        end: /(?<end>")/,
        excludeEnd: true,
        subLanguage: 'php',
    };

    // @something
    const CATCH_ALL_DIRECTIVE = {
        scope: 'keyword',
        match: /(?<match>@[a-zA-Z]+)/,
    };

    // @foreach ($list as $item)
    // or
    // @foreach($list as $item)
    const STATEMENT_AFTER_BLADE_DIRECTIVES = {
        begin: /(?<=@[a-zA-Z]+\s?)(?<begin>\()/,
        excludeBegin: true,
        end: /(?<end>\))/,
        excludeEnd: true,
        subLanguage: 'php',
    };

    return {
        name: 'Blade',
        case_insensitive: true,
        subLanguage: 'php-template',
        contains: [
            COMMENT,
            ESCAPED_TEMPLATE_VARIABLE,
            UNESCAPED_TEMPLATE_VARIABLE,
            MULTI_LINE_PHP_DIRECTIVE,
            BLADE_COMPONENT_ATTRIBUTE,
            CATCH_ALL_DIRECTIVE,
            STATEMENT_AFTER_BLADE_DIRECTIVES
        ],
    };
}
