## Prework: Advanced Web Development (WEB103)

Welcome to the CodePath WEB103 Prework!

In WEB103, you will learn how to build your own full stack apps from scratch. But first, it's important that you know how to build a frontend that can interact with an API and supports CRUD operations.

Introducing . . . 🥁

### Creatorverse

A person's top content creators can say a lot about them. Do they prefer lockpicking videos 🔒, casual art streams 🖼️, or hustle-culture TikTokers 📱?

*View an exemplar of the project [here](https://creatorverse-production.up.railway.app/)!*

### Screenshot

A simple version of the app with all the required features implemented:

:::success
<a href="/course_images/web103/prework/prework.gif" target="_blank"><img src='/course_images/web103/prework/prework.gif' title='Screenshot of app with core features implemented' width='600' alt='Screenshot of app with core features implemented' /></a>
:::

Your **mission** 🧑‍🚀 is to build a frontend that supports CRUD (create, read, update, and delete) operations on your favorite content creators. Your content creators can be Twitch streamers, YouTube channels, Instagram personalities, TikTok accounts, or similar. Heck, they can even be Mastodon microbloggers.

The **purpose** of your app is to share **at least five** creators you think are worth following and give yourself the ability to create, update, and delete creators. Each `Creator` should have:

- [x] a `name`
- [x] a `url` (the link to their channel or page)
- [x] a `description`
- [x] (optional) an `imageURL` that links to a picture of the creator or some of their content

You **must** use React to create your app, and you may *optionally* use PicoCSS to style HTML elements.

Let's get started! 🚀

### Required Features

- [x] Use a logical component structure in React to create the frontend of the app
- [x] Display **at least five** content creators on the homepage of the app
- [x] Each content creator item includes:
  - [x] their `name`
  - [x] a link to their channel or page
  - [x] a short description of their content
- [x] API calls use the async/await design pattern via Axios or fetch
- [x] Clicking on a content creator item takes the user to their details page, which includes their `name`, `url`, and `description`
- [x] Each content creator has their own unique URL
- [x] The user can edit a content creator to change their `name`, `url`, or `description`
- [x] The user can delete a content creator
- [x] The user can add a new content creator by entering a `name`, `url`, and `description`
  - [x] The new content creator then appears in the displayed list

### Stretch Features

- [ ] Use [**Picocss**](https://picocss.com/) to style HTML elements
- [ ] Display content creator items in a creative format, like cards instead of a list
- [ ] Show an image of each content creator on their content creator card
