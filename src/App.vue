<template>
    <div class="contenedor-principal">
        <button class="boton-ingreso">Ingresar Tarea <i class="fa-solid fa-plus"></i></button>
        <ListaTareas />
    </div>
</template>

<script setup>
import IngresarTarea from './IngresarTarea.vue';
import ListaTareas from './ListaTareas.vue';


</script>

<style scoped>
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
