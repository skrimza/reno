<?php
$msg_box = "";
    $errors = array();

    if($_POST['project'] == "")    $errors[] = "error";
    if($_POST['community'] == "")   $errors[] = "error";
    if($_POST['email'] == "") $errors[] = "error";
    if($_POST['phone'] == "") $errors[] = "error";
 
    if(empty($errors)){     

        $message  = "choise client: " . $_POST['checkbox'] . "<br/>";
        $message  = "project client: " . $_POST['project'] . "<br/>";
        $message .= "community client: " . $_POST['community'] . "<br/>";
        $message .= "email: " . $_POST['email'] . "<br/>";
        $message .= "phone: " . $_POST['phone'] . "<br/>";
        send_mail($message); 

        $msg_box = "<span style='color: green;'>good</span>";
    }else{

        $msg_box = "";
        foreach($errors as $one_error){
            $msg_box .= "<span style='color: red;'>$one_error</span><br/>";
        }
    }
 

    echo json_encode(array(
        'result' => $msg_box
    ));
     
     

    function send_mail($message){

        $mail_to = "skrimza0604@gmail.com"; 

        $subject = "message";
         
        $headers= "MIME-Version: 1.0\r\n";
        $headers .= "Content-type: text/html; charset=utf-8\r\n"; // кодировка письма
        $headers .= "From: text message <no-reply@test.com>\r\n"; // от кого письмо
         
        mail($mail_to, $subject, $message, $headers);
    }

?>