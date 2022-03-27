you can create a plist file by a template plist file, and in template file you can use variable.

# Installation

`$npm install plist-from-template`

# Start

```javascript
const PlistFactoryPlugin = require('plist-from-template');
new PlistFactoryPlugin({
  // require
  output: { // output is necessary, or it's won't work
    filename: "test", // don't use file extension
    path: './xyz'// this path is relative to you project path
  },
  template: './manifest_temp.plist', //relative to you project path
  // option
  key: 'myKey', // your variable name
  value: 'myValue' // your variable name
})
```

the variable use in plist should surround by '$', just like this template, the '$key$' and '$value$' is variable, if it's not support in plugin option, the file generate will contain thoese variable

```xml
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
	<key>items</key>
	<dict>
		<key>$key$</key>
		<string>$value$</string>
	</dict>
</dict>
</plist>
```



## Use Demo

```javascript
$ npm run demo
```

