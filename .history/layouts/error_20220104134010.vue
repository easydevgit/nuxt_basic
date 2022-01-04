<template>
    <div>
        <div id="error">
            <div class="error_status">{{error.statusCode}}</div>
            <div class="error_message">{{error.message}}</div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['error']
}
</script>

<style scoped>
#error {
    display: flex;
    justify-content: center;
    ali
}
</style>