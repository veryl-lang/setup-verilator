const path = require('path');
const core = require('@actions/core');
const tc = require('@actions/tool-cache');
const exec = require('@actions/exec');
const { getDownloadObject } = require('./lib/utils');
const { getImage } = require('./lib/utils');

async function setup() {
  try {
    // Get version of tool to be installed
    const version = core.getInput('version');

    // Get OS image
    const image = await getImage();

    if (image === 'unknown') {
      core.setFailed('Unsupported platform');
    } else if (image === 'macos') {
      if (version === 'latest') {
        await exec.exec('brew install verilator');
      } else {
        core.setFailed('The latest version is only supported on macOS');
      }
    } else {
      // Download the specific version of the tool, e.g. as a tarball/zipball
      const download = getDownloadObject(version, image);
      const pathToTarball = await tc.downloadTool(download.url);

      // Extract the tarball/zipball onto host runner
      const extract = download.url.endsWith('.zip') ? tc.extractZip : tc.extractTar;
      const pathToCLI = await extract(pathToTarball);

      // Expose the tool by adding it to the PATH
      core.addPath(path.join(pathToCLI, download.binPath));

      if ((image === 'ubuntu-22.04') || (image === 'ubuntu-24.04')) {
        await exec.exec('sudo apt-get install -y ccache mold');
      }
    }
  } catch (e) {
    core.setFailed(e);
  }
}

module.exports = setup

if (require.main === module) {
  setup();
}
