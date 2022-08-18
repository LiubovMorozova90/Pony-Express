<template>
    <main>        
        <div class="info-delivery flex flex-col pb-32">
            <div class="px-20">
                <div class="flex flex-col justify-start absolute pb-20 z-50">
                    <p class="font-extrabold text-7xl tracking-wide text-white max-w-lg mb-12">Предоставляем адреса в США, странах Европы и Японии</p>
                    <p class="font-bold text-2xl leading-8 max-w-md">Покупайте в онлайн-магазинах США, Европы и Японии и отправляйте на свой адрес в любой город России</p>
                </div>
                <div class="left-1/3 relative ml-7 z-40" >
                    <img v-bind:src="require('@/static/img/info-delivery-1.png')" class="relative z-20"/>
                    <img v-bind:src="require('@/static/img/info-delivery-2.png')" class="absolute -mt-16 -ml-9 z-30" />
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