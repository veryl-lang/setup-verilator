# setup-verilator

[![Actions Status](https://github.com/veryl-lang/setup-verilator/workflows/Tests/badge.svg)](https://github.com/veryl-lang/setup-verilator/actions)

This action downloads a prebuilt [Verilator](https://github.com/verilator/verilator) binary and adds it to the `PATH`.

## Usage

By default, this action downloads the latest version of Verilator.
The supported platforms are below:

* `ubuntu-24.04` / `ubuntu-latest`
* `ubuntu-22.04`
* `ubuntu-20.04`
* `macos-latest`

```yaml
name: Check
on: [push, pull_request]
jobs:
  check:
    runs-on: ubuntu-22.04
    steps:
    - uses: actions/checkout@v4
    - uses: veryl-lang/setup-verilator@v1
    - run: verilator --version
```

Version specification through `version` can be used.
This feature is not supported on macOS.

```yaml
    - uses: veryl-lang/setup-verilator@v1
      with:
        version: 5.024
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
