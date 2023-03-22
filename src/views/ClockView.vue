<template>
    <div>
        {{ nowText }}
    </div>
</template>

<script setup lang="ts">
import { onUnmounted, ref, computed } from 'vue'
import { dateFormat } from '../utils'
const getNow = () => new Date()
const time = ref(getNow())
const nowText = computed(() => dateFormat(time.value))
const intervalHandle = setInterval(() => {
    time.value = getNow()
}, 500)
onUnmounted(() => {
    clearInterval(intervalHandle)
})
console.log('yo')
</script>

<style scoped>

</style>