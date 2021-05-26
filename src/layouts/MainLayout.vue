<template>
  <q-layout view="lHr lpR fFf">
    <q-header bordered class="bg-white text-black">
      <q-toolbar>
        <q-toolbar-title class="absolute-center">
        </q-toolbar-title>
        <q-btn
          flat
          v-if="!loggedIn"
          to="/auth"
          icon-right="account_circle"
          label="Login"
          class="absolute-right"
        />
        <q-btn
          flat
          @click="logoutUser"
          v-if="loggedIn"
          icon-right="account_circle"
          label="Logout"
          class="absolute-right"
        />
        <q-btn dense flat round icon="menu" @click="left = !left"/>

        <q-toolbar-title class="text-weight-bold">
          <span class="gt-sm">{{ userId }}
          </span>
          <q-icon
            class="Header-icon q-pa-md lt-md"
            name="fas fa-dove"
            size="sm"
          ></q-icon>
        </q-toolbar-title>

        <q-btn dense flat round icon="menu" @click="right = !right"/>
      </q-toolbar>
    </q-header>

    <q-drawer
      show-if-above
      v-if="loggedIn"
      v-model="left"
      :width="283"
      side="left"
      bordered>
      <q-img
        :src="img"
        class="q-pa-lg img"
        spinner-color="white"
        style="height: 30px; max-width: 30px"
      />
      <q-list>
        <q-item
          to="/home"
          exact
          clickable
          v-ripple>
          <q-item-section avatar>
            <q-icon
              name="home"
              size="md"/>
          </q-item-section>

          <q-item-section class="text-h6 text-weight-bold">Home</q-item-section>
        </q-item>
        <q-item
          to="/about"
          clickable
          exact
          v-ripple>
          <q-item-section avatar>
            <q-icon color="primary" name="help" size="md"/>
          </q-item-section>

          <q-item-section class="text-h6 text-weight-bold">About</q-item-section>
        </q-item>

      </q-list>
    </q-drawer>

    <q-drawer
      show-if-above
      v-model="right"
      v-if="loggedIn"
      side="right"
      bordered>
      <q-input
        outlined
        placeholder="Search"
        rounded
        dense
        class="q-ma-md"
      >
        <template v-slot:prepend>
          <q-icon name="search"/>
        </template>
      </q-input>

      <q-list
        separator
        bordered
        padding>
        <q-item class="q-pa-md">
          <q-item-section>
            <q-item-label overline class="text-grey">Education</q-item-label>
            <q-item-label class="text-weight-bold ">information</q-item-label>
            <q-item-label caption>Secondary line text. Lorem ipsum dolor sit amet, consectetur adipiscit elit.
            </q-item-label>
          </q-item-section>

          <q-item-section side top>
            <q-item-label caption>5 min ago</q-item-label>
          </q-item-section>
        </q-item>
        <q-item class="q-pa-md">
          <q-item-section>
            <q-item-label overline class="text-grey">Education</q-item-label>
            <q-item-label class="text-weight-bold ">information</q-item-label>
            <q-item-label caption>Secondary line text. Lorem ipsum dolor sit amet, consectetur adipiscit elit.
            </q-item-label>
          </q-item-section>

          <q-item-section side top>
            <q-item-label caption>5 min ago</q-item-label>
          </q-item-section>
        </q-item>
        <q-item class="q-pa-md">
          <q-item-section>
            <q-item-label overline class="text-grey">Education</q-item-label>
            <q-item-label class="text-weight-bold ">information</q-item-label>
            <q-item-label caption>Secondary line text. Lorem ipsum dolor sit amet, consectetur adipiscit elit.
            </q-item-label>
          </q-item-section>

          <q-item-section side top>
            <q-item-label caption>5 min ago</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>

    </q-drawer>

    <q-page-container>
      <keep-alive>
        <router-view/>
      </keep-alive>
    </q-page-container>

  </q-layout>
</template>

<script>
import {mapActions, mapState} from 'vuex'

export default {
  data() {
    return {
      left: false,
      right: false
    }
  },
  computed: {
    ...mapState('auth', ['loggedIn','userId','img'])
  },
  methods: {
    ...mapActions('auth', ['logoutUser'])
  }
}
</script>
<style lang="scss">
.Header-icon {
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);


}

</style>
