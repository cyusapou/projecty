<template>
  <div class="lang-toggle">
    <button 
      v-for="lang in ['en', 'rw']" 
      :key="lang"
      :class="['lang-btn', { active: currentLang === lang }]"
      @click="setLanguage(lang)"
    >
      {{ lang.toUpperCase() }}
    </button>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { store } from '../store/index.js'
import { translations } from '../translations/index.js'

const currentLang = computed(() => store.currentLang)

const t = computed(() => translations[currentLang.value])

const setLanguage = (lang) => {
  store.currentLang = lang
}
</script>

<style scoped>
.lang-toggle {
  display: flex;
  gap: 6px;
}

.lang-btn {
  padding: 6px 12px;
  border-radius: 6px;
  border: 1px solid #E8E8E8;
  background: #FFF;
  color: #424242;
  font-size: 12px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
}

.lang-btn:hover {
  background: #F5F5F5;
}

.lang-btn.active {
  background: #2E7D32;
  color: #FFF;
  border-color: #2E7D32;
}
</style>
