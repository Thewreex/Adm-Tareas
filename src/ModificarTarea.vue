<template>
    <Transition name="fade" appear>
        <div v-if="mostrarModal" class="contenedor-modificar">
            <div class="panel">
                <div class="header-panel">
                    <h1>Modificar Tarea</h1>
                    <button class="boton-cerrar" @click="cerrar"><i class="fa-solid fa-x"></i></button>
                </div>
                <form @submit.prevent class="formulario-modificar">
                    <div class="inputs-modificar">
                        <input v-model="tareaSeleccionada.nombre" type="text">
                        <input v-model="tareaSeleccionada.descripcion" type="text">
                    </div>

                    <div class="radio-modificar">
                        <label>
                            <input v-model="tareaSeleccionada.prioridad" type="radio" name="prioridad" value="Baja">
                            Baja
                        </label>

                        <label>
                            <input v-model="tareaSeleccionada.prioridad" type="radio" name="prioridad" value="Media">
                            Media
                        </label>

                        <label>
                            <input v-model="tareaSeleccionada.prioridad" type="radio" name="prioridad" value="Alta">
                            Alta
                        </label>
                    </div>

                    <button @click="modificarTarea">Modificar</button>
                </form>
            </div>
        </div>
    </Transition>
</template>

<script setup>

import { ref, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';


const route = useRoute()
const router = useRouter()

const emit = defineEmits(['editarTareas'])

const mostrarModal = ref(true)


const tareaSeleccionada = ref({
    nombre: "",
    descripcion: "",
    prioridad: "",
    estado: false
})

const routeId = Number(route.params.id)


onMounted(() => {
    let tareasGuardadas = JSON.parse(localStorage.getItem("tareas") || "[]")

    const tareaEncontrada = tareasGuardadas.find(t => t.id === routeId)

    if (tareaEncontrada) {
        tareaSeleccionada.value = tareaEncontrada
    }
})

const modificarTarea = () => {
    let tareasGuardadas = JSON.parse(localStorage.getItem("tareas") || "[]")

    const posicionReal = tareasGuardadas.findIndex(t => t.id === routeId)

    if (posicionReal !== -1) {
        tareasGuardadas[posicionReal] = {
            id: routeId,
            nombre: tareaSeleccionada.value.nombre,
            descripcion: tareaSeleccionada.value.descripcion,
            prioridad: tareaSeleccionada.value.prioridad,
            estado: tareaSeleccionada.value.estado
        }
        localStorage.setItem("tareas", JSON.stringify(tareasGuardadas))
        emit('editarTareas')
    }

    cerrar()
}

const cerrar = () => {
    mostrarModal.value = false

    setTimeout(() => {
        router.push("/")
    }, 450)
}

</script>

<style scoped>
.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s ease;
}

.contenedor-modificar {
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    inset: 0;
}

.panel {
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 750px;
    height: 400px;
    border: 5px solid rgb(44, 162, 240);
    border-radius: 30px;
    padding: 20px;
    background: white;
}

.header-panel {
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    position: relative;
}

.boton-cerrar {
    background: none;
    border: none;
    font-size: 1.5rem;
    color: rgb(80, 80, 80);
    cursor: pointer;
    padding: 0;
    position: absolute;
    right: 0;
}



.inputs-modificar {
    display: flex;
    flex-direction: column;
    gap: 30px;
}

.formulario-modificar {
    margin-top: 30px;
    width: 80%;
    display: flex;
    flex-direction: column;
    height: 75%;
    justify-content: space-around;
}

.radio-modificar {
    display: flex;
    gap: 50px;
}
</style>