# setup-veryl

[![Actions Status](https://github.com/veryl-lang/setup-veryl/workflows/Tests/badge.svg)](https://github.com/veryl-lang/setup-veryl/actions)

This action downloads a prebuilt [Veryl](https://veryl-lang.org/) binary and adds it to the `PATH`.

## Usage

By default, this action downloads the latest version of Veryl.

```yaml
name: Check
on: [push, pull_request]
jobs:
  check:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v4
    - uses: veryl-lang/setup-veryl@v1
    - run: veryl check
```

Version specification through `version` can be used.

```yaml
    - uses: veryl-lang/setup-veryl@v1
      with:
        version: 0.7.2
```

### Publish documents through GitHub Pages

```yaml
name: Deploy
on: [push]
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v4
    - uses: veryl-lang/setup-veryl@v1
    - run: veryl doc
    - uses: peaceiris/actions-gh-pages@v3
      with:
        github_token: ${{ secrets.GITHUB_TOKEN }}
        publish_dir: doc
```

## License

Licensed under either of

 * Apache License, Version 2.0, ([LICENSE-APACHE](LICENSE-APACHE) or http://www.apache.org/licenses/LICENSE-2.0)
 * MIT license ([LICENSE-MIT](LICENSE-MIT) or http://opensource.org/licenses/MIT)

at your option.

### Contribution

Unless you explicitly state otherwise, any contribution intentionally
submitted for inclusion in the work by you, as defined in the Apache-2.0
license, shall be dual licensed as above, without any additional terms or
conditions.
