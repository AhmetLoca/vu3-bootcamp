<template>
  <div class="form-areal card border p-2">
    <div class="mb-3">
      <label for="title" class="form-label">Title</label>
      <input
        v-model="userData.title"
        type="text"
        class="form-control"
        id="exampleFormControlInput1"
        placeholder="ahmetloca.."
      />
    </div>
    <div class="mb-3">
      <label for="url" class="form-label">URL</label>
      <input
        v-model="userData.url"
        type="text"
        class="form-control"
        id="url"
        placeholder="https://..."
      />
    </div>
    <div class="mb-3">
      <label for="description" class="form-label">Açiklama</label>
      <textarea
        v-model="userData.description"
        class="form-control"
        placeholder="This is..."
        id="description"
      ></textarea>
    </div>

    <div class="d-flex justify-content-end align-items-center">
      <button
        class="btn btn-sm btn-danger me-2"
        @click="$router.push({ name: 'HomePage' })"
      >
        Cancel
      </button>
      <button class="btn btn-sm btn-primary" @click="onSave">Save</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userData: {
        title: null,
        url: null,
        description: null,
        /* endpoint'im benden bu bilgilerin tamamını istiyor. */
      },
    };
  },
  methods: {
    resetData() {
      Object.keys(this.userData).forEach((key) => (this.userData[key] = null));
    },
    onSave() {
      console.log(this.userData);
      this.$appAxios.post("/bookmarks", this.userData).then((save_response) => {
        console.log("save_response", save_response);
        this.resetData();
        this.$router.push("/");
      });
    },
  },
};
</script>

<style></style>
