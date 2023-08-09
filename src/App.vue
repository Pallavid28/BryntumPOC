<!-- Application -->
<template>
    <div id="container">
        <!-- BryntumDemoHeader component is used for Bryntum example styling only and can be removed -->
        <bryntum-scheduler-pro
            ref="scheduler"
            v-bind="schedulerConfig"
        />
    </div>
</template>

<script>

import { BryntumSchedulerPro  } from '@bryntum/schedulerpro-vue';
import { ResourceTimeRanges, Override } from '@bryntum/schedulerpro';
import { schedulerConfig } from '@/AppConfig2';

// Use it until https://github.com/bryntum/support/issues/4922 is fixed
class ResourceTimeRangesOverride {
  static get target() {
    return {
      class: ResourceTimeRanges,
      product: 'schedulerpro',
      minVersion : '5.5.0',
      maxVersion : '5.6.0'
    }
  }

  // Provides renderer for ResourceTimeRanges
  onEventDataGenerated(renderData) {
    const { eventRecord } = renderData;

    // Calls node_modules/@bryntum/schedulerpro/source/lib/Scheduler/feature/base/ResourceTimeRangesBase.js::onEventDataGenerated
    this._overridden.onEventDataGenerated.call(this, renderData);

    // Calls node_modules/@bryntum/schedulerpro/source/lib/Scheduler/feature/ResourceTimeRanges.js::shouldInclude
    // If true, eventRecord is a ResourceTimeRange
    if (this.shouldInclude(eventRecord)) {
      // Remove text
      delete renderData.eventContent.text;

      // Add html
      renderData.eventContent.html = `
        <div class="reservation">
          <div class="reservation-amount">${eventRecord.reservationAmount}</div>
          <div class="reservation-price">${eventRecord.name}</div>
          <div class="reservation-minNight">${eventRecord.minNight}</div>
        </div>
      `;
    }
  }
}

Override.apply(ResourceTimeRangesOverride);

export default {
    name : 'App',

    components : {
        BryntumSchedulerPro
    },

    data() {
        return { schedulerConfig };
    },

  mounted() {
    const scheduler = this.$refs.scheduler.instance;

    scheduler.on({
      resourceTimeRangeClick: this.onResourceTimeRangeClick,
      thisObj : scheduler
    });
  },
  methods: {
    /**
     * source : Scheduler
     * feature : ResourceTimeRanges
     * resourceTimeRangeRecord : ResourceTimeRangeModel
     * resourceRecord : ResourceModel
     * domEvent
     */
    // https://bryntum.com/products/schedulerpro/docs/api/Scheduler/view/SchedulerBase#event-resourceTimeRangeClick
    onResourceTimeRangeClick({ source, feature, resourceTimeRangeRecord, resourceRecord, domEvent }) {
      console.log('onResourceTimeRangeClick', source, feature, resourceTimeRangeRecord, resourceRecord, domEvent);

      if (domEvent.target.closest('.reservation-amount')) {
        alert(`Reservation amount is ${resourceTimeRangeRecord.reservationAmount}`)
      }
    }
  }

};
</script>

<style lang="scss">
@import './App.scss';
@import './App.css';
</style>

