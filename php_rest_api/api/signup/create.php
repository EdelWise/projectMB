<?php 
  // Headers
  header('Access-Control-Allow-Origin: *');
  header('Content-Type: application/json');
  header('Access-Control-Allow-Methods: POST');
  header('Access-Control-Allow-Headers: Access-Control-Allow-Headers,Content-Type,Access-Control-Allow-Methods, Authorization, X-Requested-With');

  include_once '../../config/Database.php';
  include_once '../../models/Signup.php';

  // Initiate DB & connect
  $database = new Database();
  $db = $database->connect();

  $signup = new Signup($db);

  // Get raw posted data
  $data = json_decode(file_get_contents("php://input"));

  $signup->email = $data->email;
  $signup->domain = $data->domain;

  // Create entry
  if($signup->create()) {
    echo json_encode(
      array('message' => 'Email added')
    );
  } else {
    echo json_encode(
      array('message' => 'Email not added')
    );
  }

