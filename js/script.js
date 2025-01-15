var alumnos = new Array();

//El primer indice de estudiante define el estudiante "estudiantes[x]"
//El segundo indice de estudante define la asiggnatura "estudiante[x][y]"
/*El orden es:
    0. BBDD
    1. SISIN
    2. DWES
    3. DWEC
    4. DIW*/

for (let webo = 0; webo < 5; webo++) {
    let asignatura = new Array();
    asignatura[0] = (Math.random() * 10).toFixed(1);
    asignatura[1] = (Math.random() * 10).toFixed(1);
    asignatura[2] = (Math.random() * 10).toFixed(1);
    asignatura[3] = (Math.random() * 10).toFixed(1);
    asignatura[4] = (Math.random() * 10).toFixed(1);

    alumnos[webo] = asignatura;
}

console.table(alumnos);
creaTabla();

//Notas y promedios de los alumnos

function creaTabla() {
    for (const numAlum in alumnos) {
        var idFila = `fila${numAlum}`;
        imprimeCelda(idFila, (parseFloat(numAlum)+1))
        var acumulableNota = 0;
        for (const nota of alumnos[numAlum]) {
            acumulableNota += parseFloat(nota);
            imprimeCelda(idFila, nota)
        }
        imprimeCelda(idFila, `${(acumulableNota/5).toFixed(2)}`)

    }
    //Calcula medias asignatura
    imprimeCelda("promedio", "Promedio asignatura")
    for (const alumno of alumnos) {

        var notaMedia = (alumno.reduce(
            function (acumulador, notaActual) {
                return acumulador = parseFloat(acumulador) + parseFloat(notaActual);
            })/5)
            .toFixed(2);

        imprimeCelda("promedio", notaMedia);
    }
    imprimeCelda("promedio", "-");
}

function consultaNota() {
    var numAlumno = document.getElementById("numeroEstudianteConsluta").value;
    var numAsignatura = document.getElementById("asignaturasConsulta").value;

    var nota = alumnos[numAlumno - 1][numAsignatura];
    document.getElementById("consulta").innerText = `La nota del alumno ${numAlumno} en ${nombreAsignatura(numAsignatura)} es: ${nota}`;
}

function modificaNota() {
    var numAlumno = document.getElementById("numeroEstudianteModifica").value;
    var numAsignatura = document.getElementById("asignaturasModifica").value;
    var nuevaNota = document.getElementById("nuevaNota").value;

    alumnos[numAlumno - 1].splice(numAsignatura, 1, nuevaNota);

    console.log(alumnos[numAlumno - 1][numAsignatura]);
    
    console.table(alumnos);

    eliminaCeldas();
    creaTabla();
}

function ordenaPromedio() {
    alumnos.sort(function (a,b) {
        return b.reduce(
            function (acumulador, notaActual) {
                return acumulador = parseFloat(acumulador) + parseFloat(notaActual);
            })
            -
            a.reduce(
            function (acumulador, notaActual) {
                return acumulador = parseFloat(acumulador) + parseFloat(notaActual);
            });
    });

    eliminaCeldas();
    creaTabla();
}

function imprimeCelda(fila, contenido) {
    var fila = document.getElementById(fila);
    var celda = document.createElement("p");
    celda.innerText = `${contenido}`;
    fila.appendChild(celda);
}

function eliminaCeldas() {
    document.getElementById("fila0").innerHTML = "";
    document.getElementById("fila1").innerHTML = "";
    document.getElementById("fila2").innerHTML = "";
    document.getElementById("fila3").innerHTML = "";
    document.getElementById("fila4").innerHTML = "";
    document.getElementById("promedio").innerHTML = "";
}

function nombreAsignatura(numero) {
    var nombre;
    switch (numero) {
        case "0":
            nombre = "BBDD";
            break;
        case "1":
            nombre = "SISIN";            
            break;
        case "2":
            nombre = "DWES";         
            break;
        case "3":
            nombre = "DWEC";
            break;
        case "4":
            nombre = "DIW";
            break;

    }
    return nombre;
}