
# CzasNaMasaz

Website made commisioned by consumer for advertising his services
in the field of massages. Website was implemented in two versions. One of
them is with own mailing system implemented in PHP and the second one is with
external mailing system – **formspree.io** which integrate mail with website form.

## How to run?

To run website with **formspree.io** mailing system:
Visit deployment: [czas-na-masaz.netlify.app](https://czas-na-masaz.netlify.app/)

To run website with own mailing system:
-	Download localhost server hosting like **XAMPP** and run **Apache server** and **MySQL**
-	Create in **phpMyAdmin** database *czasnamasaz*, next import to this database *czasnamasaz.sql* file which is in **db** folder. File contains structure of tables
-	Go to **_phpVersion** folder and paste content to main folder replacing *index.html* to *index.php*
-	All project paste to **htdocs** folder in **xampp** folder
-	Db is empty if you want to login type **localhost/php/adminlog.php**, before it create login and password in *phpMyAdmin* in *admin* table

**IMPORTANT!** Website is no more used by consumer, all website is under development.

## Tech Stack

- HTML
- CSS
- JavaScript
- PHP
- MySQL

## Authors

- [@kondi171](https://github.com/kondi171)
