<!-- Application -->
<template>
    <div id="container">
        <!-- BryntumDemoHeader component is used for Bryntum example styling only and can be removed -->
        <bryntum-scheduler-pro
            v-bind="schedulerConfig"
        />
    </div>
</template>

<script>

import { BryntumSchedulerPro  } from '@bryntum/schedulerpro-vue';
import { schedulerConfig } from '@/AppConfig2';

export default {
    name : 'App',

    components : {
        BryntumSchedulerPro
    },

    data() {
        return { schedulerConfig };
    },

};
</script>

<style lang="scss">
@import './App.scss';
@import './App.css';
</style>

