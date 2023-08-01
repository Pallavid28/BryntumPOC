/**
 * Application configuration
 */
const schedulerConfig = {
    startDate: new Date(2023, 6, 1), // May 1, 2023
    endDate: new Date(2023, 10, 1), // July 31, 2023
    features: {
        // for displaying the daily rates
        // resourceTimeRanges: true,
        resourceTimeRanges: {
            enableMouseEvents: true,
        },
    },
    viewPreset: {
        id: "myPreset", // Unique id value provided to recognize your view preset. Not required, but having it you can simply set new view preset by id: scheduler.viewPreset = 'myPreset'
        name: "My view preset", // A human-readable name provided to be used in GUI, e.i. preset picker, etc.
        base: "hourAndDay", // Extends 'hourAndDay' view preset provided by PresetManager. You can pick out any of PresetManager's view presets: PresetManager.records
        headers: [
            // Override headers
            {
                unit: "day",
                dateFormat: "DD ddd MMM",
            },
        ],
    },
    columns: [
        { text: "Property Nickname", field: "Property_Nickname", width: 150 },
        { text: "Unit Nickname", field: "Unit_Nickname", width: 150 },
        { text: "Unit Class", field: "Unit_Class", width: 150 },
    ],
    resources: [
        { id: 1, Property_Nickname: "RDP1", Unit_Nickname: "DD501", Unit_Class: "2BR Standard" },
        { id: 2, Property_Nickname: "RDP1", Unit_Nickname: "DD201", Unit_Class: "4BR Premium" },
        { id: 3, Property_Nickname: "RDP1", Unit_Nickname: "VIP", Unit_Class: "3BR Standard" },
        { id: 4, Property_Nickname: "RDP1", Unit_Nickname: "rdp112", Unit_Class: "3BR Premium" },
        { id: 5, Property_Nickname: "RDP1", Unit_Nickname: "DD901", Unit_Class: "4BR Deluxe" },
        { id: 6, Property_Nickname: "RDP1", Unit_Nickname: "DD 1010", Unit_Class: "1BR Premium" },
        { id: 7, Property_Nickname: "RDP1", Unit_Nickname: "SuiteD1D2", Unit_Class: "1BR Deluxe" },
        { id: 8, Property_Nickname: "RDP1", Unit_Nickname: "DD801", Unit_Class: "3BR Standard" },
        { id: 9, Property_Nickname: "RDP1", Unit_Nickname: "DD301", Unit_Class: "4BR Superior" },
        { id: 10, Property_Nickname: "RDP1", Unit_Nickname: "DD401", Unit_Class: "3BR Standard" },
        { id: 11, Property_Nickname: "RDP1", Unit_Nickname: "Prod unit", Unit_Class: "1BR Deluxe" },
        { id: 12, Property_Nickname: "RDP1", Unit_Nickname: "DD6", Unit_Class: "1BR Superior" },
        // Add more rooms/properties as needed
    ],
    events: [
        { id: 1, resourceId: 1, name: "Booking 1", startDate: "2023-07-01", endDate: "2023-07-05", rate: 100 },
        { id: 2, resourceId: 2, name: "Booking 2", startDate: "2023-07-03", endDate: "2023-07-07", rate: 120 },
        // Add more bookings/events as needed
    ],
    resourceTimeRanges: [
        { id: 1, resourceId: 1, name: "$100", timeRangeColor: "white", startDate: "2023-1-7", duration: 1, recurrenceRule: "FREQ=WEEKLY;BYDAY=MO,TU,WE,TH,FR" },
        { id: 2, resourceId: 1, name: "$150", timeRangeColor: "orange", startDate: "2023-1-7", duration: 1, recurrenceRule: "FREQ=WEEKLY;BYDAY=SA,SU" },
        { id: 3, resourceId: 2, name: "$200", timeRangeColor: "white", startDate: "2023-1-7", duration: 1, recurrenceRule: "FREQ=WEEKLY;BYDAY=MO,TU,WE,TH,FR" },
        { id: 4, resourceId: 2, name: "$250", timeRangeColor: "orange", startDate: "2023-1-7", duration: 1, recurrenceRule: "FREQ=WEEKLY;BYDAY=SA,SU" },
        { id: 5, resourceId: 3, name: "$300", timeRangeColor: "white", startDate: "2023-1-7", duration: 1, recurrenceRule: "FREQ=WEEKLY;BYDAY=MO,TU,WE,TH,FR" },
        { id: 6, resourceId: 3, name: "$350", timeRangeColor: "orange", startDate: "2023-1-7", duration: 1, recurrenceRule: "FREQ=WEEKLY;BYDAY=SA,SU" },
        { id: 7, resourceId: 4, name: "$300", timeRangeColor: "white", startDate: "2023-1-7", duration: 1, recurrenceRule: "FREQ=WEEKLY;BYDAY=MO,TU,WE,TH,FR" },
        { id: 8, resourceId: 4, name: "$350", timeRangeColor: "orange", startDate: "2023-1-7", duration: 1, recurrenceRule: "FREQ=WEEKLY;BYDAY=SA,SU" },
        { id: 9, resourceId: 5, name: "$300", timeRangeColor: "white", startDate: "2023-1-7", duration: 1, recurrenceRule: "FREQ=WEEKLY;BYDAY=MO,TU,WE,TH,FR" },
        { id: 10, resourceId: 5, name: "$350", timeRangeColor: "orange", startDate: "2023-1-7", duration: 1, recurrenceRule: "FREQ=WEEKLY;BYDAY=SA,SU" },
        { id: 11, resourceId: 6, name: "$300", timeRangeColor: "white", startDate: "2023-1-7", duration: 1, recurrenceRule: "FREQ=WEEKLY;BYDAY=MO,TU,WE,TH,FR" },
        { id: 12, resourceId: 6, name: "$350", timeRangeColor: "orange", startDate: "2023-1-7", duration: 1, recurrenceRule: "FREQ=WEEKLY;BYDAY=SA,SU" },
        { id: 13, resourceId: 7, name: "$350", timeRangeColor: "orange", startDate: "2023-1-7", duration: 1, recurrenceRule: "FREQ=WEEKLY;BYDAY=SA,SU" },
        { id: 14, resourceId: 7, name: "$350", timeRangeColor: "orange", startDate: "2023-1-7", duration: 1, recurrenceRule: "FREQ=WEEKLY;BYDAY=SA,SU" },
        { id: 15, resourceId: 8, name: "$350", timeRangeColor: "orange", startDate: "2023-1-7", duration: 1, recurrenceRule: "FREQ=WEEKLY;BYDAY=SA,SU" },
        { id: 16, resourceId: 8, name: "$350", timeRangeColor: "orange", startDate: "2023-1-7", duration: 1, recurrenceRule: "FREQ=WEEKLY;BYDAY=SA,SU" },
        { id: 17, resourceId: 9, name: "$350", timeRangeColor: "orange", startDate: "2023-1-7", duration: 1, recurrenceRule: "FREQ=WEEKLY;BYDAY=SA,SU" },
        { id: 18, resourceId: 9, name: "$350", timeRangeColor: "orange", startDate: "2023-1-7", duration: 1, recurrenceRule: "FREQ=WEEKLY;BYDAY=SA,SU" },

    ],
    eventRenderer({ eventRecord }) {
        // return StringHelper.xss`${eventRecord.name} <i class="b-fa b-fa-user"><sup>${eventRecord.guests}</sup>`;
        console.log("eventRecord ====>", eventRecord);
        return `${eventRecord.name} - custom data`
    },
    listeners: {
        // single click
        // resourceTimeRangeClick({ resourceTimeRangeRecord }) {
        //  alert(resourceTimeRangeRecord);
        // },
        // event double click
        eventDblClick() {
            console.log("eventDblClick called !!");
        },
    },
};

export { schedulerConfig };