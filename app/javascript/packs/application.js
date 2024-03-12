// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

import Rails from "@rails/ujs"
//import Turbolinks from "turbolinks"
import * as ActiveStorage from "@rails/activestorage"
import "channels"
import "bootstrap";
import { safeCredentials, handleErrors } from './utils/fetchHelper';
// change the path to fetchHelper.js to the one that fits your file structure

fetch(`/users`, safeCredentials({
  method: 'POST',
  body: JSON.stringify({
    users: {
      email: 'hello@world.com',
      password: 'abc123'
    }
  })
}))
.then(handleErrors)
.then(res => {
  console.log(res);
})

Rails.start()
//Turbolinks.start()
ActiveStorage.start()
