const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const tareas = [];

function agregarTarea() {
  return new Promise((resolve) => {
    rl.question('Descripción de la tarea: ', (descripcion) => {
      tareas.push({ indicador: tareas.length + 1, descripcion, completada: false });
      resolve();
    });
  });
}

function eliminarTarea() {
  return new Promise((resolve, reject) => {
    rl.question('Número de tarea a eliminar: ', (numeroTarea) => {
      const indiceTarea = parseInt(numeroTarea) - 1;
      if (indiceTarea >= 0 && indiceTarea < tareas.length) {
        tareas.splice(indiceTarea, 1);
        resolve();
      } else {
        reject('Tarea no encontrada.');
      }
    });
  });
}

function completarTarea() {
  return new Promise((resolve, reject) => {
    rl.question('Número de tarea completada: ', (numeroTarea) => {
      const indiceTarea = parseInt(numeroTarea) - 1;
      if (indiceTarea >= 0 && indiceTarea < tareas.length) {
        tareas[indiceTarea].completada = true;
        resolve();
      } else {
        reject('Tarea no encontrada.');
      }
    });
  });
}

async function TaskListNode() {
  console.log('\nLista de tareas:');
  tareas.forEach((tarea) => {
    const estado = tarea.completada ? 'Completada' : 'Pendiente';
    console.log(`${tarea.indicador}. ${tarea.descripcion} (${estado})`);
  });
  console.log('');

  try {
    const opcion = await prompt('Elige una opción:\n1. Agregar tarea\n2. Eliminar tarea\n3. Completar tarea\n4. Salir\n');
    switch (opcion) {
      case '1':
        await agregarTarea();
        break;
      case '2':
        await eliminarTarea();
        break;
      case '3':
        await completarTarea();
        break;
      case '4':
        rl.close();
        break;
      default:
        console.log('Opción no válida.');
    }
  } catch (error) {
    console.error(error);
  } finally {
    TaskListNode();
  }
}

function prompt(question) {
  return new Promise((resolve) => {
    rl.question(question, resolve);
  });
}

TaskListNode();
