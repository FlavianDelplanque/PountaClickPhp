<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "pountaclick";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 

// sql to create table
$sql = "CREATE TABLE test (
id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY, 
formecouleur INT(1) NOT NULL,
choixformecouleur INT(1) NOT NULL,
formenoir INT(1) NOT NULL,
choixformenoir INT(1) NOT NULL,
formebonus INT(1) NOT NULL,
choixformebonus INT(1) NOT NULL
)";

if ($conn->query($sql) === TRUE) {
    echo "Table MyGuests created successfully";
} else {
    echo "Error creating table: " . $conn->error;
}

$conn->close();
?>