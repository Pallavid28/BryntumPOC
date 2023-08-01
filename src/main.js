import Vue from 'vue';
import App from './App.vue';

import Button from './components/Button.vue';
// import { GridFeatureManager, StringHelper, DateHelper, ResourceTimeRangeStore, ResourceTimeRangeModel, SchedulerResourceStore, SchedulerEventStore, Scheduler } from '@bryntum/schedulerpro';

// Vue.component('Scheduler', Scheduler);
// Vue.component('StringHelper', StringHelper);
// Vue.component('GridFeatureManager', GridFeatureManager);
// Vue.component('DateHelper', DateHelper);
// Vue.component('ResourceTimeRangeStore', ResourceTimeRangeStore);
// Vue.component('ResourceTimeRangeModel', ResourceTimeRangeModel);
// Vue.component('SchedulerResourceStore', SchedulerResourceStore);
// Vue.component('SchedulerEventStore', SchedulerEventStore);

Vue.config.productionTip = false;

Vue.component('Button', Button);

new Vue({
    render : h => h(App)
}).$mount('#app');
