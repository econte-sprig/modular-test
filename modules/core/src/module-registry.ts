import { CLICK_LOGGER_NAME, ClickLogger, KEY_LOGGER_NAME, KeyLogger, MOUSE_LOGGER_NAME, Module, MouseLogger } from "./types";
import p from '../package.json';
import semver from 'semver';

const major = semver.major(p.version);
const minor = semver.minor(p.version);

let registeredModules: Module[] = [];
export const ModuleRegistry = {
  RegisterModules: (...modules: Module[]) => {
    modules.forEach((m) => {
      if (major !== semver.major(m.version) || minor !== semver.minor(m.version)) {
        throw new Error('Version mismatch');
      }
    });
    console.log('Registered version: ' + p.version + ' / ' + modules.map((m) => m.name).join(', '));
    registeredModules = modules;
  },

  ClickLogger: () => {
    return registeredModules.find((m) => m.name === CLICK_LOGGER_NAME) as (ClickLogger | undefined);
  },

  MouseLogger: () => {
    return registeredModules.find((m) => m.name === MOUSE_LOGGER_NAME) as (MouseLogger | undefined);
  },

  KeyLogger: () => {
    return registeredModules.find((m) => m.name === KEY_LOGGER_NAME) as (KeyLogger | undefined);
  },
};
