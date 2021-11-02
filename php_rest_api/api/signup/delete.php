<?php 
  // Headers
  header('Access-Control-Allow-Origin: *');
  header('Content-Type: application/json');
  header('Access-Control-Allow-Methods: DELETE');
  header('Access-Control-Allow-Headers: Access-Control-Allow-Headers,Content-Type,Access-Control-Allow-Methods, Authorization, X-Requested-With');

  include_once '../../config/Database.php';
  include_once '../../models/Signup.php';

  // initiate DB & connect
  $database = new Database();
  $db = $database->connect();

  // initiate blog post object
  $signup = new Signup($db);

  // Get raw posted data
  $data = json_decode(file_get_contents("php://input"));

  // Set ID to delete
  $signup->id = $data->id;

  // Delete signup

    if($signup->delete()) {
    echo json_encode(
      array('message' => 'Signup entry Deleted')
    );
  } else {
    echo json_encode(
      array('message' => 'Signup entry not Deleted')
    );
  }
  

  

