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

**"Skriv gärna några rader om hur lång tid det tog att implementera, eventuella antaganden samt brister du själv kan se, vad du är mest nöjd med tekniskt etc."**

- Det tog några timmar här och där under helgen, mellan 8-10 timmar totalt skulle jag tro. Jag gjorde det dock i rätt maklig takt och
passade på att prova saker.
- Det finns ingen övre gräns för hur många rader/kolumner man kan använda. En Board med låg bredd och hög höjd kan ex resultera i scroll. Jag har heller inte särskilt hanterat hur Tiles renderas om numret i Tiles är fler än två siffror, alltså 100 och uppåt. Det skulle dock
bli ganska mastiga n-pussel. Man skulle kunna sätta gränser på antal Tiles och bredd+höjd i constructorn men eftersom det inte kan ändras i runtime har jag utelämnat det.
- Mer tankar och ev. diskussionspunkter under decisions och further development.


### Decisions
- I normally try to stay away from classes in otherwise functional react projects but decided to use classes for game objects in this case.
I felt that modelling in games fit oop fairly well in the sense that entities have state that you then want to affect in different ways.
The alternative as I saw it was to use a bunch of utils-function that took `Board` and `Tile`-objects and that feels a bit too decoupled.
- Board != BoardEntity - I decided to suffix the game object with "Entity" to distinguish from the React components with the same name.
- I have used vanilla css and leveraging CSS modules and CSS variables. Modern css is really plenty, especially since nesting was
introduced [caniuse](https://caniuse.com/?search=css-nesting). I feel that tools like styled components obfuscates which parts of the JSX
contains "actual" components with logic as opposed to information about styling. Using css-classes separates styling from logic and in my view reduces overhead.
- The main options I considered when storing the slots was to either use a flat array or an array of arrays (to create a grid).
I decided on just using a flat array and stepping through rows with the help of the board width. I feel that this made it easier
to for instance validate solutions without adding too much complexity to the shifting operations. I also thought that this approach
would let me use the remainder operator but alas, I didn't have to in the end.
- I have added a "Fuska" button that sets the board so that its one step away from completion. It was useful when testing the
CelebrationOverlay and `isSolved`-method. I kept it in because it might be nice when reviewing.
- It would be nice to highlight all tiles set to be moved when hovering over one, this would require quite a bit more logic and
a departure from the simple ":hover" though
- I had some issues with triggering rerenders on changes in the game objects. To avoid explicit calls to rerender or duplicating state I decided to
try [mobx](https://mobx.js.org/README.html). That is why some components are wrapped in the `observer`-function.
- I added the Board and Tile classes when I first started. In the end, I realized I might not need a class for Tiles with the current functionality
since they just hold a single value and a pair of methods. The methods could exist on the Board-class instead.
It is nice to be able to just call shift on each Tile though and it's a good base to extend from, like adding a getCoordinates() method if needed.
I ended up leaving it for these reasons but it was a 50/50-decision.

### Further development
- It would be nice to animate the movements. It's probably difficult to do with the current grid layout. I'd wager that you
would have to position the tiles absolutely and grab the x, y coordinates from each tile instance.
- You could store a hash of the puzzle state in the url and update it after every move. That would enable the user share state with others.

### Terminology
| Term      | Description                                                                                              |
| --------- | -------------------------------------------------------------------------------------------------------- |
| board     | The game board holding all slots                                                                         |
| tile      | Individual tiles in a game board                                                                         |
| entity    | Suffix added to distinguish between the object holding game logic and rendering (Board vs. BoardEntity)  |
| slot      | The positions in a board. Can be either a Tile or null                                                   |
| gap       | The single null slot on the board needed to be able to move the Tiles around                             |


### About
- Runtime is [bun](https://bun.sh/)
- Uses vite
- Uses [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) for fast Refresh


### Tests
Tests are co-located with the files that are tested and have the suffix `.test.`

### Requirements

- ✅ Sidan skall vara responsive och funka i mobil, surfplatta osv.
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
- ✅ Clean up scripts in package.json
- ✅ Remove commented out vars in global.css
- ✅ Overall look at readme. Fill or remove terminology if applicable.
