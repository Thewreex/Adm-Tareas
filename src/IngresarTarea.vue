<template>

    <Transition name="fade" appear>
        <div v-if="mostrarModal" class="contenedor-ingreso">
            <div class="panel">
                <div class="header-panel">
                    <h1>Ingresar una tarea</h1>
                    <button class="boton-cerrar" @click="cerrar"><i class="fa-solid fa-x"></i></button>
                </div>
                <form @submit.prevent="enviarFormulario" class="formulario-ingreso">
                    <div class="inputs-ingreso">
                        <input v-model="tarea" type="text" placeholder="Nombre de la tarea">
                        <input v-model="descripcion" type="text" placeholder="Descripcion">
                    </div>

                    <div class="radio-ingreso">
                        <label>
                            <input v-model="prioridad" type="radio" name="prioridad" value="Baja">
                            Baja
                        </label>

                        <label>
                            <input v-model="prioridad" type="radio" name="prioridad" value="Media">
                            Media
                        </label>

                        <label>
                            <input v-model="prioridad" type="radio" name="prioridad" value="Alta">
                            Alta
                        </label>
                    </div>

                    <button type="submit">Ingresar</button>
                </form>
            </div>
        </div>
    </Transition>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const emit = defineEmits(['tareaGuardada'])

const router = useRouter()

const mostrarModal = ref(true)

const cerrar = () => {
    mostrarModal.value = false

    setTimeout(() => {
        router.push("/")
    }, 450)
}

const tarea = ref("")
const descripcion = ref("")
const prioridad = ref("")

const enviarFormulario = () => {
    if (!tarea.value || !descripcion.value || !prioridad.value) {
        alert("Todos los campos son obligatorios")
        return
    } else {
        enviar()
    }

}

function enviar() {

    let tareasGuardadas = JSON.parse(localStorage.getItem("tareas") || "[]")
    tareasGuardadas.push({
        id: Date.now(),
        nombre: tarea.value,
        descripcion: descripcion.value,
        prioridad: prioridad.value,
        estado: false
    })

    localStorage.setItem("tareas", JSON.stringify(tareasGuardadas))


    emit('tareaGuardada')

    cerrar()
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



.contenedor-ingreso {
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



.inputs-ingreso {
    display: flex;
    flex-direction: column;
    gap: 30px;
}

.formulario-ingreso {
    margin-top: 30px;
    width: 80%;
    display: flex;
    flex-direction: column;
    height: 75%;
    justify-content: space-around;
}

.radio-ingreso {
    display: flex;
    gap: 50px;
}
</style>