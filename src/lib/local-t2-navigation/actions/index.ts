export const CONFIG_T2_NAVIGATION = 'CONFIG_T2_NAVIGATION';

export const init = (config) => {
  return {
    type: CONFIG_T2_NAVIGATION,
    config
  };
};

export default {
  CONFIG_T2_NAVIGATION,
  init
};
