Installation Instructions

1. Download Simple Authorization Script.
2. Unpack the zip file.
3. Open and configure the sas.php file.

	  * Change the variable $pass to the password you would like to use.
	  * Optional: Change the variable $cookiename.
	  * Optional: Change the expiry time ($expirytime). Default is 1 hour.
	  * Optional: Change the error message ($msg)

   Optional: You can change the look of the login page by altering the function 
   "show_login_page", but DO NOT DELETE ANY FORM INPUTS and DO NOT ALTER THE 
   HIDDEN INPUT. We also request that you leave the footer credit as is.

4. Add the following line to the page you wish to password protect. This line 
   should be included as the first line in php.
		
		require('sas.php');

   Optional: Add a logout button or logout text string to your password 
   protected pages. Place the following line of php code on your password 
   protected page where you want the display the logout button/text string.
   
   For a logout button, use the php code:
   
   <?=$logout_button?>
   
   For a logout text string, use the php code:
   
   <?=$logout_text?>

5. Upload sas.php and your password protected page in the same folder on your 
   server.

===

Troubleshooting

There is a known issue of SAS and the PHP error reporting level of web servers. 
There is a config file on web servers that sets the error reporting levels for 
PHP scripts, typically, this reporting level is set to:

error_reporting(E_ALL ^ E_NOTICE);

Meaning that PHP will report all errors and warnings, but NOT PHP notices. On 
some occasions, web servers are set to to report all errors, warnings AND 
notices, this typically looks like this in the PHP config file:

error_reporting(E_ALL);

OR

error_reporting(E_STRICT);

SAS may show some PHP notices when error reporting is set to E_ALL. Typically, 
you'll see the following notice at the top of your web page.

PHP Notice: Undefined index: ...

This is one solution to resolve this problem:

1. Open up sas.php
2. Add the following code as the second line of the file (under <?php) 

   error_reporting(E_ALL ^ E_NOTICE);

3. Save and upload sas.php

===

Still have problems?

Try testing a unmodified version of demo.php and sas.php.

1. Upload an unmodified version of demo.php and sas.php
2. Open up demo.php in your web browser, e.g. 

   http:www.yourwebsite.com/demo.php

3. Test the script by entering in an incorrect password, then enter in the 
   correct password.

Does it work? If not, please feel free to contact us or ask a question. 
Remember to leave details and specifics of your problem, simply stating 
"It doesn't work" doesn't help me help you solve the problem! 