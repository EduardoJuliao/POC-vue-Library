import { App, Plugin } from 'vue';

// Import vue components
import * as components from '@/lib-components/index';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// install function executed by Vue.use()
const install: Exclude<Plugin['install'], undefined> = function installMyFirstVueLibrary(app: App) {
  Object.entries(components).forEach(([componentName, component]) => {
    app.component(componentName, component);
  });
  library.add(fas)
  app.component('font-awesome-icon', FontAwesomeIcon)
};

// Create module definition for Vue.use()
export default install;

// To allow individual component use, export components
// each can be registered via Vue.component()
export * from '@/lib-components/index';
