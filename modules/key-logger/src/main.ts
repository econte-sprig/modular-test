import p from '../package.json';

export const KeyLogger = {
  name: 'key-logger',
  version: p.version,
  load: async () => {
    return await import('./logger');
  },
}
