
import Timer from "./Timer";
import WiFi from "./WiFi";
import Television from "./Television";

'use strict';

console.log(Timer.getCurrentTime());
let television = new Television('Kitchen TV', new WiFi('Kitchen WiFi', 'idle', true));
television.state = 'on';
television.channel = 31;

console.dir(television.state);
console.dir(television);
alert(television.channel);
alert(television.toString());

// set delay 1 min
Timer.setDelay(1, () => {
    television.state = 'off';
    alert('TV has been taken off after 1 minute. Current state is: ' + television.state);
});