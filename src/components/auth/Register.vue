<template>
  <v-container>
    <v-row>
      <v-flex xs12 sm6 offset-sm3>
        <v-card>
          <v-container>
            <v-card-title>
              Register User
            </v-card-title>
            <v-form ref="form" v-model="valid">
              <v-col>
                <v-flex xs12>
                  <v-text-field
                    name="email"
                    label="Mail"
                    id="email"
                    v-model="email"
                    type="email"
                    :rules="[rules.required]"
                  ></v-text-field>
                </v-flex>
              </v-col>
              <v-col>
                <v-flex xs12>
                  <v-text-field
                    name="password"
                    label="Password"
                    id="password"
                    v-model="password"
                    :append-icon="showPwd ? 'mdi-eye' : 'mdi-eye-off'"
                    :type="showPwd ? 'text' : 'password'"
                    :rules="[rules.required, rules.length]"
                    @click:append="showPwd = !showPwd"
                  ></v-text-field>
                </v-flex>
              </v-col>
              <v-col>
                <v-flex xs12>
                  <v-text-field
                    name="confirmPassword"
                    label="Confirm Password"
                    id="confirmPassword"
                    v-model="confirmPassword"
                    :append-icon="showPwd ? 'mdi-eye' : 'mdi-eye-off'"
                    :type="showPwd ? 'text' : 'password'"
                    :rules="[rules.required, rules.confirmPassword]"
                    @click:append="showPwd = !showPwd"
                  ></v-text-field>
                </v-flex>
              </v-col>
              <v-col>
                <v-flex xs12>
                  <v-btn 
                    class="mr-3"
                    :disabled="!valid" 
                    @click="onSignUp()">Submit</v-btn>
                  <v-btn color="primary" @click="toLogin()">Login</v-btn>
                </v-flex>
              </v-col>
            </v-form>
          </v-container>
        </v-card>
      </v-flex>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      valid: false,
      email: "",
      password: "",
      confirmPassword: "",
      showPwd: false,
      rules: {
        required: value => !!value || "Field is required",
        length: value =>
          value.length >= 6 || "Passwords must be 6 characters or longer",
        confirmPassword: value =>
          value === this.password || "Passwords do not match"
      }
    };
  },
  methods: {
    onSignUp() {},
    toLogin() {}
  }
};
</script>
