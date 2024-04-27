const getos = require('getos');

async function getImage() {
  return new Promise((resolve, reject) => {
    getos(function (e, os) {
      if (e) {
        reject(e);
      }
      let image = 'unknown';
      if (os.os === 'linux') {
        if (os.dist === 'Ubuntu') {
          image = `ubuntu-${ os.release }`;
        }
      }
      resolve(image);
    });
  });
}

function getDownloadObject(version, image) {
  const filename = `verilator-${ image }`;
  const binPath = 'bin';
  const versionPath = version === 'latest' ? 'latest/download' : `download/v${ version }`;
  const url = `https://github.com/veryl-lang/verilator-package/releases/${ versionPath }/${ filename }.zip`;
  return {
    url,
    binPath
  };
}

module.exports = { getImage, getDownloadObject }
