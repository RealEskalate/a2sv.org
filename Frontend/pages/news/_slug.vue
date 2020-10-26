<template>
  <v-container>
    <nuxt-link to="/news">
      <v-btn class="mb-4" text>
        <v-icon left>mdi-arrow-left</v-icon>
        Back to news
      </v-btn>
    </nuxt-link>
    <v-card>
      <v-img height="250" :src="post.image" />

      <v-card-title class="justify-space-between">
        <h2>{{ post.title }}</h2>
        <small>{{ post.date }}</small>
      </v-card-title>
      <v-divider></v-divider>
      <v-card-text>
        <div v-html="post.content"></div>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
const posts = [
  {
    id: 1,
    title: 'First Post',
    date: 'Oct 26, 2020',
    image:
      'https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
    content:
      '<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae quod deleniti neque ratione suscipit! Nihil laborum totam mollitia quibusdam facilis iure neque minima. Vitae, suscipit commodi neque aliquid itaque at quae nulla doloremque quos? Praesentium quo molestias id repudiandae quisquam vero voluptatibus facere veritatis impedit omnis.</p><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae quod deleniti neque ratione suscipit! Nihil laborum totam mollitia quibusdam facilis iure neque minima. <strong>Vitae</strong>, suscipit commodi neque aliquid itaque at quae nulla doloremque quos? Praesentium quo molestias id repudiandae quisquam vero voluptatibus facere veritatis impedit omnis.</p>',
    preview:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae quod deleniti neque ratione suscipit! Nihil laborum totam mollitia quibusdam facilis iure neque minima. Vitae, suscipit commodi neque aliquid itaque at quae nulla doloremque quos? Praesentium quo molestias id repudiandae quisquam.',
  },
  {
    id: 2,
    title: 'Second Post',
    date: 'Oct 26, 2020',
    image:
      'https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
    content:
      '<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae quod deleniti neque ratione suscipit! Nihil laborum totam mollitia quibusdam facilis iure neque minima. Vitae, suscipit commodi neque aliquid itaque at quae nulla doloremque quos? Praesentium quo molestias id repudiandae quisquam vero voluptatibus facere veritatis impedit omnis.</p><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae quod deleniti neque ratione suscipit! Nihil laborum totam mollitia quibusdam facilis iure neque minima. <strong>Vitae</strong>, suscipit commodi neque aliquid itaque at quae nulla doloremque quos? Praesentium quo molestias id repudiandae quisquam vero voluptatibus facere veritatis impedit omnis.</p>',
    preview:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae quod deleniti neque ratione suscipit! Nihil laborum totam mollitia quibusdam facilis iure neque minima. Vitae, suscipit commodi neque aliquid itaque at quae nulla doloremque quos? Praesentium quo molestias id repudiandae quisquam.',
  },
  {
    id: 3,
    title: 'Third Post',
    date: 'Oct 26, 2020',
    image:
      'https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
    content:
      '<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae quod deleniti neque ratione suscipit! Nihil laborum totam mollitia quibusdam facilis iure neque minima. Vitae, suscipit commodi neque aliquid itaque at quae nulla doloremque quos? Praesentium quo molestias id repudiandae quisquam vero voluptatibus facere veritatis impedit omnis.</p><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae quod deleniti neque ratione suscipit! Nihil laborum totam mollitia quibusdam facilis iure neque minima. <strong>Vitae</strong>, suscipit commodi neque aliquid itaque at quae nulla doloremque quos? Praesentium quo molestias id repudiandae quisquam vero voluptatibus facere veritatis impedit omnis.</p>',
    preview:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae quod deleniti neque ratione suscipit! Nihil laborum totam mollitia quibusdam facilis iure neque minima. Vitae, suscipit commodi neque aliquid itaque at quae nulla doloremque quos? Praesentium quo molestias id repudiandae quisquam.',
  },
]

const getPost = (title) => {
  console.log(title)
  return posts.filter((post) => post.title === title)
}

export default {
  data() {
    return {
      post: getPost(this.$route.params.slug)[0],
    }
  },
  methods: {},
}
</script>

<style scoped>
.nuxt-link-active {
  text-decoration: none;
}
</style>
