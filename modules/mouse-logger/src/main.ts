import p from '../package.json';

export const MouseLogger = {
  name: 'mouse-logger',
  version: p.version,
  attach: (e: HTMLElement) => {
    e.addEventListener('mouseenter', () => {
      console.log('Entered');
    });
  },
}