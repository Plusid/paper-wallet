# INF Paper Wallet

<p align="center">
    <img src="https://raw.githubusercontent.com//paper-wallet/master/banner.png" />
</p>



## Running Locally

There are two ways you can run the INF Paperwallet locally:

1. Download the latest `dist.zip` release, extract the contents and open the `index.html` file in your browser.
2. Clone the repo, install the requirements and dependencies and run `yarn serve` to run a local version.

## Using Custom Network

If the network you want to use is not listed in the dropdown, you can switch to custom networks in the modal, fill in the `pubkeyHash` and `WIF` values of the network you want to use, and press `Save` to apply it. That's it!

## Development

### Requirements

The INF Paperwallet has the following requirements:

-   [Node](https://nodejs.org/)
-   [Yarn (Optional but recommended)](https://yarnpkg.com)

### Commands

<details><summary>List of commands</summary>

```bash
# Install dependencies
yarn install

# Compiles and hot-reloads for development
yarn run serve

# Compiles and minifies for production
yarn run build

# Run your tests
yarn run test:e2e
yarn run test:unit

# Lints and fixes files
yarn run lint

# Generate release zips
yarn run task:release

# Deploy on GitHub pages
yarn run task:deploy
```

</details>

## Security

If you discover a security vulnerability within this package, please send an e-mail to security@infinitysolutions.io. All security vulnerabilities will be promptly addressed.

## Credits

This project exists thanks to all the people who [contribute](../../contributors).

## License

[MIT](LICENSE) © [INF](https://infinitysolutions.io)
