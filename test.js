(function () {
    var curl = 'curl -u "demo" -X POST -d @file1.txt -d @file2.txt https://example.com/upload';

    var curlParser = require('./curl-parser.js');
    var curlData = curlParser.parse_curl(curl)
    console.log(curlData);
})();