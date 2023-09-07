const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const tareas = [];

function agregarTarea() {
  rl.question('Descripción de la tarea: ', (descripcion) => {
    tareas.push({ indicador: tareas.length + 1, descripcion, completada: false });
    TaskListNode();
  });
}

function eliminarTarea() {
  rl.question('Número de tarea a eliminar: ', (numeroTarea) => {
    const indiceTarea = parseInt(numeroTarea) - 1;
    if (indiceTarea >= 0 && indiceTarea < tareas.length) {
      tareas.splice(indiceTarea, 1);
      TaskListNode();
    } else {
      console.log('Tarea no encontrada.');
      TaskListNode();
    }
  });
}

function completarTarea() {
  rl.question('Número de tarea completada: ', (numeroTarea) => {
    const indiceTarea = parseInt(numeroTarea) - 1;
    if (indiceTarea >= 0 && indiceTarea < tareas.length) {
      tareas[indiceTarea].completada = true;
      TaskListNode();
    } else {
      console.log('Tarea no encontrada.');
      TaskListNode();
    }
  });
}

function TaskListNode() {
  console.log('\nLista de tareas:');
  tareas.forEach((tarea) => {
    const estado = tarea.completada ? 'Completada' : 'Pendiente';
    console.log(`${tarea.indicador}. ${tarea.descripcion} (${estado})`);
  });
  console.log('');
  rl.question('Elige una opción:\n1. Agregar tarea\n2. Eliminar tarea\n3. Completar tarea\n4. Salir\n', (opcion) => {
    switch (opcion) {
      case '1':
        agregarTarea();
        break;
      case '2':
        eliminarTarea();
        break;
      case '3':
        completarTarea();
        break;
      case '4':
        rl.close();
        break;
      default:
        console.log('Opción no válida.');
        TaskListNode();
        break;
    }
  });
}

TaskListNode();
