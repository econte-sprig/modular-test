import { MouseLogger } from "@econte-sprig/mouse-logger";
import { ClickLogger } from "@econte-sprig/click-logger";
import { KeyLogger } from "@econte-sprig/key-logger";
import { ModuleRegistry, attachLoggers } from "@econte-sprig/core";

ModuleRegistry.RegisterModules(MouseLogger, ClickLogger, KeyLogger);

export default attachLoggers;
