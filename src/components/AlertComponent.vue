<template>
    <div class="alert alert-warning alert-dismissible d-flex justify-content-start mt-3 m-3" role="alert" v-for="error in errors">
        <div>
            <i class="bi bi-exclamation-triangle-fill"></i>
        </div>
        <div class="ms-3">
            {{ error.message ||  'Error Generic'}}
        </div>

        <div>
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        errors: Array
    },
    data() {
        return {
            errors: this.errors
        }
    }
}
</script>

<style>

</style>