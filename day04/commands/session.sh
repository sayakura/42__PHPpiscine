curl -v -c cook.txt 'http://localhost:8100/ex00/index.js'
echo "\n================================================="
curl -v -b cook.txt 'http://localhost:8100/ex00/index.js?login=sb&passwd=beeone&submit=OK'
echo "\n================================================="
curl -v 'http://localhost:8100/ex00/index.js'
