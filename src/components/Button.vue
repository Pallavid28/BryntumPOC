<!-- Button -->
<template>
    <button class="b-button b-grey" @click="click($event)">
        <span>Events: {{ record.events.length }}</span>
    </button>
</template>

<script>
import { Toast, StringHelper } from '@bryntum/schedulerpro';

export default {
    name    : 'GreyButton',
    props   : ['record'],
    methods : {
        click() {
            const { record } = this;
            const events = record.events.length;
            const message =
                events === 1
                    ? `<b>${StringHelper.encodeHtml(record.name)}</b> has <b>1</b> event`
                    : `<b>${StringHelper.encodeHtml(record.name)}</b> has <b>${events}</b> events`;
            Toast.show(message);
        }
    }
};
</script>
