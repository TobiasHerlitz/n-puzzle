# packing

## Getting started
1. Install [bun](https://bun.sh/)
2. `bun install` - Install deps
3. `bun run dev` - Start dev server

## Structure
- Routes are added in /src/routes. Naming should reflect their intended subdirectory in resulting URL
- Components should have their own directory and be exported in an index file.
- Avoid directories with "subcomponents" to prevent an overly nested structure
- Prefer aliased imports. You alias in `tsconfig.json` and a plugin includes them automatically in `vite.config.ts`. The only exception is the css-file holding the global styles.

## The project

### About
- Runtime is [bun](https://bun.sh/)
- Uses vite
- Uses [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) for fast Refresh

## Terminology
| Term     | Description                                                                     |
| ---------| ------------------------------------------------------------------------------- |
| term     | description                                                                     |

### Tech decisions

## Styling

### Vanilla CSS?
I'm starting of with just using vanilla CSS, with CSS modules and CSS variables it looks like I won't need a preprocessor, but we'll see. For now let's cross the dependency bridge if and when we get there

### Global styling
Located in `src/style.global.css`. Might be useful to split its contents into different files in a real project.

### Style global elements
I am striving to style html-elements (like h1, h2, p, etc.) globally to keep the JSX as clean as possible and promote the use of html-elements.

### Why no styled components?
In essence, styled component makes components out of something that could simply be just an html-element with a class.
The downside to this is that it obfuscates which parts of the JSX contains "actual" components with logic as opposed to information about styling. Actually using the wide variety of html-elements add context to both other developers and screen readers, it therefore makes sense to opt for using html-elements front and center.

### Import order
[eslint-plugin-import-order](https://github.com/import-js/eslint-plugin-import/issues/2948) seems to be in a bit of a state and doesn't support eslint v9 yet. Thats why I use [eslint-plugin-simple-sort](https://github.com/lydell/eslint-plugin-simple-import-sort)


### Tests
Tests are co-located with the files that are tested and have the suffix `.test.`

### Requirements

- 🚧 Sidan skall vara responsive och funka i mobil, surfplatta osv.
- 🚧 Brickorna skall vara numrerade från 1 och uppåt
- 🚧 Det skall vara exakt ett tomrum
- 🚧 Brickor flyttas genom att klicka på en bricka i samma kolumn eller rad som den tomma rutan, då flyttas den brickan och alla brickor mellan den och tomrummet ett steg mot den tomma rutan. Så om användaren klickar på femman i exempelwireframen nedan så flyttas både femman och tian ett steg nedåt.
- 🚧 All text skall vara i Google-fonten Open Sans
- 🚧 Brickornas initiala ordning skall vara slumpad
- 🚧 Det skall finnas en knapp för att slumpa om ordningen
- 🚧 Om användaren löser pusslet skall det skrivas ut på skärmen på något lämpligt sätt.


### Before finishing

- 🚧 Remove lodash if i havent used it
- 🚧 Remove the react context boilerplate if it's not used
- 🚧 Remove hooks that aren't used
- 🚧 Add steps to run project if reviewer doesn't have bun installed
- 🚧 Clean up scripts in package.json
- 🚧 Overall look at readme. Fill or remove terminology if applicable. Review and manually test "Getting started"
- 🚧 Write something about decisions with naming. Board vs. BoardEntity
