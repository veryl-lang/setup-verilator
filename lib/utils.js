const getos = require('getos');

function getImage() {
  let image = '';

  getos(function (e, os) {
    //if (e) {
    //    throw new Error(e);
    //}

    console.log(os);
    console.log(image);
    if (os.os === 'linux') {
        if (os.dist === 'Ubuntu') {
          image = `ubuntu-${ os.release }`;
        }
    }
    console.log(image);
  });

  console.log(image);
  return image;
}

function getDownloadObject(version) {
  const image = getImage();
  console.log(image);
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
