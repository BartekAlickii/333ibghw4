# 333ibghw4


I believe that the backend is the same from homework 3. I don't recall any changes being made to it that weren't present in hw3.

For the frontend, clone the github repo, download all the necessary dependencies (like async storage), you may have to force or update your sdk since there's a lot of deprecated things floating around.

You'll be asked if you'd like to sign up or login on the homescreen.

Sign up takes
username
password
password again

and if all inputs meet the requirements, then you can sign up

Login takes
username
password

and if that combination exists in the database, then you can access the reviewboard

reviewboard prints all the songs in the database listed by username. 
provides the option to add songs

add song takes
song
artist
rating (1-5)

and adds it to the database if not already present (ie. username x song x artist, rating and ID shouldn't matter)
once you've added a song, you have to refresh the reviewboard!!!!!!!!!!!!!!
you can do this by pressing the back arrow in the top left, and then clicking to return to the reviewboard. you should now see your entry :).