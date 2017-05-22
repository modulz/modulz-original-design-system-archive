# modulz-css

A CSS library of components for building responsive websites and applications.

## Getting started

Paste this line of code into the &lt;head&gt; of your html files.

    <link rel="stylesheet" href="https://s3-us-west-1.amazonaws.com/modulz/modulz-css.min.css">

or install with npm

    npm install modulz-css

## Test page

For now, to get started, you will also need to html starter document. Just create a new
folder, create an index.html file inside, then paste in the code below and open it in a browser.

    <!DOCTYPE html>
    <html class="oy-scroll" lang="en" style="font-size: 62.5%;">
        <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width,initial-scale=1">
            <title>Modulz Test</title>
            <link rel="stylesheet" href="https://s3-us-west-1.amazonaws.com/modulz/modulz-css.min.css">
        </head>
        <body class="ff-sansSerif color-lead tr-optimizeLegibility">
            <section class="Section large blue">
                <div class="Container">
                    <div class="Grid">
                        <div class="GridColumn">
                            <div class="ta-center">
                                <h3 class="fs-7 lh-6 mb-4">This is a heading</h3>
                                <p class="fs-5 lh-4 mb-4">Less than 20kb when minified and gzipped. Responsive, mobile-first grid powered by flexbox. Simple and easy to remember naming convention.</p>
                                <button class="PillButton large white">Get started</button>
                            </div>
                        </div>
                        <div class="GridColumn">
                            <div class="ta-center">
                                <h3 class="fs-7 lh-6 mb-4">This is a heading</h3>
                                <p class="fs-5 lh-4 mb-4">Less than 20kb when minified and gzipped. Responsive, mobile-first grid powered by flexbox. Simple and easy to remember naming convention.</p>
                                <button class="PillButton large white">Get started</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </body>
    </html>

## Things to note

- Less than 20kb when minified and gzipped.
- Responsive, mobile-first grid powered by flexbox.
- Simple and easy to remember naming convention.
- A growing library of beautiful, reusable UI components.
- A set of single-purpose utility classes for quickly assembling layouts.
- From color contrast to ARIA roles, all styles and components meet A11Y accessibility standards.
- All components are constructed from a set of reusable, global styles based on uniform scales.
- Built on PostCSS.

### Naming convention

There are two types of classname in Modulz - component classes and utility classes.

#### Components

Component classes are capitalized and never abbreviated.

    <button class="Button">Button</button>
    <input class="Input" placeholder="Type something">
    <div class="Card">This is a card</div>
    <span class="Badge">New</span>

Component modifiers are very simple. There are no weird underscores, dashes, double
dashes or camel-cased puzzles to figure out. Just type how you think:

    <button class="PillButton blue"></button>
    <input class="Input large">
    <div class="Card interactive"></div>

Some components, like buttons and badges, include semantic variations. There are three
semantic variations - primary, positive and negative. Again, there are no BEM underscores,
dashes or double dashes to figure out. Just prefix the component class with the
semantic word:

    <button class="PrimaryButton">Button</button>
    <button class="PositiveButton">Button</button>
    <button class="NegativeButton">Button</button>

    <span class="PrimaryBadge">New</span>
    <span class="PositiveBadge">New</span>
    <span class="NegativeBadge">New</span>

#### Utilities

Utilities are single-purpose classes for assembling layouts and quickly building
isolated modules. There is a utility for almost every CSS property you can think of.

The general syntax looks like

    propertyName-valueName

So, that translates to

    .float-left                     { float: left; }
    .clear-both                     { clear: both; }
    .color-blue                     { color: blue; }
    .display-block              { display: block; }
    .display-inlineBlock    { display: inline-block; }

Property names consisting of two or more words are abbreviated to their initials:

    .ta-center { text-align: center; }
    .br-m { border-radius: .4rem; }
    .br-repeat { background-repeat: repeat; }
    .lst-disc  { list-style-type: disc; }
    .tr-optimizeLegibility  { text-rendering: optimizeLegibility; }

## License

MIT. You can use Modulz as you see fit.
