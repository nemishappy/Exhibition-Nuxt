<template>
  <v-dialog v-model="getDialog.isShow" persistent max-width="400" >
    <v-card>
      <v-card-title>{{ getDialog.title }}</v-card-title>
      <v-card-text v-html="getDialog.message"></v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="green darken-1" text @click.prevent="$emit('stClick')">{{
          getDialog.stAction
        }}</v-btn>
        <v-btn
          v-if="getDialog.ndAction"
          color="red darken-1"
          text
          @click="$emit('ndClick')"
        >
          {{ getDialog.ndAction }}
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  computed: {
    getDialog() {
      return this.$store.getters.getDialog
    },
  },
}
</script>
