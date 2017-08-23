'use strict';

console.log(Timer.getCurrentTime());
Timer.setDelay(1, () => alert('After 1 minute'));
let television = new Television('Kitchen TV', new WiFi('Kitchen WiFi', 'idle', true));
television.state = 'on';
television.channel = 31;

console.dir(television.state);
console.dir(television);
alert(television.channel);
alert(television.toString());

/*let deviceCore = new DeviceCore('test device');
console.log(deviceCore);
console.log(deviceCore.state);
console.log(deviceCore.state = 'on');
console.log(deviceCore);
console.log(Helper.uuidv4);*/

