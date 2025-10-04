import {defineStore} from 'pinia';
import {ref} from 'vue';

export const useSpinnerStore = defineStore('spinner', () => {
  const loading = ref(false);

  const show = () => {
    loading.value = true;
  };
  const hide = () => {
    loading.value = false;
  };

  return {loading, show, hide};
});
