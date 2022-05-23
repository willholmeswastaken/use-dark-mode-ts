# UseDarkMode hook

[![Npm package version](https://badgen.net/npm/v/use-dark-mode-ts)](https://npmjs.com/package/use-dark-mode-ts)
[![Npm package total downloads](https://badgen.net/npm/dt/use-dark-mode-ts)](https://npmjs.com/package/use-dark-mode-ts)
[![Npm package daily downloads](https://badgen.net/npm/dw/use-dark-mode-ts)](https://npmjs.com/package/use-dark-mode-ts)
[![Npm package daily downloads](https://badgen.net/npm/dd/use-dark-mode-ts)](https://npmjs.com/package/use-dark-mode-ts)

This is a very simple react hook to detect dark mode and return you a boolean value if it is dark mode or not.

Download here:
https://www.npmjs.com/package/use-dark-mode-ts

## Getting Started

```
npm i use-dark-mode-ts

OR

yarn add use-dark-mode-ts
```

## Example usage:

```
import { useDarkMode } from 'use-dark-mode-ts';

const ExampleComponent = () => {
    const isDarkMode = useDarkMode();

    return (
        <>
            {
                isDarkMode
                ? (<div>I am in dark mode </div>)
                : (<div>I am not in dark mode </div>)
            }
        </>
    )
}
```
