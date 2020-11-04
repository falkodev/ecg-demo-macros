# PoC Macros in Apostrophe

Here is a demo application of Apostrophe using macros to display reusable pieces of code among different pages.

Once you have a local copy of this project to work from, make sure to install its dependencies with `npm install`. With Apostrophe installed, the first thing to do create an admin user account so you're able to log into the CMS. Run the following command (this will prompt you for a password).

```bash
node app.js apostrophe-users:add admin admin
```

Now you're all set! Just run `npm run dev` to start up the local server and head to `localhost:3000` in your web browser.

Create several products through the admin UI, by clicking on "Products" in the admin bar:

![](https://github.com/falkodev/apos-nuxt-demo/raw/master/.readme-assets/admin-bar.png)

Once done, refresh the homepage, the products will be displayed here.

Create a new page of type "other", you will see the same products too.

This is because of a macro located in `lib/modules/apostrophe-templates/views/common.html` imported in both the `home` page and the `other` page, and rendered with this:

```html
{{ common.render(product) }}
```

---------------

For more documentation on Apostrophe, visit the [A2 documentation site](http://apostrophecms.com).


