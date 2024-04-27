const getos = require('getos');

function getDownloadObject(version) {
  const os = getos(function (e, os) { os });
  var filename = '';
  if (os.os === 'linux') {
    if (os.dist === 'Ubuntu') {
      filename = `verilator-ubuntu-${ os.release }`;
    }
  }
  const binPath = 'bin';
  const versionPath = version === 'latest' ? 'latest/download' : `download/v${ version }`;
  const url = `https://github.com/veryl-lang/verilator-package/releases/${ versionPath }/${ filename }.zip`;
  return {
    url,
    binPath
  };
}

module.exports = { getDownloadObject }
