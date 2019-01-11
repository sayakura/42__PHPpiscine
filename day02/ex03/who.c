#include <unistd.h>
#include <utmpx.h>
#include <stdio.h>
int
main(int argc, char *argv[])
{
    struct utmpx *entry;
	char buff[20];
	int 	index = 0;
	while ((entry = getutxent())) {
		if (index == 0)
		{
			index++;
			continue ;
		}
		strftime(buff, 20, "%b %d %H:%M", localtime(&(entry->ut_tv).tv_sec));
		printf("%s    %s  %s\n", entry->ut_user, entry->ut_line, buff);
		index++;
	}
	return (0);
}