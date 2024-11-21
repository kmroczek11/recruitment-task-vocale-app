<template>
  <div class="h-screen flex items-center justify-center">
    <div class="w-full max-w-xs">
      <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div class="mb-6">
          <input
            class="shadow appearance-none rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="array" type="text" placeholder="2, 4, 0, 100, 4, 11, 2602, 36" v-model="state.value">
          <p class="text-red-500 text-xs italic" v-if="v$.value.$error">{{ v$.value.$errors[0].$message }}</p>
        </div>
        <div class="flex items-center justify-center">
          <button
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button" @click="search(state.value)">
            Wyszukaj
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import useValidate from '@vuelidate/core'
import { required } from '@vuelidate/validators'
import { computed, reactive } from 'vue';

export default {
  setup() {
    const state = reactive({
      value: '',
    })

    const rules = computed(() => {
      return {
        value: { required },
      }
    })

    const v$ = useValidate(rules, state)

    return { state, v$ }
  },

  methods: {
    search(value) {
      const isEven = (element) => {
        return element % 2 == 0
      }

      const isOdd = (element) => {
        return Math.abs(element % 2) == 1;
      }

      this.v$.$validate()

      if (!this.v$.$error) {
        const array = value.split(',')

        const evenNums = array.filter(isEven)
        const oddNums = array.filter(isOdd)

        if (evenNums.length == 1) {
          this.$router.push(`/result/${evenNums[0].trim()}`)
        }

        if (oddNums.length == 1) {
          this.$router.push(`/result/${oddNums[0].trim()}`)
        }
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
