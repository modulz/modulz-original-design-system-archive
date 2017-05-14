# Bantam

A set of single-purpose CSS classes for every functional CSS property. Reuse this framework on every website ever to build any layout and perform common functional tasks.

## Things to note

- Fully responsive, mobile-first structure.
- Simple and easy to learn naming convention.
- Built on PostCSS.
- Reusable across all projects.
- Less than 15kb when minified and gzipped.
- Browser support down to IE9.

### Naming convention

The general syntax looks like {propertyName-valueName}

    .float-left { float: left; }

When the CSS property consists of two or more words, abbreviate the property name to its initials:

    .ta-center { text-align: center; }
    .lst-disc  { list-style-type: disc; }
    .tr-optimizeLegibility  { text-rendering: optimizeLegibility; }

## Getting started

The simplest and fastest way to get started is to include the minified CSS file in your project. Just add this snippet to the head of your html file:

    <link rel="stylesheet" href="https://s3.amazonaws.com/bantam/bantam.min.css">

Install through npm to take advantage of future updates:

    npm install bantam

## License

MIT. You can use Bantam as you see fit.
# modulz-css
