const schedulerConfig = {
    // autoHeight: true,
    startDate: new Date(2023, 6, 20), //July 5th
    endDate: new Date(2024, 0, 8), //jan 7th
    barMargin: 15,
    infiniteScroll : true,
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
        summary : {
            renderer: ({ events: eventRecords }) => {
                return eventRecords.length || ''
            }
        },
        eventTooltip: {
            template: data => {
                const startDate = data.startDate;
                const endDate = data.endDate;
                const lengthInDays = Math.round((endDate - startDate) / (1000 * 60 * 60 * 24));
                console.log("eventTooltip data ====> ",data)
                return `<h4>Check-in:</h4>Start: ${startDate}<h4>Length of stay:</h4>${lengthInDays} nights`;
            }
        }
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
        // { text: "Unit Class", cellCls:"unitClass-Cell", field: "Unit_Class", width: 180 },
        // { text: "Unit Class", cls:"unitClass-Cell", field: "Unit_Class", width: 180 },
        { text: "Unit Class", field: "Unit_Class", width: 180, htmlEncode : false,
            renderer$({ value }) {
                var class1 = '';
                if (value === '3BR Standard') {
                    class1 = "3BRS";
                } else if (value === '4BR Premium') {
                    class1 = "4BRP";
                }
                return '<span class='+class1+'>'+value+'</span>'
            }
        },
        { text: "Unit Type", field: "Unit_Type", width: 180 },


        // {
        //     text           : 'Property Nickname',
        //     field          : 'Property_Nickname',
        //     width: 150,
        //     flex           : 1,
        //     cellCls        : 'name',
        //     headerRenderer : ({ record }) => {
        //         console.log(record);
        //         return `<label>Name</label><button id="addnew" class="addnew b-blue b-raised b-button">ADD</button> `;
        //     }
        // },
    ],
    resources: [

        { id:1, Property_Nickname: 'RDP1', Unit_Nickname: 'DD201', Unit_Class: '4BR Premium'},
        // { id:2, Property_Nickname: 'RDP1', Unit_Nickname: 'DD501', Unit_Class: '2BR Standard'},
        { id:2, Property_Nickname: 'RDP1', Unit_Nickname: 'Unassigned', Unit_Class: '', Unit_Type: 'West Studio', cls: 'unassignedRow'},
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
        { id: 1, resourceId: 1, cls:" test1 Logoimage", eventColor : "blue", name: 'Booking 1', startDate: '2023-7-21', duration: 2 },
        { id: 11, resourceId: 1, cls:"test2 Logoimage", eventColor : "light blue", name: 'Booking 1 9080', startDate: '2023-7-21', duration: 4 },
        { id: 12, resourceId: 1, cls:"test3 Logoimage", eventColor : "purple", name: 'Booking 123 9080', startDate: '2023-7-21', duration: 3 },
        { id: 2, resourceId: 3, cls:"Logoimage", name: 'Booking 2', startDate: '2023-7-28', duration: 4 },
        { id: 3, resourceId: 6, cls:"Logoimage", name: 'Booking 3', startDate: '2023-7-31', duration: 2 },
        { id: 4, resourceId: 9, cls:"Logoimage", eventColor : "violet", name: 'Booking 4', startDate: '2023-7-24', duration: 3 },
        { id: 5, resourceId: 12, cls:"Logoimage", eventColor : "pink", name: 'Booking 5', startDate: '2023-7-25', duration: 5 },
        { id: 6, resourceId: 14, cls:"Logoimage",name: 'Booking 6', startDate: '2023-7-13', duration: 4 },
        { id: 7, resourceId: 16, name: 'Booking 7', startDate: '2023-7-31', duration: 2 },
        { id: 8, resourceId: 19, name: 'Booking 8', startDate: '2023-8-18', duration: 3 },
        { id: 9, resourceId: 20, name: 'Booking 9', startDate: '2023-8-9', duration: 2 },
        { id: 10, resourceId: 11, name: 'Booking 10', startDate: '2023-8-2', duration: 2 },
    ],
    resourceTimeRanges: [
        { id: 1, resourceId: 1, name: '$250', minNight: '3N', reservationAmount: 2, timeRangeColor: "white", startDate: '2023-7-20', duration: 1},
        { id: 2, resourceId: 2, cls: 'unassignedRow', name: '$250', timeRangeColor: "white", startDate: '2023-7-20', duration: 1,},
        { id: 3, resourceId: 3, name: '$250', timeRangeColor: "white", startDate: '2023-7-20', duration: 1},
        { id: 4, resourceId: 4, name: '$250', timeRangeColor: "white", startDate: '2023-7-20', duration: 1},
        { id: 5, resourceId: 5, name: '$250', timeRangeColor: "white", startDate: '2023-7-20', duration: 1,},
        { id: 6, resourceId: 6, name: '$250', timeRangeColor: "white", startDate: '2023-7-20', duration: 1},
        { id: 7, resourceId: 7, name: '$250', timeRangeColor: "white", startDate: '2023-7-20', duration: 1,},
        { id: 8, resourceId: 8, name: '$250', timeRangeColor: "white", startDate: '2023-7-20', duration: 1},
        { id: 9, resourceId: 9, name: '$250', timeRangeColor: "white", startDate: '2023-7-20', duration: 1,},
        { id: 10, resourceId: 10, name: '$250', timeRangeColor: "white", startDate: '2023-7-20', duration: 1},
        { id: 11, resourceId: 11, name: '$250', timeRangeColor: "white", startDate: '2023-7-20', duration: 1,},
        { id: 12, resourceId: 12, name: '$250', timeRangeColor: "white", startDate: '2023-7-20', duration: 1},
        { id: 13, resourceId: 13, name: '$250', timeRangeColor: "white", startDate: '2023-7-20', duration: 1,},
        { id: 14, resourceId: 14, name: '$250', timeRangeColor: "white", startDate: '2023-7-20', duration: 1},
        { id: 15, resourceId: 15, name: '$250', timeRangeColor: "white", startDate: '2023-7-20', duration: 1,},
        { id: 16, resourceId: 1, name: '$250', timeRangeColor: "white", startDate: '2023-7-21', duration: 1},
        { id: 17, resourceId: 2, cls: 'unassignedRow', name: '$250', timeRangeColor: "white", startDate: '2023-7-21', duration: 1,},
        { id: 18, resourceId: 3, name: '$250', timeRangeColor: "white", startDate: '2023-7-21', duration: 1},
        { id: 19, resourceId: 4, cls:"closeOut2", name: '$250', timeRangeColor: "white", startDate: '2023-7-21', duration: 1},
        { id: 20, resourceId: 5, name: '$250', timeRangeColor: "white", startDate: '2023-7-21', duration: 1,},
        { id: 21, resourceId: 6, name: '$250', timeRangeColor: "white", startDate: '2023-7-21', duration: 1},
        { id: 22, resourceId: 7, cls:"noCheck-in noCheck-out", name: '$250', timeRangeColor: "white", startDate: '2023-7-21', duration: 1,},
        { id: 23, resourceId: 8, cls:"noCheck-in noCheck-out", name: '$250', timeRangeColor: "white", startDate: '2023-7-21', duration: 1},
        { id: 24, resourceId: 9, name: '$250', timeRangeColor: "white", startDate: '2023-7-21', duration: 1,},
        { id: 25, resourceId: 10, name: '$250', timeRangeColor: "white", startDate: '2023-7-21', duration: 1},
        { id: 26, resourceId: 11, name: '$250', timeRangeColor: "white", startDate: '2023-7-21', duration: 1,},
        { id: 27, resourceId: 12, name: '$250', timeRangeColor: "white", startDate: '2023-7-21', duration: 1},
        { id: 28, resourceId: 13, name: '$250', timeRangeColor: "white", startDate: '2023-7-21', duration: 1,},
        { id: 29, resourceId: 14, name: '$250', timeRangeColor: "white", startDate: '2023-7-21', duration: 1},
        { id: 30, resourceId: 15, name: '$250', timeRangeColor: "white", startDate: '2023-7-21', duration: 1,},
        { id: 31, resourceId: 1, name: '$250', timeRangeColor: "orange", startDate: '2023-7-22', duration: 1},
        { id: 32, resourceId: 2, cls: 'weekend', name: '$250', timeRangeColor: "orange", startDate: '2023-7-22', duration: 1,},
        { id: 33, resourceId: 3, name: '$250', timeRangeColor: "orange", startDate: '2023-7-22', duration: 1},
        { id: 34, resourceId: 4, cls:"closeOut2", name: '$250', timeRangeColor: "orange", startDate: '2023-7-22', duration: 1},
        { id: 35, resourceId: 5, name: '$250', timeRangeColor: "orange", startDate: '2023-7-22', duration: 1,},
        { id: 36, resourceId: 6, name: '$250', timeRangeColor: "orange", startDate: '2023-7-22', duration: 1},
        { id: 37, resourceId: 7, name: '$250', timeRangeColor: "orange", startDate: '2023-7-22', duration: 1,},
        { id: 38, resourceId: 8, name: '$250', timeRangeColor: "orange", startDate: '2023-7-22', duration: 1},
        { id: 39, resourceId: 9, name: '$250', timeRangeColor: "orange", startDate: '2023-7-22', duration: 1,},
        { id: 40, resourceId: 10, name: '$250', timeRangeColor: "orange", startDate: '2023-7-22', duration: 1},
        { id: 41, resourceId: 11, name: '$250', timeRangeColor: "orange", startDate: '2023-7-22', duration: 1,},
        { id: 42, resourceId: 12, name: '$250', timeRangeColor: "orange", startDate: '2023-7-22', duration: 1},
        { id: 43, resourceId: 13, name: '$250', timeRangeColor: "orange", startDate: '2023-7-22', duration: 1,},
        { id: 44, resourceId: 14, name: '$250', timeRangeColor: "orange", startDate: '2023-7-22', duration: 1},
        { id: 45, resourceId: 15, name: '$250', timeRangeColor: "orange", startDate: '2023-7-22', duration: 1,},
        { id: 46, resourceId: 1, name: '$250', timeRangeColor: "orange", startDate: '2023-7-23', duration: 1},
        { id: 47, resourceId: 2, cls: 'weekend', name: '$250', timeRangeColor: "orange", startDate: '2023-7-23', duration: 1,},
        { id: 48, resourceId: 3, cls:"noCheck-in",name: '$250', timeRangeColor: "orange", startDate: '2023-7-23', duration: 1},
        { id: 49, resourceId: 4, cls:"noCheck-in", name: '$250', timeRangeColor: "orange", startDate: '2023-7-23', duration: 1},
        { id: 50, resourceId: 5, cls:"noCheck-in",name: '$250', timeRangeColor: "orange", startDate: '2023-7-23', duration: 1,},
        { id: 51, resourceId: 6, name: '$250', timeRangeColor: "orange", startDate: '2023-7-23', duration: 1},
        { id: 52, resourceId: 7, cls:"closeOut2", name: '$250', timeRangeColor: "orange", startDate: '2023-7-23', duration: 1,},
        { id: 53, resourceId: 8, name: '$250', timeRangeColor: "orange", startDate: '2023-7-23', duration: 1},
        { id: 54, resourceId: 9, name: '$250', timeRangeColor: "orange", startDate: '2023-7-23', duration: 1,},
        { id: 55, resourceId: 10, name: '$250', timeRangeColor: "orange", startDate: '2023-7-23', duration: 1},
        { id: 56, resourceId: 11, name: '$250', timeRangeColor: "orange", startDate: '2023-7-23', duration: 1,},
        { id: 57, resourceId: 12, name: '$250', timeRangeColor: "orange", startDate: '2023-7-23', duration: 1},
        { id: 58, resourceId: 13, name: '$250', timeRangeColor: "orange", startDate: '2023-7-23', duration: 1,},
        { id: 59, resourceId: 14, name: '$250', timeRangeColor: "orange", startDate: '2023-7-23', duration: 1},
        { id: 60, resourceId: 15, name: '$250', timeRangeColor: "orange", startDate: '2023-7-23', duration: 1,},
        { id: 61, resourceId: 1, name: '$250', timeRangeColor: "white", startDate: '2023-7-24', duration: 1},
        { id: 62, resourceId: 2, cls:"unassignedRow", name: '$250', timeRangeColor: "white", startDate: '2023-7-24', duration: 1,},
        { id: 63, resourceId: 3, cls:"noCheck-out",name: '$250', timeRangeColor: "white", startDate: '2023-7-24', duration: 1},
        { id: 64, resourceId: 4, cls:"noCheck-out",name: '$250', timeRangeColor: "white", startDate: '2023-7-24', duration: 1},
        { id: 65, resourceId: 5, cls:"noCheck-out",name: '$250', timeRangeColor: "white", startDate: '2023-7-24', duration: 1,},
        { id: 66, resourceId: 6, name: '$250', timeRangeColor: "white", startDate: '2023-7-24', duration: 1},
        { id: 67, resourceId: 7, name: '$250', timeRangeColor: "white", startDate: '2023-7-24', duration: 1,},
        { id: 68, resourceId: 8, name: '$250', timeRangeColor: "white", startDate: '2023-7-24', duration: 1},
        { id: 69, resourceId: 9, name: '$250', timeRangeColor: "white", startDate: '2023-7-24', duration: 1,},
        { id: 70, resourceId: 10, name: '$250', timeRangeColor: "white", startDate: '2023-7-24', duration: 1},
        { id: 71, resourceId: 1, cls:"closeOut2", name: '$250', timeRangeColor: "white", startDate: '2023-7-25', duration: 1},
        { id: 72, resourceId: 2, cls: 'unassignedRow', name: '$250', timeRangeColor: "white", startDate: '2023-7-25', duration: 1,},
        { id: 73, resourceId: 3, name: '$250', timeRangeColor: "white", startDate: '2023-7-25', duration: 1},
        { id: 74, resourceId: 4, name: '$250', timeRangeColor: "white", startDate: '2023-7-25', duration: 1},
        { id: 75, resourceId: 5, name: '$250', timeRangeColor: "white", startDate: '2023-7-25', duration: 1,},
        { id: 76, resourceId: 6, name: '$250', timeRangeColor: "white", startDate: '2023-7-25', duration: 1},
        { id: 77, resourceId: 7, name: '$250', timeRangeColor: "white", startDate: '2023-7-25', duration: 1,},
        { id: 78, resourceId: 8, name: '$250', timeRangeColor: "white", startDate: '2023-7-25', duration: 1},
        { id: 79, resourceId: 9, name: '$250', timeRangeColor: "white", startDate: '2023-7-25', duration: 1,},
        { id: 80, resourceId: 10, name: '$250', timeRangeColor: "white", startDate: '2023-7-25', duration: 1},
        { id: 81, resourceId: 1, cls:"noCheck-in closeOut2", name: '$250', timeRangeColor: "white", startDate: '2023-7-26', duration: 1},
        { id: 82, resourceId: 2, cls: 'unassignedRow', name: '$250', timeRangeColor: "white", startDate: '2023-7-26', duration: 1,},
        { id: 83, resourceId: 3, name: '$250', timeRangeColor: "white", startDate: '2023-7-26', duration: 1},
        { id: 84, resourceId: 4, name: '$250', timeRangeColor: "white", startDate: '2023-7-26', duration: 1},
        { id: 85, resourceId: 5, name: '$250', timeRangeColor: "white", startDate: '2023-7-26', duration: 1,},
        { id: 86, resourceId: 6, name: '$250', timeRangeColor: "white", startDate: '2023-7-26', duration: 1},
        { id: 87, resourceId: 7, name: '$250', timeRangeColor: "white", startDate: '2023-7-26', duration: 1,},
        { id: 88, resourceId: 8, name: '$250', timeRangeColor: "white", startDate: '2023-7-26', duration: 1},
        { id: 89, resourceId: 9, name: '$250', timeRangeColor: "white", startDate: '2023-7-26', duration: 1,},
        { id: 90, resourceId: 10, name: '$250', timeRangeColor: "white", startDate: '2023-7-26', duration: 1},
        { id: 91, resourceId: 1, cls:"noCheck-in closeOut2", name: '$250', timeRangeColor: "white", startDate: '2023-7-27', duration: 1},
        { id: 92, resourceId: 2, cls: 'unassignedRow', name: '$250', timeRangeColor: "white", startDate: '2023-7-27', duration: 1,},
        { id: 93, resourceId: 3, name: '$250', timeRangeColor: "white", startDate: '2023-7-27', duration: 1},
        { id: 94, resourceId: 4, name: '$250', timeRangeColor: "white", startDate: '2023-7-27', duration: 1},
        { id: 95, resourceId: 5, name: '$250', timeRangeColor: "white", startDate: '2023-7-27', duration: 1,},
        { id: 96, resourceId: 6, cls:"closeOut1", name: '$250', timeRangeColor: "white", startDate: '2023-7-27', duration: 1},
        { id: 97, resourceId: 7, name: '$250', timeRangeColor: "white", startDate: '2023-7-27', duration: 1,},
        { id: 98, resourceId: 8, name: '$250', timeRangeColor: "white", startDate: '2023-7-27', duration: 1},
        { id: 99, resourceId: 9, name: '$250', timeRangeColor: "white", startDate: '2023-7-27', duration: 1,},
        { id: 100, resourceId: 10, name: '$250', timeRangeColor: "white", startDate: '2023-7-27', duration: 1},
        { id: 101, resourceId: 1, name: '$250', timeRangeColor: "white", startDate: '2023-7-28', duration: 1},
        { id: 102, resourceId: 2, cls: 'unassignedRow', name: '$250', timeRangeColor: "white", startDate: '2023-7-28', duration: 1,},
        { id: 103, resourceId: 3, name: '$250', timeRangeColor: "white", startDate: '2023-7-28', duration: 1},
        { id: 104, resourceId: 4, name: '$250', timeRangeColor: "white", startDate: '2023-7-28', duration: 1},
        { id: 105, resourceId: 5, name: '$250', timeRangeColor: "white", startDate: '2023-7-28', duration: 1,},
        { id: 106, resourceId: 6, cls:"closeOut1", name: '$250', timeRangeColor: "white", startDate: '2023-7-28', duration: 1},
        { id: 107, resourceId: 7, name: '$250', timeRangeColor: "white", startDate: '2023-7-28', duration: 1,},
        { id: 108, resourceId: 8, name: '$250', timeRangeColor: "white", startDate: '2023-7-28', duration: 1},
        { id: 109, resourceId: 9, name: '$250', timeRangeColor: "white", startDate: '2023-7-28', duration: 1,},
        { id: 110, resourceId: 10, name: '$250', timeRangeColor: "white", startDate: '2023-7-28', duration: 1},
        { id: 111, resourceId: 1, cls:"noCheck-out",name: '$250', timeRangeColor: "white", startDate: '2023-7-29', duration: 1},
        { id: 112, resourceId: 2, cls:"unassignedRow", name: '$250', timeRangeColor: "white", startDate: '2023-7-29', duration: 1,},
        { id: 113, resourceId: 3,  name: '$250', timeRangeColor: "white", startDate: '2023-7-29', duration: 1},
        { id: 114, resourceId: 4, name: '$250', timeRangeColor: "white", startDate: '2023-7-29', duration: 1},
        { id: 115, resourceId: 5, name: '$250', timeRangeColor: "white", startDate: '2023-7-29', duration: 1,},
        { id: 116, resourceId: 6, cls:"closeOut1", name: '$250', timeRangeColor: "white", startDate: '2023-7-29', duration: 1},
        { id: 117, resourceId: 7, name: '$250', timeRangeColor: "white", startDate: '2023-7-29', duration: 1,},
        { id: 118, resourceId: 8, name: '$250', timeRangeColor: "white", startDate: '2023-7-29', duration: 1},
        { id: 119, resourceId: 9, name: '$250', timeRangeColor: "white", startDate: '2023-7-29', duration: 1,},
        { id: 120, resourceId: 10, name: '$250', timeRangeColor: "white", startDate: '2023-7-29', duration: 1},
        { id: 121, resourceId: 1, cls:"noCheck-out", name: '$250', timeRangeColor: "white", startDate: '2023-7-30', duration: 1},
        { id: 122, resourceId: 2, cls: 'unassignedRow', name: '$250', timeRangeColor: "white", startDate: '2023-7-30', duration: 1,},
        { id: 123, resourceId: 3,  name: '$250', timeRangeColor: "white", startDate: '2023-7-30', duration: 1},
        { id: 124, resourceId: 4,  name: '$250', timeRangeColor: "white", startDate: '2023-7-30', duration: 1},
        { id: 125, resourceId: 5, name: '$250', timeRangeColor: "white", startDate: '2023-7-30', duration: 1,},
        { id: 126, resourceId: 6, name: '$250', timeRangeColor: "white", startDate: '2023-7-30', duration: 1},
        { id: 127, resourceId: 7, name: '$250', timeRangeColor: "white", startDate: '2023-7-30', duration: 1,},
        { id: 128, resourceId: 8, name: '$250', timeRangeColor: "white", startDate: '2023-7-30', duration: 1},
        { id: 129, resourceId: 9, name: '$250', timeRangeColor: "white", startDate: '2023-7-30', duration: 1,},
        { id: 130, resourceId: 10, name: '$250', timeRangeColor: "white", startDate: '2023-7-30', duration: 1},
        { id: 131, resourceId: 1, name: '$250', timeRangeColor: "white", startDate: '2023-7-31', duration: 1},
        { id: 132, resourceId: 2, cls: 'unassignedRow', name: '$250', timeRangeColor: "white", startDate: '2023-7-31', duration: 1,},
        { id: 133, resourceId: 3, name: '$250', timeRangeColor: "white", startDate: '2023-7-31', duration: 1},
        { id: 134, resourceId: 4, name: '$250', timeRangeColor: "white", startDate: '2023-7-31', duration: 1},
        { id: 135, resourceId: 5, name: '$250', timeRangeColor: "white", startDate: '2023-7-31', duration: 1,},
        { id: 136, resourceId: 6, name: '$250', timeRangeColor: "white", startDate: '2023-7-31', duration: 1},
        { id: 137, resourceId: 7, name: '$250', timeRangeColor: "white", startDate: '2023-7-31', duration: 1,},
        { id: 138, resourceId: 8, name: '$250', timeRangeColor: "white", startDate: '2023-7-31', duration: 1},
        { id: 139, resourceId: 9, name: '$250', timeRangeColor: "white", startDate: '2023-7-31', duration: 1,},
        { id: 140, resourceId: 10, name: '$250', timeRangeColor: "white", startDate: '2023-7-31', duration: 1},
        { id: 141, resourceId: 1, name: '$250', timeRangeColor: "white", startDate: '2023-8-1', duration: 1},
        { id: 142, resourceId: 2, cls: 'unassignedRow', name: '$250', timeRangeColor: "white", startDate: '2023-8-1', duration: 1,},
        { id: 143, resourceId: 3, name: '$250', timeRangeColor: "white", startDate: '2023-8-1', duration: 1},
        { id: 144, resourceId: 4, name: '$250', timeRangeColor: "white", startDate: '2023-8-1', duration: 1},
        { id: 145, resourceId: 5, name: '$250', timeRangeColor: "white", startDate: '2023-8-1', duration: 1,},
        { id: 146, resourceId: 6, name: '$250', timeRangeColor: "white", startDate: '2023-8-1', duration: 1},
        { id: 147, resourceId: 7, name: '$250', timeRangeColor: "white", startDate: '2023-8-1', duration: 1,},
        { id: 148, resourceId: 8, name: '$250', timeRangeColor: "white", startDate: '2023-8-1', duration: 1},
        { id: 149, resourceId: 9, name: '$250', timeRangeColor: "white", startDate: '2023-8-1', duration: 1,},
        { id: 150, resourceId: 10, name: '$250', timeRangeColor: "white", startDate: '2023-8-1', duration: 1},
        { id: 151, resourceId: 1, name: '$250', timeRangeColor: "white", startDate: '2023-8-2', duration: 1},
        { id: 152, resourceId: 2, cls: 'unassignedRow', name: '$250', timeRangeColor: "white", startDate: '2023-8-2', duration: 1,},
        { id: 153, resourceId: 3, name: '$250', timeRangeColor: "white", startDate: '2023-8-2', duration: 1},
        { id: 154, resourceId: 4, name: '$250', timeRangeColor: "white", startDate: '2023-8-2', duration: 1},
        { id: 155, resourceId: 5, name: '$250', timeRangeColor: "white", startDate: '2023-8-2', duration: 1,},
        { id: 156, resourceId: 6, name: '$250', timeRangeColor: "white", startDate: '2023-8-2', duration: 1},
        { id: 157, resourceId: 7, name: '$250', timeRangeColor: "white", startDate: '2023-8-2', duration: 1,},
        { id: 158, resourceId: 8, name: '$250', timeRangeColor: "white", startDate: '2023-8-2', duration: 1},
        { id: 159, resourceId: 9, name: '$250', timeRangeColor: "white", startDate: '2023-8-2', duration: 1,},
        { id: 160, resourceId: 10, name: '$250', timeRangeColor: "white", startDate: '2023-8-2', duration: 1},
        { id: 161, resourceId: 1, name: '$250', timeRangeColor: "white", startDate: '2023-8-3', duration: 1},
        { id: 162, resourceId: 2, cls: 'unassignedRow', name: '$250', timeRangeColor: "white", startDate: '2023-8-3', duration: 1,},
        { id: 163, resourceId: 3, name: '$250', timeRangeColor: "white", startDate: '2023-8-3', duration: 1},
        { id: 164, resourceId: 4, name: '$250', timeRangeColor: "white", startDate: '2023-8-3', duration: 1},
        { id: 165, resourceId: 5, name: '$250', timeRangeColor: "white", startDate: '2023-8-3', duration: 1,},
        { id: 166, resourceId: 6, name: '$250', timeRangeColor: "white", startDate: '2023-8-3', duration: 1},
        { id: 167, resourceId: 7, name: '$250', timeRangeColor: "white", startDate: '2023-8-3', duration: 1,},
        { id: 168, resourceId: 8, name: '$250', timeRangeColor: "white", startDate: '2023-8-3', duration: 1},
        { id: 169, resourceId: 9, name: '$250', timeRangeColor: "white", startDate: '2023-8-3', duration: 1,},
        { id: 170, resourceId: 10, name: '$250', timeRangeColor: "white", startDate: '2023-8-3', duration: 1},
        { id: 171, resourceId: 1, name: '$250', timeRangeColor: "white", startDate: '2023-8-4', duration: 1},
        { id: 172, resourceId: 2, cls: 'unassignedRow', name: '$250', timeRangeColor: "white", startDate: '2023-8-4', duration: 1,},
        { id: 173, resourceId: 3, name: '$250', timeRangeColor: "white", startDate: '2023-8-4', duration: 1},
        { id: 174, resourceId: 4, name: '$250', timeRangeColor: "white", startDate: '2023-8-4', duration: 1},
        { id: 175, resourceId: 5, name: '$250', timeRangeColor: "white", startDate: '2023-8-4', duration: 1,},
        { id: 176, resourceId: 6, name: '$250', timeRangeColor: "white", startDate: '2023-8-4', duration: 1},
        { id: 177, resourceId: 7, name: '$250', timeRangeColor: "white", startDate: '2023-8-4', duration: 1,},
        { id: 178, resourceId: 8, name: '$250', timeRangeColor: "white", startDate: '2023-8-4', duration: 1},
        { id: 179, resourceId: 9, name: '$250', timeRangeColor: "white", startDate: '2023-8-4', duration: 1,},
        { id: 180, resourceId: 10, name: '$250', timeRangeColor: "white", startDate: '2023-8-4', duration: 1},

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

export { schedulerConfig };
