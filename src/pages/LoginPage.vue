<template>
  <q-page padding>
    <q-card class="auth-tabs">
      <q-tabs
        v-model="tab"
        dense
        class="text-grey"
        active-color="primary"
        indicator-color="primary"
        align="justify"
        narrow-indicator
      >
        <q-tab name="login" label="Login"/>
        <q-tab name="register" label="Register"/>
      </q-tabs>

      <q-separator/>
      <q-tab-panels v-model="tab" animated>
        <q-tab-panel name="login">
          <RegisterLogin :tab="tab"/>
        </q-tab-panel>
        <q-tab-panel name="register">
          <RegisterLogin :tab="tab"/>
        </q-tab-panel>
      </q-tab-panels>
    </q-card>
    <div class="q-pa-sm text-center">
      <span class="text-weight-bold title ">connect with google</span>
    </div>
    <q-card class="newCard">
      <div class=" googleBtn">
        <google-provider/>
      </div>
    </q-card>
  </q-page>
</template>
<script>
import RegisterLogin from "components/auth/Register";
import GoogleProvider from "components/auth/GoogleProvider";

export default {
  name: 'Login',
  data() {
    return {
      tab: "login",
    };
  },
  components: {GoogleProvider, RegisterLogin},
};
</script>

<style lang="scss">
.auth-tabs {
  max-width: 500px;
  margin: 0 auto;
}

.title {
  font-size: 14px;
}

.newCard {
  max-width: 500px;
  margin: 0 auto;
}

.googleBtn {
  text-align: center;
}
</style>
