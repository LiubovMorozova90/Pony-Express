<template>
    <main>        
        <div class="info-delivery pb-32">
            <div class="flex flex-row justife-between px-20 pt-12">
                <div class="flex flex-col justify-start z-50 pb-20">
                    <p class="font-extrabold text-7xl tracking-wide text-white max-w-lg mb-12">Предоставляем адреса в США, странах Европы и Японии</p>
                    <p class="font-bold text-2xl leading-8 max-w-md">Покупайте в онлайн-магазинах США, Европы и Японии и отправляйте на свой адрес в любой город России</p>
                </div>
                <div class="z-40 -ml-7 mr-8" >
                    <img v-bind:src="require('@/static/img/info-delivery-1.png')" class="relative z-20"/>
                    <img v-bind:src="require('@/static/img/info-delivery-2.png')" class="absolute -mt-16 -ml-9 z-30" />
                </div>
                <div class="flex flex-row pt-64">
                    <img v-bind:src="require('@/static/img/info-country.svg')" />
                    <div class="-mt-20 -ml-36">
                        <p class="font-extrabold text-4xl leading-10 tracking-wide text-white absolute pt-16 pl-7 z-50">США</p>
                        <img v-bind:src="require('@/static/img/info-country-USA.svg')" class="relative z-40" /> 
                    </div>
                </div>
            </div> 
        </div> 
        <div class="info-shop pb-32">
            <div class="flex flex-col px-20 pt-12">
                <div class="flex justify-between gap-10 items-center text-white pb-20">
                    <p class="font-extrabold text-7xl tracking-wide w-min">Популярные магазины</p>
                    <p class="font-bold text-2xl leading-8 max-w-md">Устройте шоппинг без границ в онлайн-магазинах СШA, Европы и Японии. Воспользуйтесь скидками, распродажами и выгодными предложениями от любимых брендов</p>
                    <button class="text-center border rounded-full w-60 px-4 py-2 mt-28">
                        <span class="font-bold text-base text-center">Получить адрес за рубежом</span>
                    </button>
                </div>
                <div class="flex flex-col items-center">
                    <div class="flex items-center mb-10">
                       <div v-for="(shop, index) in shops" :key="`shop-${index}`">                        
                            <img :src="shop.img" />                        
                        </div> 
                        <button></button>
                    </div>                    
                    <button class="text-center rounded-full bg-lightgreen px-4 py-2">
                        <span class="font-bold text-base text-center text-white">Все магазины</span>
                    </button>
                </div>
            </div>
        </div> 
        <div>
            
        </div>  
    </main>
</template>

<script>
export default {
    data: () => ({
        shops: [
            {img: require('~/static/img/slider-shop-amazon.svg')},
            {img: require('~/static/img/slider-shop-ebay.svg')},
            {img: require('~/static/img/slider-shop-levi.svg')},
            {img: require('~/static/img/slider-shop-6pm.svg')},
        ]
    })
}
</script>


<style scoped>
.info-delivery {
    background: linear-gradient(270.19deg, #45A145 -0.01%, #71BC46 98.04%);
}

.info-shop {
    background: linear-gradient(270.19deg, #1A771A -0.01%, #56A329 98.04%);
}

</style>