export interface Module {
  name: string;
  version: string;
}

export const CLICK_LOGGER_NAME = 'click-logger';
export const MOUSE_LOGGER_NAME = 'mouse-logger';
export const KEY_LOGGER_NAME = 'key-logger';

export interface ClickLogger extends Module {
  name: typeof CLICK_LOGGER_NAME;
  attach: (elem: HTMLElement) => void;
}

export interface MouseLogger extends Module {
  name: typeof MOUSE_LOGGER_NAME;
  attach: (elem: HTMLElement) => void;
}

export interface KeyLogger extends Module {
  name: typeof KEY_LOGGER_NAME;
  load: () => Promise<{ attach: (elem: HTMLElement) => void }>;
}
