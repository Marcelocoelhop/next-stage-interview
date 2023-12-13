<?php
// Conexão com o banco de dados
$servername = "localhost";
$username = "seu_usuario";
$password = "sua_senha";
$dbname = "seu_banco_de_dados";

$conn = new mysqli($servername, $username, $password, $dbname);

// Verifica a conexão
if ($conn->connect_error) {
  die("Conexão falhou: " . $conn->connect_error);
}

// Obtém todos os usuários da tabela 'usuarios'
$sql = "SELECT * FROM usuarios";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
  // Exibe os dados de cada usuário
  while ($row = $result->fetch_assoc()) {
    echo "ID: " . $row["id"]. " - Nome: " . $row["nome"]. " - Email: " . $row["email"]. "<br>";
  }
} else {
  echo "Nenhum usuário encontrado";
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
  // Exemplo de inserção de novo usuário
  $nome = $_POST['nome'];
  $email = $_POST['email'];

  // TODO
}

// Fecha a conexão com o banco de dados
$conn->close();
?>