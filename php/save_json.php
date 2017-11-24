<!doctype html>
<html>
<head>
<meta charset="utf-8">
<title>Save JSON</title>
</head>

<body>
<!-- Входящий поток php://input содержит имя файла 
		 и его содержимое в формате json  -->
<?php
	$json = file_get_contents('php://input');
	$obj = json_decode( $json );
	$file_name = $obj->file_name;
	$file_content = $obj->file_content;
	echo $file_name.\n.$file_content;
	if ( $file_name ) {
		chdir('/vue.github.io/data/');
		if( !empty( $file_content ) ) {
			file_put_contents( $file_name, $file_content );
		} else {
    		echo "file content is empty";
		}
	} else {
		echo "file name is undefined";
	}
?>
<p><?php echo $json ?></p>
</body>
</html>
