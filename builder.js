'use strict';

var timer = new Timer();
console.log(timer.getCurrentTime());
var television = new Television(new WiFi('idle', true));
television.setState('on');
television.setChannel(31);

console.dir(television.getState());
console.dir(television);
alert(television.getChannel());

