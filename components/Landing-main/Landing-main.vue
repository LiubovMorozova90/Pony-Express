<template>
    <main>
        <div class="px-20">
           <div class="info-delivery">
                <div class="flex flex-col justify-start absolute pb-20 ">
                    <p class="font-extrabold text-7xl tracking-wide  max-w-lg mb-12">Предоставляем адреса в США, странах Европы и Японии</p>
                    <p class="font-bold text-2xl leading-8 max-w-md">Покупайте в онлайн-магазинах США, Европы и Японии и отправляйте на свой адрес в любой город России</p>
                </div>
                <div>
                    <img v-bind:src="require('@/static/img/info-delivery-1.png')" />
                    <img v-bind:src="require('@/static/img/infj-delivery-2.png')" />
                </div>
                <div></div>
            </div> 
        </div>        
    </main>
</template>

<style scoped>
.info-delivery {
    background: linear-gradient(270.19deg, #45A145 -0.01%, #71BC46 98.04%);
}
</style>