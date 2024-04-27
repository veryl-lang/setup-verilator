const getos = require('getos');

function getImage() {
  let image = '';

  getos(function (e, os) {
    if (e) {
        throw new Error(e);
    }

    if (os.os === 'linux') {
        if (os.dist === 'Ubuntu') {
          image = `ubuntu-${ os.release }`;
        }
    }
  });

  return image;
}

function getDownloadObject(version) {
  const image = getImage();
  const filename = `verilator-${ image }`;
  const binPath = 'bin';
  const versionPath = version === 'latest' ? 'latest/download' : `download/v${ version }`;
  const url = `https://github.com/veryl-lang/verilator-package/releases/${ versionPath }/${ filename }.zip`;
  return {
    url,
    binPath
  };
}

module.exports = { getDownloadObject }
