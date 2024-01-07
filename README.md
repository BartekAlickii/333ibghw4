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

The blue pencil in reviewboard allows the user to edit the ID specified, while the red trash can allows the user to delete the ID specified.
Alerts guide the user through this process, with a limiting factor placed on what inputs are allowed for the editing of a rating. 
If the input is invalid the user will be stopped with an alert.

The search function allows the user to have only reviews appear that match the search keyword for every field with the exception of rating.

ChatGPT was utilized throughout the development process of this repo as a resource.

# Quick Tips:
Using a functioning backend setup supported in HW3 (linked here: [https://github.com/GHorningKane/333ibghw3/tree/mainMerge1]), 
expo (already configured),
and yarn,
one can sucessfully run the code from this repo by: 
- Downloading the zip file
- Extracting the contents
- cd into 'HW4ReactNativeApp' via the terminal
- Enter 'yarn' into the terminal cd'd into 'HW4ReactNativeApp'
- Enter 'npm run ios' into the terminal (ensure watchman has access to your working folder)
- If/When prompted, 'use port 8082 instead?' Enter/choose yes!
- The code should execute properly! :D
- Now make sure that your config.js has your correct ip address entered.
- That should hopefully be it! Enjoy~

# Additional potential issue
- Make sure that your xampp backend is running the hw3 version since the axios requests demand a folder structure as such (for example edit functionality) =>
- "axios
        .put(`http://localhost/333ibghw3/index.php/user/edit?id=${id}&username=${username}&song=${editedSong}&artist=${editedArtist}&rating=${editedRating}`)"
- This indicates that in the localhost for your xammp you must have hw3's backend setup properly oriented with these directories matching^.
