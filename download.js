const templateUrl =
  "https://codeload.github.com/beikeliu/react-admin-template/zip/refs/heads/master";
const download = require("download-git-repo");

function downloadGit(url = templateUrl, target = "temp") {
  return new Promise((resolve, reject) => {
    download(`direct:${url}`, target, {}, (err) => {
      err ? reject(err) : resolve(true);
    });
  });
}

module.exports = {
  downloadGit,
};
