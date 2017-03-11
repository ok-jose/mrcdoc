<template>
  <div>
      <!-- quill-editor -->
      <quill-editor ref="myTextEditor"
                    v-model="content"
                    :config="editorOption"
                    @blur="onEditorBlur($event)"
                    @focus="onEditorFocus($event)"
                    @ready="onEditorReady($event)">
      </quill-editor>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        name: 'base-example',
        content: '<h2>I am Example</h2>',
        editorOption: {}
      }
    },
    methods: {
      onEditorBlur (editor) {
        console.log('editor blur!', editor)
      },
      onEditorFocus (editor) {
        console.log('editor focus!', editor)
      },
      onEditorReady (editor) {
        console.log('editor ready!', editor)
      }
    },
    computed: {
      editor () {
        return this.$refs.myTextEditor.quillEditor
      }
    },
    mounted () {
      console.log('this is my editor', this.editor)
      setTimeout(() => {
        this.content = '<h1>i am changed!</h1>'
      }, 1800)
    }
  }
</script>

<style>
  .ql-container .ql-editor {
    min-height: 40em;
    padding-bottom: 1em;
    max-height: 25em;
  }

  .html {
    height: 9em;
    overflow-y: auto;
    border: 1px solid #ccc;
    border-top: none;
    resize: vertical;
  }
</style>
