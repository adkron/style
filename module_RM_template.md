#Module Title 
Very brief description, e.g. "Driver for the relay-mono Tessel relay module. The hardware documentation for this module can be found [here](https://github.com/tessel/hardware/blob/master/modules-overview.md#relay)."

If you run into any issues you can ask for support on the [Relay Module Forums](http://forums.tessel.io/category/relay).

###Important Information Specific to Module
e.g. "Here are some pictures that will help you plug in this module" or "these are the switches that are user controlled."

###Installation
```sh
npm install relay-im48dgr
```

###Example
```js
Exactly the contents of the examples/<module name>.js.
The importation line should refer to the npm module, not '../'.
```

###Methods  
&#x20;<a href="#api-relay-getState-relayChannel-callback-err-state-Gets-the-state-of-the-specified-relay-channel-true-for-on-and-false-for-off" name="api-relay-getState-relayChannel-callback-err-state-Gets-the-state-of-the-specified-relay-channel-true-for-on-and-false-for-off">#</a> relay<b>.getState</b> ( relayChannel, callback(err, state) ) Gets the state of the specified relay channel: "true" for on and "false" for off.  

&#x20;<a href="#api-relay-toggle-relayChannel-callback-err-Switches-the-state-of-the-specified-relay-channel-on-if-it-s-off-off-if-it-s-on" name="api-relay-toggle-relayChannel-callback-err-Switches-the-state-of-the-specified-relay-channel-on-if-it-s-off-off-if-it-s-on">#</a> relay<b>.toggle</b>( relayChannel, callback(err) ) Switches the state of the specified relay channel: on if it's off; off if it's on.  

&#x20;<a href="#api-relay-turnOff-relayChannel-callback-err-Switches-off-the-specified-relay-channel" name="api-relay-turnOff-relayChannel-callback-err-Switches-off-the-specified-relay-channel">#</a> relay<b>.turnOff</b>( relayChannel, callback(err) ) Switches off the specified relay channel.  

&#x20;<a href="#api-relay-turnOn-relayChannel-callback-err-Switches-on-the-specified-relay-channel" name="api-relay-turnOn-relayChannel-callback-err-Switches-on-the-specified-relay-channel">#</a> relay<b>.turnOn</b>( relayChannel, callback(err) ) Switches on the specified relay channel.  

###Events  
&#x20;<a href="#api-relay-on-error-callback-err-Emitted-upon-error" name="api-relay-on-error-callback-err-Emitted-upon-error">#</a> relay<b>.on</b>( 'error', callback(err) ) Emitted upon error.  

&#x20;<a href="#api-relay-on-data-callback-data-Emitted-when-data-is-available" name="api-relay-on-data-callback-data-Emitted-when-data-is-available">#</a> relay<b>.on</b>( 'data', callback(data) ) Emitted when data is available.  

&#x20;<a href="#api-relay-on-ready-callback-Emitted-upon-first-successful-communication-between-the-Tessel-and-the-module" name="api-relay-on-ready-callback-Emitted-upon-first-successful-communication-between-the-Tessel-and-the-module">#</a> relay<b>.on</b>( 'ready', callback() ) Emitted upon first successful communication between the Tessel and the module.  

###Further Examples  
* [Audio playback](link to example for this in the "examples" folder). Description of what this example does. 

###Extra Hardware Informations and Advanced Information
* Useful details and diagrams of the hardware 
* Any cool hacks e.g. wire hacks

###Licensing  
MIT or Apache 2.0, at your option
