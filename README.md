# packing

## Getting started
I've developed with bun:

1. Install [bun](https://bun.sh/)
2. `bun install` - Install deps
3. `bun run dev` - Start dev server

But npm seems to work as well:
1. `npm install`
2. `npm run dev`

## The project

### Decisions
- I normally try to stay away from classes in otherwise functional react projects but decided to use classes for game objects in this case.
I felt that modelling in games fit oop fairly well in the sense that entities have state that you then want to affect in different ways.
The alternative as I saw it was to use a bunch of utils-function that took `Board`- and `Tile`-objects and that feels a bit too decoupled.
- Board != BoardEntity - I decided to suffix the game object with "Entity" to distinguish from the React components with the same name.
- I have used vanilla css and leveraging CSS modules and CSS variables. Modern css is really plenty, especially since nesting was introduced [caniuse](https://caniuse.com/?search=css-nesting). I feel that tools like styled components obfuscates which parts of the JSX contains "actual" components with logic as opposed to information about styling. Using css-classes separates styling from logic and in vy view reduces overhead.

### Terminology
| Term      | Description                                                                                             |
| --------- | --------------------------------------------------------------------------------------------------------|
| board     | The game board holding all tiles                                                                        |
| tile      | Individual tiles in a game board                                                                        |
| entity    | Suffix added to distinguish between the object holding game logic and rendering (Board vs. BoardEntity) |


### About
- Runtime is [bun](https://bun.sh/)
- Uses vite
- Uses [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) for fast Refresh


### Tests
Tests are co-located with the files that are tested and have the suffix `.test.`

### Requirements

- 🚧 Sidan skall vara responsive och funka i mobil, surfplatta osv.
- ✅ Brickorna skall vara numrerade från 1 och uppåt
- ✅ Det skall vara exakt ett tomrum
- ✅ Brickor flyttas genom att klicka på en bricka i samma kolumn eller rad som den tomma rutan, då flyttas den brickan och alla brickor mellan den och tomrummet ett steg mot den tomma rutan. Så om användaren klickar på femman i exempelwireframen nedan så flyttas både femman och tian ett steg nedåt.
- ✅ All text skall vara i Google-fonten Open Sans
- ✅ Brickornas initiala ordning skall vara slumpad
- ✅ Det skall finnas en knapp för att slumpa om ordningen
- ✅ Om användaren löser pusslet skall det skrivas ut på skärmen på något lämpligt sätt.


### Before finishing

- ✅ Remove the react context boilerplate if it's not used
- ✅ Remove hooks that aren't used
- ✅ Add steps to run project if reviewer doesn't have bun installed
- ✅ Write something about decisions with naming. Board vs. BoardEntity
- 🚧 Clean up scripts in package.json
- 🚧 Overall look at readme. Fill or remove terminology if applicable.
- 🚧 Remove commented out vars in global.css
