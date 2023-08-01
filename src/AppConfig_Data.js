const schedulerConfig = {
    // autoHeight: true,
    startDate: new Date(2023, 6, 5), //July 5th
    endDate: new Date(2024, 0, 8), //jan 7th
    barMargin: 15,
    // infiniteScroll : true,
    rowHeight         : 70,
    tickSize          : 100,
    snap              : true,
    resourceImagePath : 'resources/',
    timeResolution    : {
        unit      : 'day',
        increment : 1
    },
    viewPreset : {
        id   : 'myPreset',                 
        name : 'My view preset',            
        base : 'hourAndDay',  
        tickWidth : 100,
        tickHeight : 200, 
        headers : [                         
            {
                unit       : 'day',
                dateFormat : 'DD'
            },
            {
                unit       : 'day',
                dateFormat : 'ddd, MMM'
            },
            {
                unit     : 'day',
                renderer : (startDate, endDate, headerConfig, index) => index,
            }
            // {
            //     unit     : 'day',
            //     renderer : (startDate, endDate, headerConfig, index) => index % 1 === 0 ? Math.round(Math.random() * 5) : '',
            // }
        ],
    },
    
    allowOverlap              : true,
    zoomOnTimeAxisDoubleClick : false,
    zoomOnMouseWheel          : false,
    createEventOnDblClick     : false,
        getDateConstraints() {
            return {
                start : new Date(2023, 1, 1),
                end   : new Date(2023, 12, 20)
            };
        },
        features : {
            timeRanges         : true,
            resourceTimeRanges : {
                enableMouseEvents : true
            },
           },
    columns: [
        { type : 'resourceCollapse' },
        
        // {
        //     text     : 'Property Nickname',
        //     children : [
        //         { text : 'Sold Units', field : 'Property_Nickname', flex : 1 },
        //     ],
        //     width: 150
        // },
        // {
        //     text     : 'Unit Nickname',
        //     children : [
        //         { text : 'Available Units', field : 'Unit_Nickname', flex : 1 },
        //     ],
        //     width: 130
        // },
        // {
        //     text     : 'Unit Class',
        //     children : [
        //         { text : 'Occupancy%', field : 'Unit_Class', cellCls:"unitClass-Cell", flex : 1, width: 150},
        //     ], 
        //     width: 180
        // },
        { text: "Property Nickname", field: "Property_Nickname", width: 150 },
        { text: "Unit Nickname", field: "Unit_Nickname", width: 130},
        { text: "Unit Class", cellCls:"unitClass-Cell", field: "Unit_Class", width: 180 },
        {
            text           : 'Property Nickname',
            field          : 'Property_Nickname',
            width: 150,
            flex           : 1,
            cellCls        : 'name',
            headerRenderer : ({ record }) => {
                console.log(record);
                return `<label>Name</label><button id="addnew" class="addnew b-blue b-raised b-button">ADD</button> `;
            }
        },
    ],
    resources: [
        // { id: 1, name: 'Lady'},
        // { id: 2, name: 'Dude' },
        { id:1, Property_Nickname: 'RDP1', Unit_Nickname: 'DD201', Unit_Class: '4BR Premium'},
        { id:2, Property_Nickname: 'RDP1', Unit_Nickname: 'DD501', Unit_Class: '2BR Standard'},
        { id:3, Property_Nickname: 'RDP1', Unit_Nickname: 'VIP', Unit_Class: '3BR Standard'},
        { id:4, Property_Nickname: 'RDP1', Unit_Nickname: 'rdp112', Unit_Class: '3BR Premium'},
        { id:5, Property_Nickname: 'RDP1', Unit_Nickname: 'DD901', Unit_Class: '4BR Deluxe'},
        { id:6, Property_Nickname: 'RDP1', Unit_Nickname: 'DD 1010', Unit_Class: '1BR Premium'},
        { id:7, Property_Nickname: 'RDP1', Unit_Nickname: 'SuiteD1D2', Unit_Class: '1BR Deluxe'},
        { id:8, Property_Nickname: 'RDP1', Unit_Nickname: 'DD801', Unit_Class: '3BR Standard'},
        { id:9, Property_Nickname: 'RDP1', Unit_Nickname: 'DD301_test', Unit_Class: '1BR Deluxe'},
        { id:10, Property_Nickname: 'RDP1', Unit_Nickname: 'DD401', Unit_Class: '3BR Standard'},
        { id:11, Property_Nickname: 'RDP1', Unit_Nickname: 'DD201', Unit_Class: '4BR Premium'},
        { id:12, Property_Nickname: 'RDP1', Unit_Nickname: 'DD201', Unit_Class: '4BR Premium'},
        { id:13, Property_Nickname: 'RDP1', Unit_Nickname: 'DD501', Unit_Class: '2BR Standard'},
        { id:14, Property_Nickname: 'RDP1', Unit_Nickname: 'rdp112', Unit_Class: '3BR Premium'},
        { id:15, Property_Nickname: 'RDP1', Unit_Nickname: 'DD901', Unit_Class: '4BR Deluxe'},
        { id:16, Property_Nickname: 'RDP1', Unit_Nickname: 'DD 1010', Unit_Class: '1BR Premium'},
        { id:17, Property_Nickname: 'RDP1', Unit_Nickname: 'SuiteD1D2', Unit_Class: '1BR Deluxe'},
        { id:18, Property_Nickname: 'RDP1', Unit_Nickname: 'DD801', Unit_Class: '3BR Standard'},
        { id:19, Property_Nickname: 'RDP1', Unit_Nickname: 'DD301_test', Unit_Class: '1BR Deluxe'},
        { id:20, Property_Nickname: 'RDP1', Unit_Nickname: 'DD301_test', Unit_Class: '1BR Deluxe'}
    ],
    events: [
        { id: 1, resourceId: 1, eventColor : "blue", name: 'Booking 1', startDate: '2023-7-6', duration: 2 },
        { id: 11, resourceId: 1, eventColor : "light blue", name: 'Booking 1 9080', startDate: '2023-7-6', duration: 4 },
        { id: 12, resourceId: 1, eventColor : "purple", name: 'Booking 123 9080', startDate: '2023-7-6', duration: 3 },
        { id: 2, resourceId: 3, name: 'Booking 2', startDate: '2023-7-13', duration: 4 },
        { id: 3, resourceId: 6, name: 'Booking 3', startDate: '2023-7-19', duration: 2 },
        { id: 4, resourceId: 9, eventColor : "violet", name: 'Booking 4', startDate: '2023-7-9', duration: 3 },
        { id: 5, resourceId: 12, eventColor : "pink", name: 'Booking 5', startDate: '2023-7-10', duration: 5 },
        { id: 6, resourceId: 14, cls:"Logoimage",name: 'Booking 6', startDate: '2023-7-13', duration: 4 },
        { id: 7, resourceId: 16, name: 'Booking 7', startDate: '2023-7-16', duration: 2 },
        { id: 8, resourceId: 19, name: 'Booking 8', startDate: '2023-8-3', duration: 3 },
        { id: 9, resourceId: 20, name: 'Booking 9', startDate: '2023-7-25', duration: 2 },
        { id: 10, resourceId: 11, name: 'Booking 10', startDate: '2023-7-18', duration: 2 },
    ],
    // resourceTimeRanges: [
    //     { id: 1, resourceId: 1, name: '$250', timeRangeColor: "white", startDate: '2023-7-5', duration: 1},
    //     { id: 2, resourceId: 2, name: '$250', timeRangeColor: "white", startDate: '2023-7-5', duration: 1,},
    //     { id: 3, resourceId: 3, name: '$250', timeRangeColor: "white", startDate: '2023-7-5', duration: 1},
    //     { id: 4, resourceId: 4, name: '$250', timeRangeColor: "white", startDate: '2023-7-5', duration: 1},
    //     { id: 5, resourceId: 5, name: '$250', timeRangeColor: "white", startDate: '2023-7-5', duration: 1,},
    //     { id: 6, resourceId: 6, name: '$250', timeRangeColor: "white", startDate: '2023-7-5', duration: 1},
    //     { id: 7, resourceId: 7, name: '$250', timeRangeColor: "white", startDate: '2023-7-5', duration: 1,},
    //     { id: 8, resourceId: 8, name: '$250', timeRangeColor: "white", startDate: '2023-7-5', duration: 1},
    //     { id: 9, resourceId: 9, name: '$250', timeRangeColor: "white", startDate: '2023-7-5', duration: 1,},
    //     { id: 10, resourceId: 10, name: '$250', timeRangeColor: "white", startDate: '2023-7-5', duration: 1},
    //     { id: 11, resourceId: 11, name: '$250', timeRangeColor: "white", startDate: '2023-7-5', duration: 1,},
    //     { id: 12, resourceId: 12, name: '$250', timeRangeColor: "white", startDate: '2023-7-5', duration: 1},
    //     { id: 13, resourceId: 13, name: '$250', timeRangeColor: "white", startDate: '2023-7-5', duration: 1,},
    //     { id: 14, resourceId: 14, name: '$250', timeRangeColor: "white", startDate: '2023-7-5', duration: 1},
    //     { id: 15, resourceId: 15, name: '$250', timeRangeColor: "white", startDate: '2023-7-5', duration: 1,},
        
    // ],
    resourceTimeRanges: [
        // cls:"closeOut2"
        // cls:"noCheck-in closeOut1",
        // { id: 1, resourceId: 1, name: '$250',  startDate: '2023-11-25', duration: 1,recurrenceRule: "FREQ=WEEKLY;BYDAY=MO,TU,WE,TH,FR"},
        // { id: 1, resourceId: 1, style: 'color: red; font-weight: 800',
        // name: "$100", timeRangeColor: "white", startDate: "2023-1-7", duration: 1, recurrenceRule: "FREQ=WEEKLY;BYDAY=MO,TU,WE,TH,FR" },
        { id: 1, resourceId: 1, name: "$100", timeRangeColor: "white", startDate: "2023-1-7", cls:"noCheck-in closeOut1", endDate:"2024-1-7", duration: 1, recurrenceRule: "FREQ=WEEKLY;BYDAY=MO,TU,WE,TH,FR" },
        { id: 2, resourceId: 1, name: "$150", timeRangeColor: "orange", startDate: "2023-1-7", duration: 1, recurrenceRule: "FREQ=WEEKLY;BYDAY=SA,SU" },
        { id: 3, resourceId: 2, name: "$200", timeRangeColor: "white", startDate: "2023-1-7", duration: 1, recurrenceRule: "FREQ=WEEKLY;BYDAY=MO,TU,WE,TH,FR" },
        { id: 4, resourceId: 2, name: "$250", timeRangeColor: "orange", startDate: "2023-1-7", duration: 1, recurrenceRule: "FREQ=WEEKLY;BYDAY=SA,SU" },
        { id: 5, resourceId: 3, name: "$300 3n", timeRangeColor: "white", startDate: "2023-1-7", duration: 1, recurrenceRule: "FREQ=WEEKLY;BYDAY=MO,TU,WE,TH,FR" },
        { id: 6, resourceId: 3, name: "$350", timeRangeColor: "orange", startDate: "2023-1-7", duration: 1, recurrenceRule: "FREQ=WEEKLY;BYDAY=SA,SU" },
        { id: 7, resourceId: 4, name: "$300", timeRangeColor: "white", startDate: "2023-1-7", duration: 1, recurrenceRule: "FREQ=WEEKLY;BYDAY=MO,TU,WE,TH,FR" },
        { id: 8, resourceId: 4, name: "$350", timeRangeColor: "orange", startDate: "2023-1-7", duration: 1, recurrenceRule: "FREQ=WEEKLY;BYDAY=SA,SU" },
        { id: 9, resourceId: 5, name: "$300", timeRangeColor: "white", startDate: "2023-1-7", duration: 1, recurrenceRule: "FREQ=WEEKLY;BYDAY=MO,TU,WE,TH,FR" },
        { id: 10, resourceId: 5, name: "$350", timeRangeColor: "orange", startDate: "2023-1-7", duration: 1, recurrenceRule: "FREQ=WEEKLY;BYDAY=SA,SU" },
        { id: 11, resourceId: 6, name: "$300", timeRangeColor: "white", startDate: "2023-1-7", duration: 1, recurrenceRule: "FREQ=WEEKLY;BYDAY=MO,TU,WE,TH,FR" },
        { id: 12, resourceId: 6, name: "$350", cls:"noCheck-in closeOut1", timeRangeColor: "orange", startDate: "2023-1-7", duration: 1, recurrenceRule: "FREQ=WEEKLY;BYDAY=SA,SU" },
        { id: 13, resourceId: 7, name: "$100", timeRangeColor: "white", startDate: "2023-1-7", duration: 1, recurrenceRule: "FREQ=WEEKLY;BYDAY=MO,TU,WE,TH,FR" },
        { id: 14, resourceId: 7, name: "$150", timeRangeColor: "orange", startDate: "2023-1-7", duration: 1, recurrenceRule: "FREQ=WEEKLY;BYDAY=SA,SU" },
        { id: 15, resourceId: 8, name: "$200", timeRangeColor: "white", startDate: "2023-1-7", duration: 1, recurrenceRule: "FREQ=WEEKLY;BYDAY=MO,TU,WE,TH,FR" },
        { id: 16, resourceId: 8, name: "$250", timeRangeColor: "orange", startDate: "2023-1-7", duration: 1, recurrenceRule: "FREQ=WEEKLY;BYDAY=SA,SU" },
        { id: 17, resourceId: 9, name: "$300", timeRangeColor: "white", startDate: "2023-1-7", duration: 1, recurrenceRule: "FREQ=WEEKLY;BYDAY=MO,TU,WE,TH,FR" },
        { id: 18, resourceId: 9, name: "$350", timeRangeColor: "orange", startDate: "2023-1-7", duration: 1, recurrenceRule: "FREQ=WEEKLY;BYDAY=SA,SU" },
        { id: 19, resourceId: 10, name: "$300", timeRangeColor: "white", startDate: "2023-1-7", duration: 1, recurrenceRule: "FREQ=WEEKLY;BYDAY=MO,TU,WE,TH,FR" },
        { id: 20, resourceId: 10, name: "$350", timeRangeColor: "orange", startDate: "2023-1-7", duration: 1, recurrenceRule: "FREQ=WEEKLY;BYDAY=SA,SU" },
        { id: 21, resourceId: 11, name: "$300", timeRangeColor: "white", startDate: "2023-1-7", duration: 1, recurrenceRule: "FREQ=WEEKLY;BYDAY=MO,TU,WE,TH,FR" },
        { id: 22, resourceId: 11, name: "$350", timeRangeColor: "orange", startDate: "2023-1-7", duration: 1, recurrenceRule: "FREQ=WEEKLY;BYDAY=SA,SU" },
        { id: 23, resourceId: 12, name: "$300", timeRangeColor: "white", startDate: "2023-1-7", duration: 1, recurrenceRule: "FREQ=WEEKLY;BYDAY=MO,TU,WE,TH,FR" },
        { id: 24, resourceId: 12, name: "$350", timeRangeColor: "orange", startDate: "2023-1-7", duration: 1, recurrenceRule: "FREQ=WEEKLY;BYDAY=SA,SU" },
        { id: 25, resourceId: 13, name: "$100", timeRangeColor: "white", startDate: "2023-1-7", duration: 1, recurrenceRule: "FREQ=WEEKLY;BYDAY=MO,TU,WE,TH,FR" },
        { id: 26, resourceId: 13, name: "$150", timeRangeColor: "orange", startDate: "2023-1-7", duration: 1, recurrenceRule: "FREQ=WEEKLY;BYDAY=SA,SU" },
        { id: 27, resourceId: 14, name: "$200", timeRangeColor: "white", startDate: "2023-1-7", duration: 1, recurrenceRule: "FREQ=WEEKLY;BYDAY=MO,TU,WE,TH,FR" },
        { id: 28, resourceId: 14, name: "$250", timeRangeColor: "orange", startDate: "2023-1-7", duration: 1, recurrenceRule: "FREQ=WEEKLY;BYDAY=SA,SU" },
        { id: 29, resourceId: 15, name: "$300", timeRangeColor: "white", startDate: "2023-1-7", duration: 1, recurrenceRule: "FREQ=WEEKLY;BYDAY=MO,TU,WE,TH,FR" },
        { id: 30, resourceId: 15, name: "$350", timeRangeColor: "orange", startDate: "2023-1-7", duration: 1, recurrenceRule: "FREQ=WEEKLY;BYDAY=SA,SU" },
        { id: 31, resourceId: 16, name: "$300", timeRangeColor: "white", startDate: "2023-1-7", duration: 1, recurrenceRule: "FREQ=WEEKLY;BYDAY=MO,TU,WE,TH,FR" },
        { id: 32, resourceId: 16, name: "$350", timeRangeColor: "orange", startDate: "2023-1-7", duration: 1, recurrenceRule: "FREQ=WEEKLY;BYDAY=SA,SU" },
        { id: 33, resourceId: 17, name: "$300", timeRangeColor: "white", startDate: "2023-1-7", duration: 1, recurrenceRule: "FREQ=WEEKLY;BYDAY=MO,TU,WE,TH,FR" },
        { id: 34, resourceId: 17, name: "$350", timeRangeColor: "orange", startDate: "2023-1-7", duration: 1, recurrenceRule: "FREQ=WEEKLY;BYDAY=SA,SU" },
        { id: 35, resourceId: 18, name: "$300", timeRangeColor: "white", startDate: "2023-1-7", duration: 1, recurrenceRule: "FREQ=WEEKLY;BYDAY=MO,TU,WE,TH,FR" },
        { id: 36, resourceId: 18, name: "$350", timeRangeColor: "orange", startDate: "2023-1-7", duration: 1, recurrenceRule: "FREQ=WEEKLY;BYDAY=SA,SU" },
    ],   
    // Add console.log when event is changed

    eventRenderer(eventRecord) {
        console.log('Event changed:', eventRecord);
        console.log("eventRecord.eventRecord.originalData.name =======>",eventRecord.eventRecord.originalData.name)
        return `${eventRecord.eventRecord.originalData.name}`
    },
    listeners: {
        // single click
        // resourceTimeRangeClick({ resourceTimeRangeRecord }) {
        //  alert(resourceTimeRangeRecord);
        // },
        handlerAddNewButton() {
            console.log("Button")
        },
        eventClick() {
            console.log("event Click Action")
        },
        // event double click
        eventDblClick() {
            console.log("eventDblClick called !!");
        },
        eventContextMenu() {
            console.log("right click event")
        },
        
    }, 
};

  // Add eventTooltip
  schedulerConfig.features.eventTooltip = {
    template: data => {
      const startDate = data.startDate;
      const endDate = data.endDate;
      const lengthInDays = Math.round((endDate - startDate) / (1000 * 60 * 60 * 24));
      console.log("eventTooltip data ====> ",data)
      return `<h4>Check-in:</h4>Start: ${startDate}<h4>Length of stay:</h4>${lengthInDays} nights`;
    }
  };
  
 export { schedulerConfig };
