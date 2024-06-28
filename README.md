# Hangman game solution

### credits

[word list source - https://github.com/openethereum/wordlist/](https://github.com/openethereum/wordlist/blob/master/res/wordlist.txt)

## What's this?
Here's a solution from me for the React exercise: https://github.com/nbogie/hangman-game-react-solutions/

Don't look at this until you have written a hangman app and tried to break it into components:

### getting started

Try cloning the project, installing with yarn, running `yarn dev`, and if it all works, making some small edits.  Then back off and take your time to READ the code.

### two branches
There are two branches.  Ignore the animation one - animation is not easy to think about in React.  My basic solution is in main branch.

### deployed
* The main branch is deployed at https://hangman-game-solution.netlify.app/
* (The animation branch is deployed at https://animation-with-framer-motion--hangman-game-solution.netlify.app/, nothing special.  don't get distracted chasing animation at this stage.)

### critique
I should extract the pure functions to a separate file and write automated unit tests for them.

This otherwise resembles a solution I'd be happy with you writing at this stage.

### typescript not javascript

This is in typescript rather than javascript, but that adds nothing fancy - just annotations stating the type of  each function parameter and the return type of some functions.   It's good to get some reading exposure to TypeScript if you've only looked at JavaScript so far.

### setting the targetWord via the URL

This solution is also made somewhat more complex because I wanted to allow the app to inspect its URL and take data (the target word) from a URL query parameter https://example.com?testWord=mississippi like this)
That is the purpose of the call to `useEffect` in HangmanGame
```ts
    useEffect(() => {
        setStartingWordBasedOnQueryParamOrRandom();
    }, []);
```
You can delete that and everything else will still work except that feature.



# Original notes from Vite template

### React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

-   [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
-   [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

-   Configure the top-level `parserOptions` property like this:

```js
export default {
    // other rules...
    parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        project: ["./tsconfig.json", "./tsconfig.node.json"],
        tsconfigRootDir: __dirname,
    },
};
```

-   Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
-   Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
-   Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
