<script setup lang="ts">
import { ElButton, ElDialog, ElMessageBox } from 'element-plus';
import { Star } from '@element-plus/icons-vue'

import { ref } from 'vue'

const dialogVisible = ref(false)

const handleClose = (done: () => void) => {
  ElMessageBox.confirm('Are you sure to close this dialog?')
    .then(() => {
      done()
    })
    .catch(() => {
      // catch error
    })
}

const handleOpen = () => {
  dialogVisible.value = true
}
</script>

<template>
  <div class="app">
    <el-button color="white" type="warning" :icon="Star" size="large" circle class="v-button" @click="handleOpen" />
  </div>

  <el-dialog
    v-model="dialogVisible"
    title="Tips"
    width="500"
    :before-close="handleClose"
  >
    <span>This is a message</span>
    <template #footer>
      <div class="dialog-footer">
        <el-button @click="dialogVisible = false">Cancel</el-button>
        <el-button type="primary" @click="dialogVisible = false">
          Confirm
        </el-button>
      </div>
    </template>
  </el-dialog>
</template>

<style scoped>
.v-button {
  width: 44px !important;
  height: 44px !important;
  font-size: 32px !important;
  margin-top: 8px;
}
</style>
