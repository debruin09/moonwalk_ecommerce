<script setup lang="ts">
import { NotificationMessage } from '../../views/ProductDetails.vue';

interface Props {
    notificationMsg: NotificationMessage
}

const props = defineProps<Props>()


</script>

<template>
    <div v-if="notificationMsg.msg">
        <div v-if="notificationMsg.type === 'error'"
            class="fixed w-full z-10  p-4 rounded-md bg-red-500 shadow-lg">
            <p class="text-white">{{ notificationMsg.msg }}</p>
        </div>
        <div v-else class="fixed w-full z-10 p-4 rounded-md bg-green-500 shadow-lg">
            <p class="text-white">{{ notificationMsg.msg }}</p>
        </div>
    </div>
</template> 