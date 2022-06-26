export const themes = {
  default: ``,
  HISTORY_1: `history-1`,
  HISTORY_2: `history-2`,
  HISTORY_3: `history-3`,
};

export const setTheme = (theme = themes.default) => {
  document.body.dataset.theme = theme;
};
