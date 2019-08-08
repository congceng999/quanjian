<template>
    <div :class="wrapClasses">
      <div>Text</div>
    </div>
</template>
<script>
    export default {
        name: 'Text',
        mixins: [ Emitter ],
        props: {
            value: {
                type: String,
            },
        },
        data () {
            return {
                currentValue: this.value
            };
        },
        computed: {
            formatterValue () {
                if (this.formatter) {
                    return this.formatter(this.precisionValue);
                } else {
                    return this.precisionValue;
                }
            }
        },
        methods: {
            preventDefault (e) {
                e.preventDefault();
            },
            changeVal (val) {
                val = Number(val);
            }
        },
        mounted () {
            this.changeVal(this.currentValue);
        },
        watch: {
            value (val) {
                this.currentValue = val;
            },
            currentValue (val) {
                this.changeVal(val);
            },
        }
    };
</script>
