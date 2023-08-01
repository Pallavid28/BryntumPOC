const schedulerConfig = {
    autoHeight: true,
    startDate: new Date(2023, 10, 25),
    endDate: new Date(2023, 12, 8),
    barMargin: 15,
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
        headers : [                         
            {
                unit       : 'day',
                dateFormat : 'DD ddd, MMM'
            },
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
        {
            text           : 'Name',
            showEventCount : true,
            field: 'name', 
            width: 100 
        },
    ],
    resources: [
        { id: 1, name: 'Lady'},
        { id: 2, name: 'Dude' }
    ],
    events: [
        { id: 1, resourceId: 1, eventColor : "blue", cls:"test000-000",name: 'Event 1', startDate: '2023-11-25', duration: 3 },
        { id: 3, resourceId: 1, eventColor : "purple", name: 'Event 2', startDate: '2023-11-25', duration: 4 },
        { id: 4, resourceId: 1, name: 'Event 3', startDate: '2023-11-25', duration: 3 },
        { id: 2, resourceId: 2, name: 'Event 4', startDate: '2023-11-30', duration: 2 },
    ],
    resourceTimeRanges: [
        // { id: 1, resourceId: 1, name: '$250',  startDate: '2023-11-25', duration: 1,recurrenceRule: "FREQ=WEEKLY;BYDAY=MO,TU,WE,TH,FR"},
        { id: 1, resourceId: 1, cls:"noCheck-in closeOut1", name: '$250',  startDate: '2023-11-25', duration: 1},
        { id: 2, resourceId: 2, cls:"noCheck-in closeOut1", name: '$250',  startDate: '2023-11-25', duration: 1,},
        { id: 3, resourceId: 1, name: '$250',  startDate: '2023-11-26', duration: 1 },
        { id: 4, resourceId: 2, cls:"closeOut1", name: '$250',  startDate: '2023-11-26', duration: 1 },
        { id: 5, resourceId: 1, name: '$150',  startDate: '2023-11-27', duration: 1 },
        { id: 6, resourceId: 2, cls:"noCheck-out closeOut1", name: '$200',  startDate: '2023-11-27', duration: 1 },
        { id: 7, resourceId: 1, cls:"noCheck-in closeOut2", name: '$150',  startDate: '2023-11-28', duration: 1 },
        { id: 8, resourceId: 2, name: '$200',  startDate: '2023-11-28', duration: 1 },        
        { id: 9, resourceId: 2, name: '$200',  startDate: '2023-11-29', duration: 1 },
        { id: 10, resourceId: 1, cls:"noCheck-in", name: '$150',  startDate: '2023-11-29', duration: 1 },
        { id: 11, resourceId: 1, name: '$150',  startDate: '2023-11-30', duration: 1 },
        { id: 12, resourceId: 2, name: '$200',  startDate: '2023-11-30', duration: 1 },
        { id: 13, resourceId: 1, cls:"noCheck-in", name: '$150',  startDate: '2023-12-01', duration: 1 },
        { id: 14, resourceId: 2, name: '$200 3n',  startDate: '2023-12-01', duration: 1 },
        { id: 15, resourceId: 1, cls:"noCheck-in noCheck-out", name: '$150',  startDate: '2023-12-02', duration: 1 },
        { id: 16, resourceId: 2, name: '$200 3n',  startDate: '2023-12-02', duration: 1 },
        { id: 17, resourceId: 1, name: '$150',  startDate: '2023-12-03', duration: 1 },
        { id: 18, resourceId: 2, cls:"noCheck-in noCheck-out", name: '$200',  startDate: '2023-12-03', duration: 1 },        
        { id: 19, resourceId: 2, name: '$200',  startDate: '2023-12-04', duration: 1 },
        { id: 20, resourceId: 1, name: '$150',  startDate: '2023-12-04', duration: 1 },
        { id: 21, resourceId: 1, name: '$150',  startDate: '2023-12-05', duration: 1 },
        { id: 22, resourceId: 2, name: '$200',  startDate: '2023-12-05', duration: 1 },
        { id: 23, resourceId: 1, name: '$150',  startDate: '2023-12-06', duration: 1 },
        { id: 24, resourceId: 2, name: '$200',  startDate: '2023-12-06', duration: 1 },
        { id: 25, resourceId: 1, name: '$150',  startDate: '2023-12-07', duration: 1 },
        { id: 26, resourceId: 2, name: '$200',  startDate: '2023-12-07', duration: 1 },
        { id: 27, resourceId: 1, name: '$150',  startDate: '2023-12-08', duration: 1 },
        { id: 28, resourceId: 2, name: '$200',  startDate: '2023-12-08', duration: 1 },        
        { id: 29, resourceId: 2, name: '$300',  startDate: '2023-12-09', duration: 1 },
        { id: 30, resourceId: 1, name: '$350',  startDate: '2023-12-09', duration: 1 },
        { id: 31, resourceId: 1, name: '$450',  startDate: '2023-12-10', duration: 1 },
        { id: 32, resourceId: 2, name: '$500',  startDate: '2023-12-10', duration: 1 },
        { id: 33, resourceId: 1, name: '$150',  startDate: '2023-12-11', duration: 1 },
        { id: 34, resourceId: 2, name: '$200',  startDate: '2023-12-11', duration: 1 },
        { id: 35, resourceId: 1, name: '$150',  startDate: '2023-12-12', duration: 1 },
        { id: 36, resourceId: 2, name: '$200',  startDate: '2023-12-12', duration: 1 },
        { id: 37, resourceId: 1, name: '$150',  startDate: '2023-12-13', duration: 1 },
        { id: 38, resourceId: 2, name: '$200',  startDate: '2023-12-13', duration: 1 },        
        { id: 39, resourceId: 2, name: '$200',  startDate: '2023-12-14', duration: 1 },
        { id: 40, resourceId: 1, name: '$150',  startDate: '2023-12-14', duration: 1 },
    ],   
    // Add console.log when event is changed

    eventRenderer(eventRecord) {
        console.log('Event changed:', eventRecord);
        console.log("eventRecord.eventRecord.originalData.name =======>",eventRecord.eventRecord.originalData.name)
        return `${eventRecord.eventRecord.originalData.name}`
      } 
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

  schedulerConfig.timeAxis.on('beforereconfigure', function(event) {
        console.log(event)
        if (new Date(event.startDate).setHours(0,0,0,0) >= new Date(2023, 11, 25).setHours(0,0,0,0)) {
            return false;
        }

        return true;
  });
  
 export { schedulerConfig };
