<template>
  <button
      :title="Title ? Title : null"
      :class="buttonClass"
      @click="emitClick">
    <slot></slot>
  </button>
</template>

<script setup>
import {defineProps, computed, defineEmits} from 'vue';

const props = defineProps({
  type: {
    type: String,
    default: 'primary',
    validator: value => ['primary', 'secondary', 'success', 'danger', 'warning'].includes(value)
  },
  shape: {
    type: String,
    default: 'rounded',
    validator: value => ['rounded', 'square', 'circle'].includes(value)
  },
  Title: {
    type: String,
    default: ''
  }
});

const emit = defineEmits(['click']);

const Title = 'Button';
const buttonClass = computed(() => {
  return [`btn-${props.type}`, `btn-${props.shape}`];
});

const emitClick = event => {
  emit('click', event);
};
</script>

<style scoped>
.btn-primary {
  background-color: blue;
  color: white;
}

.btn-secondary {
  background-color: gray;
  color: white;
}

.btn-success {
  background-color: green;
  color: white;
}

.btn-danger {
  background-color: #f55701;
  color: white;
}

.btn-warning {
  background-color: orange;
  color: white;
}

.btn-rounded {
  border-radius: 12px;
}

.btn-square {
  border-radius: 0;
}

.btn-circle {
  border-radius: 50%;
}
</style>
