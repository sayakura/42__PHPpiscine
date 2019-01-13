echo "\tcreating account (OK): "

curl -d login=x -d passwd=21 -d submit=OK 'http://localhost:8100/ex01/create.js'


echo "\tmodifying password (OK): "

curl -d login=x -d oldpw=21 -d newpw=42 -d submit=OK 'http://localhost:8100/ex02/modif.js'


echo "\ttesting with wrong password: (ERROR): "

curl -d login=x -d oldpw=21 -d newpw=42 -d submit=OK 'http://localhost:8100/ex02/modif.js'


echo "\ttesting with no password: (ERROR): "

curl -d login=x -d oldpw=42 -d newpw= -d submit=OK 'http://localhost:8100/ex02/modif.js'

