function getDownloadObject(version) {
  const filename = `verilator`;
  const binPath = 'bin';
  const versionPath = version === 'latest' ? 'latest/download' : `download/v${ version }`;
  const url = `https://github.com/veryl-lang/verilator-package/releases/${ versionPath }/${ filename }.zip`;
  return {
    url,
    binPath
  };
}

module.exports = { getDownloadObject }
