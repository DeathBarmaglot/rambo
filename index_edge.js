/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};
var opts = {
    'gAudioPreloadPreference': 'auto',

    'gVideoPreloadPreference': 'auto'
};
var resources = [
];
var symbols = {
"stage": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
            {
                id: 'bg',
                type: 'image',
                rect: ['-10px', '-7px','320px','206px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"bg.png",'0px','0px']
            },
            {
                id: 'lgo',
                type: 'image',
                rect: ['0px', '-30px','108px','114px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"lgo.png",'0px','0px'],
                transform: [[],[],[],[],['47.2222%','75.4385%']]
            },
            {
                id: 'deliv',
                type: 'image',
                rect: ['-213px', '23px','182px','32px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"deliv.png",'0px','0px']
            },
            {
                id: 'site',
                type: 'image',
                rect: ['196px', '100px','93px','9px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"site.png",'0px','0px']
            },
            {
                id: 'promo',
                type: 'image',
                rect: ['115px', '23px','169px','41px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"promo.png",'0px','0px']
            },
            {
                id: 'stallone',
                type: 'image',
                rect: ['0px', '-5px','304px','196px','auto', 'auto'],
                clip: ['rect(16.666677474975586px 304px 196px 0px)'],
                fill: ["rgba(0,0,0,0)",im+"stallone.png",'0px','0px'],
                transform: [[],[],[],['0.9','0.9']]
            },
            {
                id: 'give',
                type: 'image',
                rect: ['83px', '85px','157px','54px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"give.png",'0px','0px']
            },
            {
                id: 'deliv2',
                type: 'image',
                rect: ['326px', '54px','101px','33px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"deliv2.png",'0px','0px']
            },
            {
                id: 'phone2',
                type: 'image',
                rect: ['330px', '14px','146px','29px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"phone2.png",'0px','0px']
            }],
            symbolInstances: [

            ]
        },
    states: {
        "Base State": {
            "${_deliv}": [
                ["style", "left", '-213px'],
                ["style", "top", '23px']
            ],
            "${_stallone}": [
                ["style", "top", '-5px'],
                ["transform", "scaleY", '0.95'],
                ["transform", "scaleX", '0.95'],
                ["style", "opacity", '1'],
                ["style", "left", '-315px'],
                ["style", "clip", [16.666677474975586,304,196,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ],
            "${_phone2}": [
                ["style", "top", '14px'],
                ["transform", "scaleY", '0'],
                ["style", "left", '315px'],
                ["transform", "scaleX", '0']
            ],
            "${_deliv2}": [
                ["style", "top", '54px'],
                ["transform", "scaleY", '0'],
                ["style", "left", '341px'],
                ["transform", "scaleX", '0']
            ],
            "${_promo}": [
                ["style", "top", '23px'],
                ["transform", "scaleY", '0'],
                ["transform", "scaleX", '0'],
                ["style", "opacity", '1'],
                ["style", "left", '115px']
            ],
            "${_bg}": [
                ["style", "top", '-7px'],
                ["style", "left", '-10px']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "width", '300px'],
                ["style", "height", '180px'],
                ["style", "overflow", 'hidden']
            ],
            "${_give}": [
                ["style", "top", '85px'],
                ["transform", "scaleY", '0'],
                ["transform", "scaleX", '0'],
                ["style", "opacity", '1'],
                ["style", "left", '83px']
            ],
            "${_site}": [
                ["style", "top", '100px'],
                ["transform", "scaleY", '0'],
                ["style", "left", '318px'],
                ["transform", "scaleX", '0']
            ],
            "${_lgo}": [
                ["style", "top", '-30px'],
                ["transform", "scaleY", '0'],
                ["transform", "rotateZ", '0deg'],
                ["transform", "scaleX", '0'],
                ["style", "opacity", '1'],
                ["style", "left", '0px'],
                ["style", "-webkit-transform-origin", [47.22,75.44], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [47.22,75.44],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [47.22,75.44],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [47.22,75.44],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [47.22,75.44],{valueTemplate:'@@0@@% @@1@@%'}]
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 12000,
            autoPlay: true,
            timeline: [
                { id: "eid81", tween: [ "transform", "${_promo}", "scaleY", '1', { fromValue: '0'}], position: 6025, duration: 725, easing: "easeInOutElastic" },
                { id: "eid83", tween: [ "transform", "${_give}", "scaleY", '1', { fromValue: '0'}], position: 6570, duration: 680, easing: "easeInOutElastic" },
                { id: "eid24", tween: [ "transform", "${_phone2}", "scaleX", '1', { fromValue: '0'}], position: 1000, duration: 250, easing: "easeInOutElastic" },
                { id: "eid70", tween: [ "transform", "${_phone2}", "scaleX", '1', { fromValue: '0.9'}], position: 2421, duration: 250, easing: "easeInOutQuad" },
                { id: "eid71", tween: [ "transform", "${_phone2}", "scaleX", '1', { fromValue: '0.9'}], position: 3671, duration: 250, easing: "easeInOutQuad" },
                { id: "eid72", tween: [ "transform", "${_phone2}", "scaleX", '1', { fromValue: '0.9'}], position: 4921, duration: 250, easing: "easeInOutQuad" },
                { id: "eid41", tween: [ "transform", "${_phone2}", "scaleX", '0', { fromValue: '1'}], position: 5400, duration: 250, easing: "easeInOutElastic" },
                { id: "eid96", tween: [ "transform", "${_phone2}", "scaleX", '1', { fromValue: '0'}], position: 7054, duration: 250, easing: "easeInOutElastic" },
                { id: "eid97", tween: [ "transform", "${_phone2}", "scaleX", '1', { fromValue: '0.9'}], position: 8587, duration: 250, easing: "easeInOutQuad" },
                { id: "eid98", tween: [ "transform", "${_phone2}", "scaleX", '1', { fromValue: '0.9'}], position: 9881, duration: 250, easing: "easeInOutQuad" },
                { id: "eid100", tween: [ "transform", "${_phone2}", "scaleX", '0', { fromValue: '1'}], position: 11375, duration: 250, easing: "easeInOutElastic" },
                { id: "eid114", tween: [ "style", "${_give}", "opacity", '0', { fromValue: '1'}], position: 11375, duration: 625, easing: "easeInOutElastic" },
                { id: "eid27", tween: [ "transform", "${_deliv2}", "scaleY", '1', { fromValue: '0'}], position: 1250, duration: 250, easing: "easeInOutElastic" },
                { id: "eid46", tween: [ "transform", "${_deliv2}", "scaleY", '0', { fromValue: '1'}], position: 5500, duration: 250, easing: "easeInOutElastic" },
                { id: "eid22", tween: [ "style", "${_phone2}", "left", '148px', { fromValue: '315px'}], position: 1000, duration: 625, easing: "easeOutElastic" },
                { id: "eid42", tween: [ "style", "${_phone2}", "left", '265px', { fromValue: '148px'}], position: 5400, duration: 625, easing: "easeOutElastic" },
                { id: "eid101", tween: [ "style", "${_phone2}", "left", '85px', { fromValue: '265px'}], position: 7054, duration: 147, easing: "easeOutElastic" },
                { id: "eid102", tween: [ "style", "${_phone2}", "left", '315px', { fromValue: '78px'}], position: 11375, duration: 625, easing: "easeOutElastic" },
                { id: "eid12", tween: [ "style", "${_stallone}", "left", '-7px', { fromValue: '-315px'}], position: 312, duration: 1000, easing: "easeOutElastic" },
                { id: "eid116", tween: [ "style", "${_promo}", "opacity", '0', { fromValue: '1'}], position: 11375, duration: 625, easing: "easeInOutElastic" },
                { id: "eid115", tween: [ "style", "${_lgo}", "opacity", '0', { fromValue: '1'}], position: 11375, duration: 625, easing: "easeInOutElastic" },
                { id: "eid53", tween: [ "transform", "${_stallone}", "scaleY", '0', { fromValue: '0.95'}], position: 5650, duration: 415, easing: "easeInOutElastic" },
                { id: "eid80", tween: [ "transform", "${_promo}", "scaleX", '1', { fromValue: '0'}], position: 6025, duration: 725, easing: "easeInOutElastic" },
                { id: "eid26", tween: [ "transform", "${_deliv2}", "scaleX", '1', { fromValue: '0'}], position: 1250, duration: 250, easing: "easeInOutElastic" },
                { id: "eid45", tween: [ "transform", "${_deliv2}", "scaleX", '0', { fromValue: '1'}], position: 5500, duration: 250, easing: "easeInOutElastic" },
                { id: "eid54", tween: [ "transform", "${_lgo}", "rotateZ", '360deg', { fromValue: '0deg'}], position: 0, duration: 250, easing: "easeOutQuad" },
                { id: "eid30", tween: [ "transform", "${_site}", "scaleX", '1', { fromValue: '0'}], position: 1500, duration: 250, easing: "easeInOutElastic" },
                { id: "eid48", tween: [ "transform", "${_site}", "scaleX", '0', { fromValue: '1'}], position: 5650, duration: 250, easing: "easeInOutElastic" },
                { id: "eid82", tween: [ "transform", "${_give}", "scaleX", '1', { fromValue: '0'}], position: 6570, duration: 680, easing: "easeInOutElastic" },
                { id: "eid23", tween: [ "style", "${_site}", "left", '196px', { fromValue: '318px'}], position: 1500, duration: 375, easing: "easeOutElastic" },
                { id: "eid47", tween: [ "style", "${_site}", "left", '318px', { fromValue: '196px'}], position: 5650, duration: 375, easing: "easeOutElastic" },
                { id: "eid112", tween: [ "style", "${_phone2}", "top", '149px', { fromValue: '14px'}], position: 7054, duration: 147, easing: "easeInOutElastic" },
                { id: "eid52", tween: [ "transform", "${_stallone}", "scaleX", '0', { fromValue: '0.95'}], position: 5650, duration: 415, easing: "easeInOutElastic" },
                { id: "eid31", tween: [ "transform", "${_site}", "scaleY", '1', { fromValue: '0'}], position: 1500, duration: 250, easing: "easeInOutElastic" },
                { id: "eid49", tween: [ "transform", "${_site}", "scaleY", '0', { fromValue: '1'}], position: 5650, duration: 250, easing: "easeInOutElastic" },
                { id: "eid6", tween: [ "transform", "${_lgo}", "scaleX", '1', { fromValue: '0'}], position: 0, duration: 250, easing: "easeInOutElastic" },
                { id: "eid25", tween: [ "transform", "${_phone2}", "scaleY", '1', { fromValue: '0'}], position: 1000, duration: 250, easing: "easeInOutElastic" },
                { id: "eid73", tween: [ "transform", "${_phone2}", "scaleY", '1', { fromValue: '0.9'}], position: 2421, duration: 250, easing: "easeInOutQuad" },
                { id: "eid74", tween: [ "transform", "${_phone2}", "scaleY", '1', { fromValue: '0.9'}], position: 3671, duration: 250, easing: "easeInOutQuad" },
                { id: "eid75", tween: [ "transform", "${_phone2}", "scaleY", '1', { fromValue: '0.9'}], position: 4921, duration: 250, easing: "easeInOutQuad" },
                { id: "eid43", tween: [ "transform", "${_phone2}", "scaleY", '0', { fromValue: '1'}], position: 5400, duration: 250, easing: "easeInOutElastic" },
                { id: "eid103", tween: [ "transform", "${_phone2}", "scaleY", '1', { fromValue: '0'}], position: 7054, duration: 250, easing: "easeInOutElastic" },
                { id: "eid104", tween: [ "transform", "${_phone2}", "scaleY", '1', { fromValue: '0.9'}], position: 8587, duration: 250, easing: "easeInOutQuad" },
                { id: "eid105", tween: [ "transform", "${_phone2}", "scaleY", '1', { fromValue: '0.9'}], position: 9881, duration: 250, easing: "easeInOutQuad" },
                { id: "eid107", tween: [ "transform", "${_phone2}", "scaleY", '0', { fromValue: '1'}], position: 11375, duration: 250, easing: "easeInOutElastic" },
                { id: "eid21", tween: [ "style", "${_deliv2}", "left", '191px', { fromValue: '341px'}], position: 1250, duration: 625, easing: "easeOutElastic" },
                { id: "eid44", tween: [ "style", "${_deliv2}", "left", '341px', { fromValue: '191px'}], position: 5500, duration: 625, easing: "easeOutElastic" },
                { id: "eid7", tween: [ "transform", "${_lgo}", "scaleY", '1', { fromValue: '0'}], position: 0, duration: 250, easing: "easeInOutElastic" }            ]
        }
    }
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources, opts);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "EDGE-8845894");
