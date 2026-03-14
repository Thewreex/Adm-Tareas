<template>
    <div class="contenedor-principal">
        <div class="contenedor-botones">
            <button v-if="!mostrarCompletadas" @click="tareasCompletas" class="boton-ingreso">Ver tareas
                completas</button>
            <button v-else @click="verTodas" class="boton-ingreso">Ver todas las tareas</button>
            <button @click="abrirIngreso" class="boton-ingreso">Ingresar Tarea <i class="fa-solid fa-plus"></i></button>
        </div>
        <div class="contenedor">
            <div v-for="tarea in tareasVisibles" :key="tarea.id">
                <Tareas :nombre="tarea.nombre" :descripcion="tarea.descripcion" :prioridad="tarea.prioridad"
                    :estado="tarea.estado" :id="tarea.id" @marcarCompletada="completarTarea"
                    @eliminarTarea="eliminarTarea" />
            </div>
        </div>
    </div>

    <router-view @tareaGuardada="cargarTareas" @editarTareas="cargarTareas" />
</template>

<script setup>
import Tareas from './Tareas.vue';
import { onMounted, ref, computed } from 'vue';
import { useRouter, useRoute } from 'vue-router';

const router = useRouter()
const route = useRoute()

const mostrarCompletadas = computed(() => route.path.includes('/completadas'))

const listaTareas = ref([])

const tareasVisibles = computed(() => {
    if (!mostrarCompletadas.value) {
        return listaTareas.value
    }
    return listaTareas.value.filter(tarea => tarea.estado === true)
})

const cargarTareas = () => {
    const tareasLS = JSON.parse(localStorage.getItem("tareas") || "[]")

    if (Array.isArray(tareasLS)) {
        listaTareas.value = tareasLS
    } else {
        listaTareas.value
    }
}

const tareasCompletas = () => {
    router.push('/completadas')
}

const verTodas = () => {
    router.push('/')
}

onMounted(() => {
    cargarTareas()
})

function completarTarea() {
    cargarTareas()
}

function eliminarTarea(indexRecibido) {
    cargarTareas()
}


const abrirIngreso = () => {
    router.push("/ingresar")
}

</script>

<style scoped>
.contenedor {
    overflow-y: auto;
    margin: 25px auto;
    border-radius: 10px;
    height: 650px;
    width: 575px;
    border: 5px solid rgb(44, 162, 240);
}

.contenedor-botones {
    display: flex;
    justify-content: space-between;
}

.contenedor> :first-child {
    border-radius: 5px 5px 0 0;
}

.contenedor-principal {
    display: flex;
    flex-direction: column;
    width: 575px;
    margin: 0 auto;
}

.boton-ingreso {
    align-self: flex-end;
    margin-top: 75px;
    padding: 8px 30px;
    display: flex;
    align-items: center;
    color: white;
    background-color: rgb(44, 162, 240);
    font-weight: 600;
    border: none;
    gap: 20px;
    border-radius: 10px;
}
</style>