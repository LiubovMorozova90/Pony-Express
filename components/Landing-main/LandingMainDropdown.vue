<template>
    <div class="grid-text border-b-2 border-lightgreen relative">
        <button v-on:click="isShown = !isShown" class="flex">
            <span class="text-lightgrey relative">{{ value }}</span>
            <img v-bind:src="require('@/static/img/chevron-down.svg')" class="absolute ml-96 z-40" />
        </button>
        <div v-show="isShown" class="border bg-lightgreen absolute w-full top-full px-2 py-2">                            
            <p v-on:click="emit('update:value', item.title)" v-for="(item, index) in optionsList" :key="`item-${index}`" class="choice-country relative z-50"> {{ item.title }}</p>
        </div>
    </div>
</template>

<script>

export default {
    props: {
        optionsList: {
            type: Array,
            default: () => ([])
        },
        value: {
            type: String,
            default: ''
        }
    },
    data: () => ({
        isShown: false
    })
}
</script>

<style scoped>
.grid-text {
    @apply font-bold text-xl leading-7;
}

.choice-country:hover {
    background-color: #00833E;
    cursor: pointer;
}
</style>