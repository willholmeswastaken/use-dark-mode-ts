# UseDarkMode hook
This is a very simple react hook to detect dark mode and return you a boolean value if it is dark mode or not.

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
