<? require('sas.php'); ?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<title>Authorization Successful</title>
<style type="text/css">
<!--
.error {color:#A80000}
body {font:90% Verdana, Arial, sans-serif;color:#404040}
#wrapper {width:800px;margin:0 auto;border:1px solid #606060}
#main {text-align:left;padding:15px}
#header {font:bold 130% Verdana, Arial, sans-serif;color:#DDDDDD;width:100%;height:5em;text-align:center;background:#A80000;line-height:5em}
#footer {font-size:75%;text-align:center;width:100%}
input {border:1px solid #606060; background: #DDDDDD}
p {line-height:130%}
-->
</style>
</head>
<body>
<div id="wrapper">
	<div id="header">Authorization Successful</div>

	<div id="main">
		<p>
		If you can see this page, then you have successfully entered in the correct password for the Simple Autorization Script demo. We hope this example of the use of SAS meets your expectations.
		</p>
		
		<p>
		You will be able to access this page without entering in the password for the next hour. After which, you will be required to enter the password again.
		</p>
		
		<p>
		<strong>** New ** Optional logout feature.</strong> The logout button is an optional feature which you may like to include in your installation of SAS. To see the logout feature at work, please click on the logout button below. The logout button will expire the password (and cookie) and the login page should show up. 
		</p>
		
		<p>Logout Button:</p> <?=$logout_button?>
		
		<p>Logout Text:</p> <?=$logout_text?>
		
		<p>
		For installation instructions, see the <strong>readme.txt</strong> file located in the Simple Authorization Script folder, or view the <a href="http://www.zann-marketing.com/sas/installation.php">online version here</a>.
		</p>
		
		<p>
		If you found Simple Authorization Script useful, please make a small donation through PayPal.
		</p>
		
		<div style="text-align:center">
			<form action="https://www.paypal.com/cgi-bin/webscr" method="post">
			<input type="hidden" name="cmd" value="_s-xclick" />
			<input type="image" src="https://www.paypal.com/en_US/i/btn/x-click-but04.gif" border="0" name="submit" alt="Make payments with PayPal - it's fast, free and secure!" />
			<input type="hidden" name="encrypted" value="-----BEGIN PKCS7-----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-----END PKCS7-----" />
			</form>
		</div>
	
		<p>
		Support SAS by linking to us. You can use this information:
		</p>
		
		<textarea rows="2" cols="75">&lt;a href="http://www.zann-marketing.com/sas/"&gt;Simple Authorization Script&lt;/a&gt;&lt;br&gt;A simple php script which password protects web pages without a database.</textarea>
	
	</div>
</div>
<div id="footer">Authentication by <a href="http://www.zann-marketing.com/sas/">Simple Authorization Script</a> Copyright &copy; 2005.</div>
</body>
</html>