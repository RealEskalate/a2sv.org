<template>
  <div>
    <banner
      img-width="18rem"
      title="News"
      description="Get the Latest on Us"
      img="./news.svg"
    />

    <v-container class="my-15">
      <h2 class="display-1">
        Latest Updates
      </h2>
      <v-divider class="mt-2" />
      <template v-for="post in posts">
        <v-hover v-slot="{ hover }" :key="post.id">
          <nuxt-link :to="`/news/${post.title}`">
            <v-card
              max-width="1000"
              class="mx-auto my-4"
              outlined
              tile
              :elevation="hover ? 12 : 0"
              :class="{ 'on-hover': hover }"
            >
              <v-row class="mx-2 align-center">
                <v-col cols="12" sm="4">
                  <v-img height="150" :src="post.image" />
                </v-col>
                <v-col cols="12" sm="8">
                  <v-card-title class="justify-space-between">
                    <h2>{{ post.title }}</h2>
                    <small>{{ post.date }}</small>
                  </v-card-title>
                  <v-divider />

                  <v-card-text>
                    <div>
                      {{ post.preview }}
                    </div>
                  </v-card-text>
                </v-col>
              </v-row>
            </v-card>
          </nuxt-link>
        </v-hover>
      </template>
    </v-container>
  </div>
</template>

<script>
import Banner from "@/components/Core/TextOnlyBanner";
export default {
  components: {
    Banner
  },
  data() {
    return {
      model: 0,
      colors: ["primary", "secondary", "yellow darken-2", "red", "orange"],
      posts: [
        {
          id: 1,
          title: "First Post",
          date: "Oct 26, 2020",
          image:
            "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
          content:
            "<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae quod deleniti neque ratione suscipit! Nihil laborum totam mollitia quibusdam facilis iure neque minima. Vitae, suscipit commodi neque aliquid itaque at quae nulla doloremque quos? Praesentium quo molestias id repudiandae quisquam vero voluptatibus facere veritatis impedit omnis.</p><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae quod deleniti neque ratione suscipit! Nihil laborum totam mollitia quibusdam facilis iure neque minima. <strong>Vitae</strong>, suscipit commodi neque aliquid itaque at quae nulla doloremque quos? Praesentium quo molestias id repudiandae quisquam vero voluptatibus facere veritatis impedit omnis.</p>",
          preview:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae quod deleniti neque ratione suscipit! Nihil laborum totam mollitia quibusdam facilis iure neque minima. Vitae, suscipit commodi neque aliquid itaque at quae nulla doloremque quos? Praesentium quo molestias id repudiandae quisquam."
        },
        {
          id: 2,
          title: "Second Post",
          date: "Oct 26, 2020",
          image:
            "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
          content:
            "<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae quod deleniti neque ratione suscipit! Nihil laborum totam mollitia quibusdam facilis iure neque minima. Vitae, suscipit commodi neque aliquid itaque at quae nulla doloremque quos? Praesentium quo molestias id repudiandae quisquam vero voluptatibus facere veritatis impedit omnis.</p><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae quod deleniti neque ratione suscipit! Nihil laborum totam mollitia quibusdam facilis iure neque minima. <strong>Vitae</strong>, suscipit commodi neque aliquid itaque at quae nulla doloremque quos? Praesentium quo molestias id repudiandae quisquam vero voluptatibus facere veritatis impedit omnis.</p>",
          preview:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae quod deleniti neque ratione suscipit! Nihil laborum totam mollitia quibusdam facilis iure neque minima. Vitae, suscipit commodi neque aliquid itaque at quae nulla doloremque quos? Praesentium quo molestias id repudiandae quisquam."
        },
        {
          id: 3,
          title: "Third Post",
          date: "Oct 26, 2020",
          image:
            "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
          content:
            "<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae quod deleniti neque ratione suscipit! Nihil laborum totam mollitia quibusdam facilis iure neque minima. Vitae, suscipit commodi neque aliquid itaque at quae nulla doloremque quos? Praesentium quo molestias id repudiandae quisquam vero voluptatibus facere veritatis impedit omnis.</p><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae quod deleniti neque ratione suscipit! Nihil laborum totam mollitia quibusdam facilis iure neque minima. <strong>Vitae</strong>, suscipit commodi neque aliquid itaque at quae nulla doloremque quos? Praesentium quo molestias id repudiandae quisquam vero voluptatibus facere veritatis impedit omnis.</p>",
          preview:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae quod deleniti neque ratione suscipit! Nihil laborum totam mollitia quibusdam facilis iure neque minima. Vitae, suscipit commodi neque aliquid itaque at quae nulla doloremque quos? Praesentium quo molestias id repudiandae quisquam."
        }
      ]
    };
  }
};
</script>

<style scoped>
.v-card {
  transition: opacity 0.4s ease-in-out;
}

.v-card:not(.on-hover) {
  opacity: 0.9;
}

a {
  text-decoration: none;
}

h2:hover {
  color: #1084cb;
}
</style>
