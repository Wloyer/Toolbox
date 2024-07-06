<template>
  <div v-if="isInputMode">
    <form @submit.prevent="actionPostIt">
      <div class="postit__centeredDiv">
        <textarea
            type="text"
            v-model="Input"
            class="postit__centeredDiv__textArea"
            placeholder="Nouveau Post-It"
        />
      </div>
      <div class="postit__centeredDiv">
        <Button></Button>
      </div>
    </form>
  </div>
  <div v-else class="postit__centeredDiv">
    <textarea
        type="text"
        readonly
        class="postit__centeredDiv__textArea"
        :value="content"
    />
    <Button></Button>
  </div>
</template>

<script setup lang="ts">
import Button from '@/components/atoms/Button.vue'
import {defineProps, ref} from 'vue';

const props = defineProps({
  content: {
    type: String,
    default: ''
  },
  isInputMode: {
    type: Boolean,
    default: false
  },
  index: {
    type: Number,
    default: 0
  }
});

const Input = ref('');

// État local pour les PostIts et l'input
const inputValue = ref('');
const postIts = ref([]);

// Fonction pour ajouter un PostIt
const actionPostIt = () => {
  if (inputValue.value.trim() !== "") {
    postIts.value.push(inputValue.value.trim());
    inputValue.value = "";
  }
};

// Fonction pour supprimer un PostIt
const deleteSelf = (postIt) => {
  postIts.value = postIts.value.filter(p => p !== postIt);
};

</script>
<style scoped>

.post-it {
  background-color: #FFA500;
  padding: 20px;
  border-radius: 10px;
  margin: 20px;
}
</style>