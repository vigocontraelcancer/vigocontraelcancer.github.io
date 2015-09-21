<?php
if($_POST)
{
    $to_email       = "vigocontraelcancer@gmail.com"; //Recipient email, Replace with own email here
    
    //check if its an ajax request, exit if not
    if(!isset($_SERVER['HTTP_X_REQUESTED_WITH']) AND strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) != 'xmlhttprequest') {
        
        $output = json_encode(array( //create JSON data
            'type'=>'error', 
            'text' => 'Sorry Request must be Ajax POST'
        ));
        die($output); //exit script outputting json data
    } 
    
    //Sanitize input data using PHP filter_var().
    $user_name      = filter_var($_POST["user_name"], FILTER_SANITIZE_STRING);
    $user_email     = filter_var($_POST["user_email"], FILTER_SANITIZE_EMAIL);
    $message        = filter_var($_POST["msg"], FILTER_SANITIZE_STRING);
    
    //additional php validation
    if(strlen($user_name)<4){ // If length is less than 4 it will output JSON error.
        $output = json_encode(array('type'=>'error', 'text' => 'Name is too short or empty!'));
        die($output);
    }
    if(!filter_var($user_email, FILTER_VALIDATE_EMAIL)){ //email validation
        $output = json_encode(array('type'=>'error', 'text' => 'Please enter a valid email!'));
        die($output);
    }
    if(strlen($message)<3){ //check emtpy message
        $output = json_encode(array('type'=>'error', 'text' => 'Too short message! Please enter something.'));
        die($output);
    }
    
    //email body
    $message_body = "Mail de vigocontraelcancer.es";
    
    //proceed with PHP email.
    $headers = 
    'Nombre:  '.$user_name."\r\n".
    'Email:   '.$user_email."\r\n".
    'Mensaje: '.$message;
    
    $send_mail = mail($to_email, $message_body, $headers);
    
    if(!$send_mail)
    {
        //If mail couldn't be sent output error. Check your PHP email configuration (if it ever happens)
    $output = json_encode(array('type'=>'error', 'text' => 'Hubo un error (la liamos). Puedes enviar el correo a info@vigocontraelcancer.es'));
        die($output);
    }else{
        $output = json_encode(array('type'=>'message', 'text' => '¡Listo! Mensaje enviado.'));
        die($output);
    }
}
?>