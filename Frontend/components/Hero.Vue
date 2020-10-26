<template>
  <v-card
    tile
    class="banner shadow-sm mb-10 d-flex align-center mb-6"
    style="
      background: url(https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260) no-repeat center; background-size: cover;
    "
  >
    <div class="low-overlay primary darken-3" style="opacity: 0.15" />
    <div class="overlay primary shadow" />

    <div class="text">
      <v-row>
        <v-spacer />
        <v-col cols="5">
          <v-list-item three-line class="text-center">
            <v-list-item-content class="white--text">
              <h1 class="my-5 display-2 font-weight-light">Page Name</h1>
              <span class="body-2 font-weight-light">
                Greyhound divisely hello coldly fonwderfully Greyhound divisely
                hello coldly fonwderfully Greyhound divisely hello coldly
                fonwderfully Greyhound divisely hello coldly fonwderfully
                Greyhound divisely hello coldly fonwderfully Greyhound divisely
                hello coldly fonwderfully
              </span>
              <div class="text-center mt-3">
                <v-chip class="ma-2 rounded-0" outlined color="white" to="/">
                  Link 1
                </v-chip>
                <v-chip class="ma-2 rounded-0" outlined color="white" to="/">
                  Link 2
                </v-chip>
              </div>
            </v-list-item-content>
          </v-list-item>
        </v-col>
      </v-row>
    </div>
  </v-card>
</template>

<script></script>

<style scoped>
.banner {
  background-size: cover;
  height: 400px;
  opacity: 0.95;
  position: relative;
  overflow: hidden;
}
.overlay {
  position: absolute;
  z-index: 10;
  width: 60%;
  height: 100%;
  transform: skew(-10deg);
  left: 58%;
}
.low-overlay {
  position: absolute;
  z-index: 9;
  width: 100%;
  height: 100%;
}
.text {
  position: absolute;
  z-index: 11;
}
</style>
