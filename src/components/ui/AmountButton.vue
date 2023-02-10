<template>
    <button class="button">
        <slot/>
    </button>
</template>
<script>
export default {
    
}
</script>
<style lang="css">
    .button {
        background-color: #F6F8FA;
        border-radius: 4px;
        border: none;
        width: 34px;
        cursor: pointer;
        height: 34px;
    }
</style>
