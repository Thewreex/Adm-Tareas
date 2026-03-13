<template>
    <div class="contenedor-tarea">
        <h5>Nombre Tarea</h5>
        <div>
            <button id="pencil" class="botones-tareas">
                <i class="fa-solid fa-pencil"></i>
            </button>
            <button id="check" class="botones-tareas">
                <i class="fa-solid fa-check"></i>
            </button>
            <button id="x" class="botones-tareas">
                <i class="fa-solid fa-x"></i>
            </button>
        </div>

    </div>
</template>

<script setup></script>

<style scoped>
.contenedor-tarea {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 2px solid gray;
    width: 100%;
    padding: 20px;
    box-sizing: border-box;
    background-color: rgb(245, 245, 245);
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