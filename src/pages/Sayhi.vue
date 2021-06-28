<template>
  <Layout>
    <div data-v-78e0b360="" class="layout" id="app">
      <div data-v-78e0b360="" class="container">
        <div data-v-78e0b360="" class="contact-header">
          <h1 data-v-78e0b360="" class="contact-title">Say hi!</h1>
          <p data-v-78e0b360="">
            Leave me a note with any questions you might have, I'll get back to
            you as soon as possible.
          </p>
        </div>
        <form data-v-78e0b360="" name="contact" class="contact-form">
          <div data-v-78e0b360="" class="sender-info">
            <div data-v-78e0b360="">
              <label data-v-78e0b360="" for="name" class="label"
                >Your name</label
              ><input data-v-78e0b360="" type="text" name="name" />
            </div>
            <div data-v-78e0b360="">
              <label data-v-78e0b360="" for="email" class="label"
                >Your email</label
              ><input data-v-78e0b360="" type="email" name="email" />
            </div>
          </div>
          <div data-v-78e0b360="" class="message">
            <label data-v-78e0b360="" for="message" class="label">Message</label
            ><textarea data-v-78e0b360="" name="message"></textarea>
          </div>
          <button data-v-78e0b360="" class="button">Submit form</button>
        </form>
      </div>
    </div>
  </Layout>
</template>
<script>
export default {
    name: 'SayhiPage'
}
</script>