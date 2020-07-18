<template>
    <div id="app">
        <parent-component />
    </div>
</template>

<script>
    import ParentComponent from './components/parentComponent';
    export default {
        components: {ParentComponent},
    }
</script>
