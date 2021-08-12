import singleSpaVue from 'single-spa-vue';
import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
var routes = require('./router/routes').routes;

Vue.config.productionTip = false;
Vue.use(VueRouter);
const router = new VueRouter({
  base: '/',
  mode: 'history',
  routes,
});

window.router = router;

const vueLifecycles = singleSpaVue({
  Vue,
  appOptions: {
    el: '',
    router,
    render(h) {
      return h(App, {
        props: {
          // single-spa props are available on the "this" object. Forward them to your component as needed.
          // https://single-spa.js.org/docs/building-applications#lifecyle-props
          // if you uncomment these, remember to add matching prop definitions for them in your App.vue file.
          /*
          name: this.name,
          mountParcel: this.mountParcel,
          singleSpa: this.singleSpa,
          */
        },
      });
    },
  },
});

export const bootstrap = vueLifecycles.bootstrap;
export const mount = vueLifecycles.mount;
// export function mount(props) {
//   return vueLifecycles.mount(props);
// }
export const unmount = vueLifecycles.unmount;

// function createDomElement() {
//   // Make sure there is a div for us to render into
//   let el = document.getElementById('app4');

//   if (!el) {
//     el = document.createElement('div');
//     el.id = 'app4';
//     document.body.appendChild(el);
//   }
//   return el;
// }
