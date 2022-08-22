<template>
    <div class="flex justify-between items-start pb-32">
        <div v-for="(benefit, index) in benefits" :key="`benefit-${index}`" class="flex gap-4 w-1/4 z-50">
            <div class="w-22 h-22">
                <img :src="benefit.img" class="z-50" />
            </div>
            <div class="flex flex-col">
                <span v-html="benefit.title" class="flex flex-col font-bold text-2xl leading-7 mb-3" />
                <span class="font-normal text-lg leading-6 max-w-xs">{{ benefit.description }}</span>
            </div>                
        </div>
    </div>
</template>

<script>
export default {
    data: () => ({
        benefits: [
            { title: "Быстрая <br /> доставка", description: "Выбирайте для доставки удобный пункт выдачи или доставку курьером", img: require("~/static/img/delivery.svg")},
            { title: "Бесплатная <br /> упаковка", description: "Экономьте за счет уменьшения веса и объема посылки до 80%", img: require("~/static/img/package.svg")},
            { title: "Бесплатная <br /> консолидация", description: "Объединяйте несколько посылок в одну для экономии на доставке", img: require("~/static/img/consolidation.svg")}
        ]
    })
}
</script>