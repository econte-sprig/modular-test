import p from '../package.json';

export const ClickLogger = {
  name: 'click-logger',
  version: p.version,
  attach: (e: HTMLElement) => {
    e.addEventListener('click', () => {
      console.log('Clicked');
    });
  },
}