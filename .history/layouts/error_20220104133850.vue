<template>
    <div>
        <div id="error">
            <div class="error_status">{{error}}</div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['error']
}
</script>