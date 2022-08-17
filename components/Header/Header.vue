<template>
    <div class="header">
       <div class="px-20 font-circe">
        <div class="flex justify-between items-center pt-7 mb-32">
            <div>
                <img v-bind:src="require('@/static/img/header-navigation-logo.svg')" />
            </div>
            <div>
                <ul class="font-bold text-lg">
                    <li class="navbar"><a href="#">Адреса</a></li>
                    <li class="navbar"><a href="#">Магазины</a></li>
                    <li class="navbar"><a href="#">Как это работает</a></li>
                    <li class="navbar"><a href="#">Тарифы</a></li>
                    <li class="navbar"><a href="#">Услуги</a></li>
                    <li class="inline-block"><a href="#">Доставка</a></li>
                </ul>
            </div>
            <div class="text-greenbasic">
                <button class="btn-personal-area">
                    <p class="btn-personal-area-text">Личный кабинет</p>
                </button>
            </div>
        </div>
        <div class="flex flex-col justify-start pb-20">
            <p class="uppercase font-extrabold leading-23 text-7xl tracking-wide max-w-2xl mb-12">зарубежный sale</p>
            <p class="font-bold text-2xl max-w-xs mb-44">Выгодные онлайн покупки за рубежом с быстрой доставкой</p>
            <button class="btn-title">
                <p class="btn-title-text">Получить адрес за рубежом</p>
            </button>
        </div>
        <div class="flex gap-32 pb-32">
            <div v-for="(benefit, index) in benefits" :key="`benefit-${index}`" class="advantage">
                <div class="w-22 h-22">
                    <img :src="benefit.img" />
                </div>
                <div class="flex flex-col">
                    <span class="font-bold text-2xl leading-7 mb-3">{{ benefit.title }}</span>
                    <span class="font-normal text-lg leading-6 max-w-xs">{{ benefit.description }}</span>
                </div>                
            </div>
        </div>
    </div> 
    </div>
    
    
</template>

<script>
export default {
    data: () => ({
        benefits: [
            {title: 'Быстрая доставка', 
            description: 'Выбирайте для доставки удобный пункт выдачи или доставку курьером', 
            img: require('~/static/img/delivery.svg')
            },
            {title: 'Бесплатная упаковка', 
            description: 'Экономьте за счет уменьшения веса и объема посылки до 80%', 
            img: require('~/static/img/package.svg')
            },
            {title: 'Бесплатная консолидация', 
            description: 'Объединяйте несколько посылок в одну для экономии на доставке', 
            img: require('~/static/img/consolidation.svg')
            }
        ]
    })
}
</script>

<style scoped>
.header {
    background-image: url('static/img/header-fon.png');
    background-size: cover;
}

.navbar {
    @apply inline-block mr-12;
}

.btn-personal-area {
    @apply text-center border border-greenbasic rounded-full font-bold px-4 py-2;
}

.btn-personal-area-text {
    @apply text-base text-center; 
}

.btn-title {
    @apply bg-greenbasic max-w-xs border-0 rounded-full font-bold text-center px-4 py-2;
}

.btn-title-text {
    @apply text-center text-xl leading-8 text-white;
}

.advantage {
    @apply flex gap-4;
}
</style>