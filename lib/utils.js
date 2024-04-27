const getos = require('getos');

function getDownloadObject(version) {
  var os;
  getos(function (e, x) { os = x; });
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
