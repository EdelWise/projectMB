<?php 
  class Signup {
    // DB stuff
    private $conn;
    private $table = 'emails';

    // Signup Properties
    public $id;
    public $email;
    public $domain;
    public $created_at;

    // Constructor with DB
    public function __construct($db) {
      $this->conn = $db;
    }

    // Get Signups
    public function read() {
      // Create query
      $query = 'SELECT e.id,e.email,e.domain,e.created_at
                                FROM ' . $this->table . ' e
                                ORDER BY
                                  e.created_at DESC';
      
      // Prepare statement
      $stmt = $this->conn->prepare($query);

      // Execute query
      $stmt->execute();

      return $stmt;
    }

  

    // Create Signup
    public function create() {
          // Create query
          $query = 'INSERT INTO ' . $this->table . ' SET email = :email, domain = :domain';

          // Prepare statement
          $stmt = $this->conn->prepare($query);

          // Clean data
          $this->email = htmlspecialchars(strip_tags($this->email));
          $this->domain = htmlspecialchars(strip_tags($this->domain));
          

          // Bind data
          $stmt->bindParam(':email', $this->email);
          $stmt->bindParam(':domain', $this->domain);
          

          // Execute query
          if($stmt->execute()) {
            return true;
      }

      // Print error if something goes wrong
      printf("Error: %s.\n", $stmt->error);

      return false;
    }

    

    // Delete Signup
    public function delete() {
          // Create query
          $query = 'DELETE FROM ' . $this->table . ' WHERE id = :id';

          // Prepare statement
          $stmt = $this->conn->prepare($query);

          // Clean data
          $this->id = htmlspecialchars(strip_tags($this->id));

          // Bind data
          $stmt->bindParam(':id', $this->id);

          // Execute query
          if($stmt->execute()) {
            return true;
          }

          // Print error if something goes wrong
          printf("Error: %s.\n", $stmt->error);

          return false;
    }
    
  }