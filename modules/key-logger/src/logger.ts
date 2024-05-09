export const attach = (e: HTMLElement) => {
  console.log('key logger attached');
  e.addEventListener('keydown', (k) => {
    console.log(k.key);
  });
};
