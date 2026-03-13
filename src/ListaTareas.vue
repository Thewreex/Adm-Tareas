<template>
    <div class="contenedor">
        <Tareas />
        <Tareas />
        <Tareas />
    </div>
</template>

<script setup>
import Tareas from './Tareas.vue';
import { ref } from 'vue';

</script>

<style scoped>
.contenedor {
    /* padding: 20px; */
    overflow-y: auto;
    margin: 25px auto;
    border-radius: 10px;
    height: 650px;
    width: 575px;
    border: 5px solid rgb(44, 162, 240);
}

.contenedor> :first-child {
    border-radius: 5px 5px 0 0;
}
</style>