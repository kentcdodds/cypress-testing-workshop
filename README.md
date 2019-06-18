# Cypress Testing Workshop

[![All Contributors](https://img.shields.io/badge/all_contributors-3-orange.svg?style=flat-square)](#contributors)

👋 hi there! My name is [Kent C. Dodds](https://kentcdodds.com)! This is a
workshop repo to teach you about increasing your deploy confidence by using
Cypress to test your applications.

[![Build Status][build-badge]][build]
[![AppVeyor Build Status][win-build-badge]][win-build]
[![GPL 3.0 License][license-badge]][license]
[![All Contributors](https://img.shields.io/badge/all_contributors-8-orange.svg?style=flat-square)](#contributors)
[![PRs Welcome][prs-badge]][prs] [![Code of Conduct][coc-badge]][coc]

## System Requirements

- [git][git] v2 or greater
- [NodeJS][node] v8 or greater
- [yarn][yarn] v1 or greater (or [npm][npm] v6 or greater)

All of these must be available in your `PATH`. To verify things are set up
properly, you can run this:

```shell
git --version
node --version
yarn --version # or npm --version
```

If you have trouble with any of these, learn more about the PATH environment
variable and how to fix it here for [windows][win-path] or
[mac/linux][mac-path].

## Setup

After you've made sure to have the correct things (and versions) installed, you
should be able to just run a few commands to get set up:

```
git clone https://github.com/kentcdodds/cypress-testing-workshop.git
cd cypress-testing-workshop
npm run setup --silent
```

This may take a few minutes. **It will ask you for your email.** This is
optional and just automatically adds your email to the links in the project to
make filling out some forms easier If you get any errors, please read through
them and see if you can find out what the problem is. You may also want to look
at [Troubleshooting](#troubleshooting). If you can't work it out on your own
then please [file an issue][issue] and provide _all_ the output from the
commands you ran (even if it's a lot).

## Running the app

To get the app up and running (and really see if it worked), run:

```shell
npm start
```

This should start up your browser. If you're familiar, this is a standard
[react-scripts](https://github.com/facebook/create-react-app) application.

You can also open
[the deployment of the app on Netlify](https://cypress-testing-workshop.netlify.com/).

## Running the tests

```shell
npm test
```

This will start the app and Cypress. Go ahead and play around with things.

**Your goal will be to go into each test in the `exercises` directory and follow
the instructions to test the app**

## Helpful Emoji 🐨 💰 💯 🦉 📜

Each exercise has comments in it to help you get through the exercise. **Kody
the Koala Bear**, **Marty the Money Bag**, **Hannah the Hundred**, **Olivia the
Owl**, and **Dominic the Document** are here to help you.

- **Kody** 🐨 will tell you when there's something specific you should do
- **Marty** 💰 will give you specific tips (and sometimes code) along the way
- **Hannah** 💯 will give you extra challenges you can do if you finish the
  exercises early.
- **Olivia** 🦉 will give you useful tidbits/best practice notes.
- **Dominic** 📜 will give you links to useful documentation

## Troubleshooting

<details>

<summary>"npm run setup" command not working</summary>

Here's what the setup script does. If it fails, try doing each of these things
individually yourself:

```
# verify your environment will work with the project
node ./scripts/verify

# install dependencies
npm install

# verify the project is ready to run
npm run lint
npm run test:run
```

If any of those scripts fail, please try to work out what went wrong by the
error message you get. If you still can't work it out, feel free to [open an
issue][issue] with _all_ the output from that script. I will try to help if I
can.

</details>

## Contributors

Thanks goes to these wonderful people
([emoji key](https://github.com/kentcdodds/all-contributors#emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore -->
<table><tr><td align="center"><a href="https://kentcdodds.com"><img src="https://avatars0.githubusercontent.com/u/1500684?v=4" width="100px;" alt="Kent C. Dodds"/><br /><sub><b>Kent C. Dodds</b></sub></a><br /><a href="https://github.com/kentcdodds/cypress-testing-workshop/commits?author=kentcdodds" title="Code">💻</a> <a href="https://github.com/kentcdodds/cypress-testing-workshop/commits?author=kentcdodds" title="Documentation">📖</a> <a href="#infra-kentcdodds" title="Infrastructure (Hosting, Build-Tools, etc)">🚇</a> <a href="https://github.com/kentcdodds/cypress-testing-workshop/commits?author=kentcdodds" title="Tests">⚠️</a></td><td align="center"><a href="https://github.com/wgolledge"><img src="https://avatars0.githubusercontent.com/u/35961363?v=4" width="100px;" alt="Will Golledge"/><br /><sub><b>Will Golledge</b></sub></a><br /><a href="https://github.com/kentcdodds/cypress-testing-workshop/commits?author=wgolledge" title="Documentation">📖</a></td><td align="center"><a href="https://ryota-murakami.github.io/"><img src="https://avatars2.githubusercontent.com/u/5501268?v=4" width="100px;" alt="Ryota Murakami"/><br /><sub><b>Ryota Murakami</b></sub></a><br /><a href="https://github.com/kentcdodds/cypress-testing-workshop/commits?author=ryota-murakami" title="Code">💻</a></td></tr></table>

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the
[all-contributors](https://github.com/kentcdodds/all-contributors)
specification. Contributions of any kind welcome!

## License

This material is available for private, non-commercial use under the
[GPL version 3](http://www.gnu.org/licenses/gpl-3.0-standalone.html). If you
would like to use this material to conduct your own workshop, please contact me
at kent@doddsfamily.us

[npm]: https://www.npmjs.com/
[yarn]: https://yarnpkg.com
[node]: https://nodejs.org
[git]: https://git-scm.com/
[build-badge]:
  https://img.shields.io/travis/kentcdodds/cypress-testing-workshop.svg?style=flat-square&logo=travis
[build]: https://travis-ci.org/kentcdodds/cypress-testing-workshop
[license-badge]:
  https://img.shields.io/badge/license-GPL%203.0%20License-blue.svg?style=flat-square
[license]:
  https://github.com/kentcdodds/cypress-testing-workshop/blob/master/README.md#license
[prs-badge]:
  https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square
[prs]: http://makeapullrequest.com
[donate-badge]:
  https://img.shields.io/badge/$-support-green.svg?style=flat-square
[donate]: http://kcd.im/donate
[coc-badge]:
  https://img.shields.io/badge/code%20of-conduct-ff69b4.svg?style=flat-square
[coc]:
  https://github.com/kentcdodds/cypress-testing-workshop/blob/master/CODE_OF_CONDUCT.md
[github-watch-badge]:
  https://img.shields.io/github/watchers/kentcdodds/cypress-testing-workshop.svg?style=social
[github-watch]: https://github.com/kentcdodds/cypress-testing-workshop/watchers
[github-star-badge]:
  https://img.shields.io/github/stars/kentcdodds/cypress-testing-workshop.svg?style=social
[github-star]: https://github.com/kentcdodds/cypress-testing-workshop/stargazers
[twitter]:
  https://twitter.com/intent/tweet?text=Check%20out%20cypress-testing-workshop%20by%20@kentcdodds%20https://github.com/kentcdodds/cypress-testing-workshop%20%F0%9F%91%8D
[twitter-badge]:
  https://img.shields.io/twitter/url/https/github.com/kentcdodds/cypress-testing-workshop.svg?style=social
[emojis]: https://github.com/kentcdodds/all-contributors#emoji-key
[all-contributors]: https://github.com/kentcdodds/all-contributors
[win-path]:
  https://www.howtogeek.com/118594/how-to-edit-your-system-path-for-easy-command-line-access/
[mac-path]: http://stackoverflow.com/a/24322978/971592
[issue]: https://github.com/kentcdodds/cypress-testing-workshop/issues/new
[win-build-badge]:
  https://img.shields.io/appveyor/ci/kentcdodds/cypress-testing-workshop.svg?style=flat-square&logo=appveyor
[win-build]: https://ci.appveyor.com/project/kentcdodds/cypress-testing-workshop
