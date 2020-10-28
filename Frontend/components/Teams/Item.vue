<template>
  <div>
    <v-card class="mx-auto" max-width="344" tile flat>
      <div class="d-flex profile">
        <v-avatar class="ma-0" size="150" tile>
          <v-img
            src="https://acumen.org/wp-content/uploads/2016/09/AKK-Photo-1-580x580.jpg"
          />
        </v-avatar>

        <v-card-text class="headline">
          <div class="mb-1">
            <p class="country">Ethiopia</p>
          </div>
          <div>
            <p class="name">CARLYLE Blash</p>
          </div>

          <div>
            <p class="job">BOARD MEMBER</p>
          </div>
        </v-card-text>
      </div>
    </v-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        { title: 'Home', icon: 'mdi-view-dashboard' },
        { title: 'About', icon: 'mdi-forum' },
      ],
    }
  },
}
</script>

<style>
.headline div {
  margin-bottom: -0.3em;
}
.country {
  text-transform: uppercase;
  font-size: small;
  font-weight: 300;
  margin: 0px !important;
}
.name {
  font-size: large;
  text-transform: uppercase;
  /* #f4f4f4 !important */
  font-family: 'Roboto';
  font-weight: 500;
  margin: 0px !important;
}
.job {
  font-family: unset;
  font-size: medium;
  font-weight: lighter;
  margin: 0px !important;
}
.v-avatar {
  border-radius: 0px;
}
.profile:hover {
  background-color: rgb(49, 151, 235);
  color: white;
}
</style>
