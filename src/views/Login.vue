<template>
  <div class="login">
    <v-container>

      <v-layout row justify-center class="mb-3">
        <v-flex xs7>
          <v-tabs color="transparent" fixed-tabs flat>
            <v-tab @click="tab = 0">
              Login
            </v-tab>
            <v-tab @click="tab = 1">
              Register
            </v-tab>
          </v-tabs>
        </v-flex>
      </v-layout>

      <v-layout justify-center row class="text-xs-center">
        <v-flex xs3>
          <v-card class="grad-cool-blues" height="500px"></v-card>
        </v-flex>

        <v-flex xs4 class="grey lighten-4">
          <v-container class="text-xs-center">
            <v-card flat class="grey lighten-4">

              <v-card-title primary-title>
                <h3> {{ type }} </h3>
              </v-card-title>

              <v-form v-model="valid">
                <v-text-field v-if="isRegister"
                              prepend-icon="person"
                              v-model="name"
                              :rules="nameRules"
                              label="Display Name"
                              required
                ></v-text-field>

                <v-text-field prepend-icon="mail"
                              v-model="email"
                              :rules="emailRules"
                              label="E-mail"
                              required
                ></v-text-field>

                <v-text-field prepend-icon="lock"
                              v-model="password"
                              type="password"
                              :rules="passwordRules"
                              label="Password"
                              required
                ></v-text-field>

                <v-text-field v-if="isRegister"
                              prepend-icon="lock"
                              v-model="password2"
                              type="password"
                              :rules="password2Rules"
                              label="Confirm Password"
                              required
                ></v-text-field>

                <v-card-actions class="mt-5">
                  <v-btn @click="submit"
                         color="accent"
                         outline
                         large
                         block
                         :disabled="!valid"
                  >
                    {{ type }}
                  </v-btn>
                </v-card-actions>
              </v-form>
            </v-card>
          </v-container>
        </v-flex>
      </v-layout>
    </v-container>

    <v-snackbar v-model="snackbar" color="error" :timeout="5000" top>
      {{ error }}

      <v-btn dark flat @click="snackbar = false">
        Close
      </v-btn>
    </v-snackbar>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        tab: 0,
        valid: false,
        error: null,
        snackbar: false,

        name: '',
        nameRules: [
          v => !!v || 'Display name is required',
          v => v.length >= 8 || 'Must be at least 8 characters long',
        ],

        email: '',
        emailRules: [
          v => !!v || 'E-mail is required',
          v => /.+@.+/.test(v) || 'E-mail must be valid',
        ],

        password: '',
        passwordRules: [
          v => !!v || 'Password is required',
          v => v.length >= 8 || 'Must be at least 8 characters long',
          v => /[a-z]/.test(v) || 'Must contain at least 1 lowercase [a-z]',
          v => /[A-Z]/.test(v) || 'Must contain at least 1 uppercase [A-Z]',
          v => /[0-9]/.test(v) || 'Must contain at least 1 digit [0-9]',
        ],

        password2: '',
        password2Rules: [
          v => !!v || 'Confirm Password is required',
          v => v === this.password || 'Password does not match',
        ],

      };
    },
    computed: {
      type() {
        return this.tab === 0 ? 'Login' : 'Register';
      },
      isRegister() {
        return this.tab === 1;
      },
    },
    methods: {
      submit() {
        this.axios.post(`${process.env.VUE_APP_API_ENDPOINT}/${this.type.toLowerCase()}`, {
          name: this.name,
          email: this.email,
          password: this.password,
        }).then((response) => {
          localStorage.setItem('access_token', response.data.access_token);
          this.$router.push('/admin/dashboard');
        }).catch((error) => {
          console.log(error.response.data);
          this.error = error.response.data.message;
          this.snackbar = true;
        });
      },
    },
  };
</script>
