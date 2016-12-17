var express = require('express');

var app = express();

/**
 * Discovery endpoint
 * Requires following identity format: http://localhost:3000/id/<steamid>
 */

app.get('/id/:steamid', function(req, res) {

  res.set('Content-Type', 'application/xrds+xml;charset=utf-8');

  res.send(`
<?xml version="1.0" encoding="UTF-8"?>
<xrds:XRDS xmlns:xrds="xri://$xrds" xmlns="xri://$xrd*($v*2.0)">
	<XRD>
		<Service priority="0">
			<Type>http://specs.openid.net/auth/2.0/signon</Type>
			<URI>http://localhost:3000</URI>
		</Service>
	</XRD>
</xrds:XRDS>
  `)

});

/**
 * Validation endpoint
 * We simply validate every incoming request
 */

app.post('/', function(req, res) {

  res.send('ns:http://specs.openid.net/auth/2.0\nis_valid:true\n');

});


/**
 * Run the server
 */

app.listen(3000);
