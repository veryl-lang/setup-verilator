const os = require('os');

// arch in [arm, x32, x64...] (https://nodejs.org/api/os.html#os_os_arch)
// return value in [amd64, 386, arm]
function mapArch(arch) {
  const mappings = {
    arm64: 'aarch64',
    x64:   'x86_64'
  };
  return mappings[arch] || arch;
}

// os in [darwin, linux, win32...] (https://nodejs.org/api/os.html#os_os_platform)
// return value in [darwin, linux, windows]
function mapOS(os) {
  const mappings = {
    darwin: 'mac',
    linux:  'linux',
    win32:  'windows'
  };
  return mappings[os] || os;
}

function getDownloadObject(version) {
  const platform = os.platform();
  const filename = `verilator`;
  const binPath = 'bin';
  const versionPath = version === 'latest' ? 'latest/download' : `download/verilator-v${ version }`;
  const url = `https://github.com/veryl-lang/verilator-package/releases/${ versionPath }/${ filename }.zip`;
  return {
    url,
    binPath
  };
}

module.exports = { getDownloadObject }
