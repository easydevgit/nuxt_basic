<template>
    <div>
        <div id="error">
            <div class="error_status">{{error.st}}</div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['error']
}
</script>