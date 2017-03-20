export const WINDOW_RESIZE = 'T2.WINDOW_RESIZE'

export const windowResize = (width,height) => {
  return {
    type: WINDOW_RESIZE,
    width,
    height
  };
};