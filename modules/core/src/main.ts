import { ModuleRegistry } from "./module-registry";

export * from "./module-registry";

export const attachLoggers = (e: HTMLElement) => {
  const cl = ModuleRegistry.ClickLogger();
  if (cl) cl.attach(e);

  const ml = ModuleRegistry.MouseLogger();
  if (ml) ml.attach(e);

  const kl = ModuleRegistry.KeyLogger();
  if (kl) {
    let loaded = false;
    e.addEventListener('click', async () => {
      if (!loaded) {
        loaded = true;
        const m = await kl.load();
        m.attach(e);
      }
    });
  }
};
