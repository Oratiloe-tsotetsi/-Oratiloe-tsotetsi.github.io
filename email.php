<!-- signup.php -->
<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $username = $_POST["username"];
  $password = $_POST["password"];

  // For simplicity, we'll store the data in a text file (not secure)
  $data = "Username: $username\nPassword: $password\n";
  file_put_contents("users.txt", $data, FILE_APPEND);

  // Redirect to a success page or back to the login page
  header("Location: login.html");
}
?>

<!-- login.php -->
<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $username = $_POST["username"];
  $password = $_POST["password"];

  // In a real-world scenario, you should check the username and password against a secure database
  // For this example, we'll check against the text file
  $users = file_get_contents("users.txt");
  if (strpos($users, "Username: $username\nPassword: $password") !== false) {
    // User credentials are correct, redirect to a welcome page or dashboard
    header("Location: welcome.html");
  } else {
    // Invalid credentials, redirect back to login page with an error message
    header("Location: login.html?error=1");
  }
}
?>
