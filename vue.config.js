module.exports = {
  devServer: {
    open: true,
  },
  css: {
    loaderOptions: {
      sass: {
        /*
         * 1. Import node modules.
         * 2. Import global variables, mixins, etc.
         */
        data: `
          @import 'ceaser-easing';
          @import '@/styles/main.scss';
        `,
      },
    },
  },
};
