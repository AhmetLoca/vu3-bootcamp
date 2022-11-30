<template>
  <div class="card border p-2">
    <div class="d-flex justify-content-end">
      <button
        class="btn btn-primary btn-sm"
        @click="$router.push({ name: 'NewBookmark' })"
      >
        + New Add
      </button>
    </div>

    <table class="table table-striped table-hover">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Title</th>
          <th scope="col">URL</th>
          <th scope="col">Description</th>
          <th scope="col">Delete</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(bookmark, index) in bookmarkList" :key="bookmark.id">
          <th scope="row">{{ index + 1 }}</th>
          <td>{{ bookmark.title }}</td>
          <td>
            <a :href="bookmark.url" target="_blank">{{ bookmark.url }}</a>
          </td>
          <td>
            {{ bookmark.description }}
          </td>
          <td>
            <button
              @click="deleteBookmark(bookmark)"
              class="btn btn-sm btn-danger"
            >
              Delete
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      bookmarkList: [],
    };
  },
  created() {
    this.$appAxios.get("/bookmarks").then((bookmarks_list_response) => {
      this.bookmarkList = bookmarks_list_response.data || [];
    });
  },
  methods: {
    deleteBookmark(bookmark) {
      //console.log("bookmark :>>", bookmark);
      this.$appAxios
        .delete(`/bookmarks/${bookmark.id}`)
        .then((delete_response) => {
          if (delete_response.status === 200) {
            this.bookmarkList = this.bookmarkList.filter(
              (i) => i.id !== bookmark.id
            );
            /* bookmarkList içerisinde olan arkadaslardan id'si
            benim sildigim arkadastan farklı olanları bana getir. o haric
            hepsini getirecegi için silmiş olacak. */
          }
        });
    },
  },
};

/* 
routing ile beraber life cycle hook'unu kullanarak sayfalar arası 
istek atıp veriyi çekmeyi gördük.
Hem de axios'u tekrardan görüp 2 farklı şey yaptık. 1. custom acios instance
2.global olarak axios'un tanımlanması.

*/
</script>

<style></style>
