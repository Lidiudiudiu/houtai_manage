<template>
<div class="loading">
    <dv-loading>Loading...</dv-loading>
</div>
</template>

<script>
export default {
    data() {
        return {

        }
    },
    created() {
        setTimeout(() => {
            this.$router.push("/")
        }, 3000);
    }
}
</script>

<style>
.loading{
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translateX(-50%);
  transform: translateY(-50%);
}

</style>