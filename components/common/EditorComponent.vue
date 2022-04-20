<template>
  <client-only>
    <tiptap-vuetify
      v-model="content"
      :extensions="extensions"
      :card-props="{ 'min-height': '500px' }"
      placeholder="Job description..."
    />

    <template #placeholder>
      <v-progress-linear indeterminate rounded />
    </template>
  </client-only>
</template>

<script>
// import the component and the necessary extensions
import {
  TiptapVuetify,
  Heading,
  Bold,
  Italic,
  Strike,
  Underline,
  Paragraph,
  BulletList,
  OrderedList,
  ListItem,
  Link,
  HardBreak,
  HorizontalRule,
  History,
} from 'tiptap-vuetify'

export default {
  components: {
    TiptapVuetify,
  },
  props: {
    modelValue: {
      type: String,
      default: '',
    },
  },
  data: () => ({
    // declare extensions you want to use
    extensions: [
      History,
      Link,
      Underline,
      Strike,
      Italic,
      ListItem,
      BulletList,
      OrderedList,
      [
        Heading,
        {
          options: {
            levels: [1, 2, 3],
          },
        },
      ],
      Bold,
      Link,
      HorizontalRule,
      Paragraph,
      HardBreak,
    ],
  }),
  computed: {
    content: {
      get() {
        return this.modelValue
      },
      set(val) {
        this.$emit('update:modelValue', val)
      },
    },
  },
}
</script>

<style scoped></style>
