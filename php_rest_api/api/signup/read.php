<?php 
  // Headers
  header('Access-Control-Allow-Origin: *');
  header('Content-Type: application/json');

  include_once '../../config/Database.php';
  include_once '../../models/Signup.php';

  // Initiate DB & connect
  $database = new Database();
  $db = $database->connect();

  $signup = new Signup($db);

  //   query
  $result = $signup->read();
  // Get row count
  $num = $result->rowCount();

  // Check if any signups
  if($num > 0) {
    // Post array
    $signups_arr = array();
    // $posts_arr['data'] = array();

    while($row = $result->fetch(PDO::FETCH_ASSOC)) {
      extract($row);

      $signup_item = array(
        'id' => $id,
        'email' => $email,
        'domain' => $domain,
        'date' =>$created_at
      );

      // Push to arr
      array_push($signups_arr, $signup_item);
    }

    // Turn to JSON & output
    echo json_encode($signups_arr);

  } else {
    // No entries
    echo json_encode(
      array('message' => 'No Signups Found')
    );
  }
