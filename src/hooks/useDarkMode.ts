import { useEffect, useState } from 'react';

/**
 * A simple hook to retrieve the current value of dark mode.
 *
 * @return   {boolean}
 *           if dark mode then true else false
 *
 * @example
 *   const ExampleComponent = () => {
 *     const isDarkMode = useDarkMode();
 *
 *     return (
 *       <>
 *         {
 *            isDarkMode
 *              ? (<div>I am in dark mode </div>)
 *              : (<div>I am not in dark mode </div>)
 *          }
 *       </>
 *      )
 *    }
 */

export const useDarkMode = (): boolean => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  useEffect(() => {
    setIsDarkMode(window.matchMedia('(prefers-color-scheme: dark)').matches);

    const onChangeEvent: (e: MediaQueryListEvent) => void = (e) => {
      const colorScheme = e.matches ? 'dark' : 'light';
      setIsDarkMode(colorScheme === 'dark');
    };

    window
      .matchMedia('(prefers-color-scheme: dark)')
      .addEventListener('change', onChangeEvent);

    return () => {
      window
        .matchMedia('(prefers-color-scheme: dark)')
        .removeEventListener('change', onChangeEvent);
    };
  }, []);

  return isDarkMode;
};
