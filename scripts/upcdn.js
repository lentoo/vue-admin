const qiniu = require('qiniu')
const glob = require('glob')
const mime = require('mime')
const path = require('path')

const isWindow = /^win/.test(process.platform)

let pre = path.resolve(__dirname, '../dist/') + (isWindow ? '\\' : '')

const files = glob.sync(
  `${path.join(
    __dirname,
    '../dist/**/*.?(js|css|map|png|jpg|svg|woff|woff2|ttf|eot)'
  )}`
)
pre = pre.replace(/\\/g, '/')

const options = {
  scope: 'source'
}
var config = {
  qiniu: {
    accessKey: '', // accessKey
    secretKey: '', // secretKey
    bucket: options.scope,
    domain: '' // cdn 域名
  }
}
var accessKey = config.qiniu.accessKey
var secretKey = config.qiniu.secretKey

var mac = new qiniu.auth.digest.Mac(accessKey, secretKey)
var putPolicy = new qiniu.rs.PutPolicy(options)
var uploadToken = putPolicy.uploadToken(mac)
var cf = new qiniu.conf.Config({
  zone: qiniu.zone.Zone_z2
})
var formUploader = new qiniu.form_up.FormUploader(cf)
async function uploadFileCDN (files) {
  files.map(async file => {
    const key = getFileKey(pre, file)
    try {
      await uploadFIle(key, file)
      console.log(`上传成功 key: ${key}`)
    } catch (err) {
      console.log('error', err)
    }
  })
}
async function uploadFIle (key, localFile) {
  const extname = path.extname(localFile)
  const mimeName = mime.getType(extname)
  const putExtra = new qiniu.form_up.PutExtra({ mimeType: mimeName })
  return new Promise((resolve, reject) => {
    formUploader.putFile(uploadToken, key, localFile, putExtra, function (
      respErr,
      respBody,
      respInfo
    ) {
      if (respErr) {
        reject(respErr)
      }
      resolve({ respBody, respInfo })
    })
  })
}
function getFileKey (pre, file) {
  if (file.indexOf(pre) > -1) {
    const key = file.split(pre)[1]
    return key.startsWith('/') ? key.substring(1) : key
  }
  return file
}

(async () => {
  console.time('上传文件到cdn')
  await uploadFileCDN(files)
  console.timeEnd('上传文件到cdn')
})()
