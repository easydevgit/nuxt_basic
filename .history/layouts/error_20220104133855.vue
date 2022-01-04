<template>
    <div>
        <div id="error">
            <div class="error_status">{{error.status}}</div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['error']
}
</script>