<!DOCTYPE html>
<html lang="es">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Libros</title>
    </head>
    <body>
        <h1>Lista de libros</h1>
        <table border="2">
            <tr>
                <th>ID</th>
                <th>Título</th>
                <th>Autor</th>
            </tr>

            <?php
            $servername = "localhost";
            $database = "articulos";
            $username = "dbadmin";
            $password = "dbadmin";

            // Crear conexión
            $conn = mysqli_connect($servername, $username, $password, $database);

            // Verificar conexión
            if (!$conn) {
                die("Connection failed: " . mysqli_connect_error());
            }

            // Consulta SQL
            $sql = "SELECT id, titulo, autor FROM libros";
            $result = mysqli_query($conn, $sql);

            // Comprobar si hay resultados
            if (mysqli_num_rows($result) > 0) {
                // Mostrar cada fila de resultados
                while ($row = mysqli_fetch_assoc($result)) {
                    echo "<tr><td>" . $row["id"] . "</td><td>" . $row["titulo"] . "</td><td>" . $row["autor"] . "</td></tr>";
                }
                echo "</table>";
            } else {
                echo "<tr><td colspan='3'>0 resultados</td></tr>";
            }

            // Cerrar conexión
            mysqli_close($conn);
            ?>
        </table>
    </body>
</html>