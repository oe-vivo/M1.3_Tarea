class Proceso {
    constructor(numero) {
      this.numero = numero;
      this.codigo = [];
    }
  
    setLineaCodigo(linea) {
      this.codigo.push(linea);
    }
  }
  
  const lineasCodigo = [
    "a=1+2",
    "b=3+4",
    "c=5+6",
    "console.log(1+2)",
    "console.log(a)",
    "console.log(3+4)",
    "console.log(5+6)",
    "console.log(c)",
  ];
  
  const numProcesos = parseInt(prompt("Ingrese numero de procesos:"));
  const procesos = [];
  
  // Función para elegir una línea de código aleatoria
  function lineaCodigoRandom() {
    const indiceAleatorio = Math.floor(Math.random() * lineasCodigo.length);
    return lineasCodigo[indiceAleatorio];
  }
  
  // Función para inicializar la simulación
  function inicializarSimulacion() {
    for (let i = 1; i <= numProcesos; i++) {
      const proceso = new Proceso(i);
      for (let j = 0; j < 3; j++) {
        proceso.setLineaCodigo(lineaCodigoRandom());
      }
      procesos.push(proceso);
    }
  }
  
  // Función para ejecutar la simulación
  function ejecutarSimulacion() {
    let turno = 0;
    let procesosRestantes = numProcesos;
  
    while (procesosRestantes > 0) {
      const procesoActual = procesos[turno % procesos.length];
      const lineaEjecucion = procesoActual.codigo.shift();
  
      if (lineaEjecucion) {
        console.log(`Proceso ${procesoActual.numero} : ${lineaEjecucion}`);
      } else {
        console.log(`Proceso ${procesoActual.numero} completado.`);
        procesosRestantes--;
      }
  
      turno++;
    }
  
    console.log("Simulación completada.");
  }
  
  // Inicializar y ejecutar la simulación
  inicializarSimulacion();
  ejecutarSimulacion();
  