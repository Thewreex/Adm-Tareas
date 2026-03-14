<template>
    <div class="contenedor-tarea" :class="{ completada: estado }">
        <div class="textos-tarea">
            <div class="titulo-tarea">
                <h5>{{ nombre }}</h5>
                <button class="boton-descripcion" @click="mostrarDes"><i class="fa-solid fa-angle-down"></i></button>
            </div>
            <p>Prioridad: {{ prioridad }}</p>
            <p>Estado: {{ estado ? "Completada" : "Pendiente" }}</p>
            <p v-if="verDescripcion">Descripcion: {{ descripcion }}</p>
        </div>
        <div>
            <button @click="editar" id="pencil" class="botones-tareas">
                <i class="fa-solid fa-pencil"></i>
            </button>
            <button @click="marcar" id="check" class="botones-tareas">
                <i class="fa-solid fa-check"></i>
            </button>
            <button @click="eliminar" id="x" class="botones-tareas">
                <i class="fa-solid fa-x"></i>
            </button>
        </div>

    </div>
</template>

<script setup>

import { ref } from 'vue';
import { useRouter } from 'vue-router'

const verDescripcion = ref(false)

const mostrarDes = () => {
    verDescripcion.value = !verDescripcion.value
}

const router = useRouter()

const { prioridad, nombre, descripcion, estado, id } = defineProps({
    prioridad: String,
    nombre: String,
    descripcion: String,
    estado: Boolean,
    id: Number
})

const emit = defineEmits(['marcarCompletada'])

const editar = () => {
    router.push(`modificar/${id}`)
}


const marcar = () => {
    let tareasGuardadas = JSON.parse(localStorage.getItem("tareas") || "[]")

    const posicionReal = tareasGuardadas.findIndex(t => t.id === id)

    if (posicionReal !== -1) {
        tareasGuardadas[posicionReal].estado = !tareasGuardadas[posicionReal].estado
        localStorage.setItem("tareas", JSON.stringify(tareasGuardadas))
        emit('marcarCompletada')
    }
}

const eliminar = () => {
    let tareasGuardadas = JSON.parse(localStorage.getItem("tareas") || "[]")

    const posicionReal = tareasGuardadas.findIndex(t => t.id === id)

    if (posicionReal !== -1) {
        tareasGuardadas.splice(posicionReal, 1)
        localStorage.setItem("tareas", JSON.stringify(tareasGuardadas))
        emit('eliminarTarea')
    }
}

</script>

<style scoped>
.contenedor-tarea {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 1px solid rgb(206, 206, 206);
    padding: 20px;
    background-color: rgb(245, 245, 245);
}

.boton-descripcion {
    border: none;
    background: none;
    font-size: 1.5rem;
    cursor: pointer;
    padding: 0;
}

.completada {
    background-color: rgb(186, 255, 197);
}

.textos-tarea h5,
.textos-tarea p {
    margin: 0;
}

.textos-tarea h5 {
    margin-bottom: 5px;
}

.titulo-tarea {
    display: flex;
    align-items: center;
    gap: 10px;
}


.botones-tareas {
    margin: 0px 10px;
    border: none;
    border-radius: 10px;
    padding: 12px 18px;
    color: white;
}

#pencil {
    background-color: rgb(44, 162, 240);
}

#check {
    background-color: rgb(15, 206, 15);
}

#x {
    background-color: rgb(233, 85, 85);
}
</style>