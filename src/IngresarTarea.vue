<template>
    <div class="contenedor-ingreso">
        <h1>Ingresar una tarea</h1>
        <form class="formulario-ingreso">
            <div class="inputs-ingreso">
                <input type="text" placeholder="Nombre de la tarea">
                <input type="text" placeholder="Descripcion">
            </div>

            <div class="radio-ingreso">
                <label>
                    <input type="radio" name="prioridad" value="baja">
                    Baja
                </label>

                <label>
                    <input type="radio" name="prioridad" value="media">
                    Media
                </label>

                <label>
                    <input type="radio" name="prioridad" value="alta">
                    Alta
                </label>
            </div>

            <button>Ingresar</button>
        </form>
    </div>
</template>

<script setup></script>

<style scoped>
.contenedor-ingreso {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: auto;
    padding: 20px;
    width: 750px;
    height: 400px;
    border: 5px solid rgb(44, 162, 240);
    border-radius: 30px;
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