<?php
include 'config.php';

$postdata= file_get_contents("php://input");
$request = json_decode($postdata);

$query = "INSERT INTO feedback (seek_name, feedback_msg) values('$request->feedname','$request->feedmsg')";

$result = $conn->query($query);
	if($result){
		echo json_encode("OK");
	}

?>