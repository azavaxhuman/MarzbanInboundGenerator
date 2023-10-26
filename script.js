function protocolDetails() {
  let MainForm = document.getElementById('MainDetails')
  let protocol = MainForm.elements.protocol.value
  let transmission = MainForm.elements.transmission.value
  let security = MainForm.elements.security.value
  let headertype = document.getElementById('header').value
  let path = document.getElementById('path').value

  const protocolMapping = {
    vless: 1,
    vmess: 2,
    trojan: 5
  }
  const transsportMapping = {
    tcp: 1,
    ws: 2,
    grpc: 5
  }
  const securityMapping = {
    tls: 1,
    xtls: 2,
    reality: 5,
    none: 0
  }
  const headerMapping = {
    None: 0,
    http: 1
  }

  var p = protocolMapping[protocol]
  var t = transsportMapping[transmission]
  var s = securityMapping[security]
  var h = headerMapping[headertype]
  var pt = p.toString() + t.toString()
  var pts = p.toString() + t.toString() + s.toString()

  //دریافت متغیر های فرم ها

  let port = document.getElementById('port').value;
  let name = document.getElementById('inboundname').value

  const button = document.getElementById("random");



  let pubkey = document.getElementById('pubkey').value
  let pvkey = document.getElementById('pvkey').value
  let sni = document
    .getElementById('sni')
    .value.replace(/(http:\/\/|https:\/\/|\/)/g, '')

  var acceptProxyProtocol = document.getElementById(
    'acceptProxyProtocol'
  ).checked
  var headerOnOff = document.getElementById('headerOnOff').checked
  h == 0
    ? (document.getElementById('headerOnOffDiv').style.display = 'none')
    : (document.getElementById('headerOnOffDiv').style.display = 'block')

  t == 5
    ? (document.getElementById('acceptProxyProtocols').style.display = 'none')
    : (document.getElementById('acceptProxyProtocols').style.display = 'block')
  headerOnOff == true
    ? (document.getElementById('sarbarg').style.display = 'block')
    : (document.getElementById('sarbarg').style.display = 'none')
  if (h == 0) {
    headerOnOff = false

  }
  else {

    headerOnOff = document.getElementById('headerOnOff').checked;

  }
  var userdest = document.getElementById('dest').value;

  var dest = userdest.includes(":443") ? userdest : userdest + ":443";

  let ServerNames = document.getElementById('ServerNames').value
  let ShortIds = document.getElementById('ShortIds').value
  let SpiderX = document.getElementById('SpiderX').value
  let PublicKey = document.getElementById('PublicKey').value
  let PrivateKey = document.getElementById('PrivateKey').value
  // let tls = document.getElementById("tLS");
  let publickeyStatus = document.getElementById('publickeyStatusOnOff').checked
  publickeyStatus == true
    ? (document.getElementById('PublicKeyDiv').style.display = 'block')
    : (document.getElementById('PublicKeyDiv').style.display = 'none')
  let TlsForm = document.getElementById('Tls')
  let RealityForm = document.getElementById('RealityForm')
  //نمایان شدن یا نشدن بخش هدر تایپ

  document.getElementById('protocolDetails').style.display = 'block'
  document.getElementById('divheader').style.display =
    t === 5 ? 'none' : 'block'
  document.getElementById('http_header_Fields').style.display =
    h === 0 ? 'none' : 'block'

  //نمایان شدن کانفیگ ها در کنار هم

  if (pt == 11 || pt == 15 || pt == 51 || pt == 55) {
    // reality.style.display = "block";
    // xtls.style.display = "block";
    var idsecurityDiv1 = document.getElementById('idsecurity')

    // محتوای جدیدی که می‌خواهید جایگزین شود
    var newText1 = `<div id="idsecurity">
        <label for="security">Security</label>
        <select name="security" onchange="protocolDetails()">
            <option value="none">none</option>
            <option value="tls" id="tls">tls</option>
            <option value="xtls" id="xtls">xtls</option>
            <option value="reality" id="reality">reality</option>
        </select>
    </div>`

    // جایگزینی محتوای عنصر با متن جدید
    idsecurityDiv1.innerHTML = newText1
    var securitySelect1 = document.querySelector('select[name="security"]')
    securitySelect1.value = security

    if (pt == 15 || pt == 55) {
      var idsecurityDiv2 = document.getElementById('idsecurity')

      // محتوای جدیدی که می‌خواهید جایگزین شود
      var newText2 = `<div id="idsecurity">
            <label for="security">Security</label>
            <select name="security" onchange="protocolDetails()">
                <option value="none">none</option>
                <option value="tls" id="tls">tls</option>
                <option value="reality" id="reality">reality</option>
            </select>
        </div>`

      // جایگزینی محتوای عنصر با متن جدید
      idsecurityDiv2.innerHTML = newText2
      var securitySelect2 = document.querySelector('select[name="security"]')
      securitySelect2.value = security
    }
  } else if (p == 2) {
    var idsecurityDiv4 = document.getElementById('idsecurity')

    // محتوای جدیدی که می‌خواهید جایگزین شود
    var newText4 = `<div id="idsecurity">
        <label for="security">Security</label>
        <select name="security" onchange="protocolDetails()">
            <option value="none">none</option>
            <option value="tls" id="tls">tls</option>
        </select>
    </div>`
    idsecurityDiv4.innerHTML = newText4

    var securitySelect4 = document.querySelector('select[name="security"]')
    if (security == 'reality' || security == 'xtls') {
      security = 'none'
    }

    securitySelect4.value = security
  } else {
    var idsecurityDiv3 = document.getElementById('idsecurity')

    // محتوای جدیدی که می‌خواهید جایگزین شود
    var newText3 = `<div id="idsecurity">
        <label for="security">Security</label>
        <select name="security" onchange="protocolDetails()">
            <option value="none">none</option>
            <option value="tls" id="tls">tls</option>
        </select>
    </div>`
    idsecurityDiv3.innerHTML = newText3
    var securitySelect3 = document.querySelector('select[name="security"]')
    if (security == 'reality' || security == 'xtls') {
      security = 'none'

      protocolDetails()
    }

    securitySelect3.value = security
  }

  //نمایان شدن فیلد های ثانویه
  //کانفیگ های TLS دار

  if (fieldCounter > 0) {
    var fields = document.querySelectorAll('.field')
  }

  if (s == 1) {
    DisplayBlock(TlsForm, '1')
    DisplayBlock(RealityForm, '0')

    BuildTLS(
      pts,
      t,
      s,
      protocol,
      transmission,
      security,
      name,
      port,
      sni,
      pubkey,
      pvkey,
      h,
      path,
      fields,
      acceptProxyProtocol,
      headerOnOff
    )
  }
  if (s == 2) {
    DisplayBlock(TlsForm, '1')
    DisplayBlock(RealityForm, '0')
    BuildTLS(
      pts,
      t,
      s,
      protocol,
      transmission,
      security,
      name,
      port,
      sni,
      pubkey,
      pvkey,
      h,
      path,
      fields,
      acceptProxyProtocol,
      headerOnOff
    )
  }
  if (s == 5) {
    DisplayBlock(TlsForm, '0')
    DisplayBlock(RealityForm, '1')
    BuildReality(
      pts,
      t,
      s,
      protocol,
      transmission,
      security,
      name,
      port,
      dest,
      ServerNames,
      ShortIds,
      SpiderX,
      PublicKey,
      PrivateKey,
      h,
      path,
      fields,
      acceptProxyProtocol,
      headerOnOff,
      publickeyStatus
    )
  }
  if (s == 0) {
    DisplayBlock(TlsForm, '0')
    DisplayBlock(RealityForm, '0')
    BuildTLS(
      pts,
      t,
      s,
      protocol,
      transmission,
      security,
      name,
      port,
      sni,
      pubkey,
      pvkey,
      h,
      path,
      fields,
      acceptProxyProtocol,
      headerOnOff
    )
  }
}

////////////////////////////////////////

const addButton = document.getElementById('addFieldsButton')
const removeButton = document.getElementById('removeFieldsButton')
const targetDiv = document.getElementById('targetDiv')

const dataCollection = [] // آرایه برای جمع‌آوری اطلاعات

var fieldCounter = 0 // شمارنده برای ایجاد شناسه‌های یکتا برای ورودی‌ها
var i = 0
function addFields(event) {
  document.getElementById('removeFieldsButton')
  event.preventDefault()

  const inputContainer = document.createElement('div')
  inputContainer.className = 'input-container'

  const input1 = document.createElement('input')
  input1.type = 'text'
  input1.value = `Host${fieldCounter + 1}`
  input1.id = `field1_${fieldCounter + 1}`
  input1.placeholder = 'فیلد اول'
  input1.classList.add('field') // اضافه کردن کلاس "field" به المان

  const input2 = document.createElement('input')
  input2.type = 'text'
  input2.id = `field2_${fieldCounter + 1}`
  input2.value = 'Xray.com'
  input2.placeholder = 'فیلد دوم'
  input2.classList.add('field') // اضافه کردن کلا
  const hr1 = document.createElement('hr')
  hr1.id = 'hr1'
  inputContainer.appendChild(input1)
  inputContainer.appendChild(input2)
  inputContainer.appendChild(hr1)
  targetDiv.appendChild(inputContainer)

  fieldCounter++ // افزایش شمارنده برای ایجاد شناسه یونیک

  i++
  if (i == fieldCounter && fieldCounter == 0) {
    document.getElementById('removeFieldsButton').style.display = 'none'
  } else {
    document.getElementById('removeFieldsButton').style.display = 'block'
  }
  console.log('########   i   ' + i)
  console.log('###########  count   ' + fieldCounter)
}

function removeFields(event) {
  event.preventDefault()

  const inputContainers = document.querySelectorAll('.input-container')
  if (inputContainers.length > 0) {
    const lastInputContainer = inputContainers[inputContainers.length - 1]
    targetDiv.removeChild(lastInputContainer)
    fieldCounter-- // کاهش شمارنده به ازای حذف یک جفت فیلد
    i--
    if (i == fieldCounter && fieldCounter == 0) {
      document.getElementById('removeFieldsButton').style.display = 'none'
    } else {
      document.getElementById('removeFieldsButton').style.display = 'block'
    }
  }
}

function toggleRemoveButtonVisibility() {
  const inputContainers = document.querySelectorAll('.input-container')
  if (inputContainers.length <= minFields) {
    removeButton.style.display = 'none'
  } else {
    removeButton.style.display = 'block'
  }
}
addButton.addEventListener('click', addFields)
removeButton.addEventListener('click', removeFields)
// هنگامی که اطلاعات وارد شود، اطلاعات به طور مستقیم به آرایه افزوده می‌شوند

/////////////////////////

function DisplayBlock(objectblock, x) {
  x === '0'
    ? (objectblock.style.display = 'none')
    : (objectblock.style.display = 'block')
}

function BuildTLS(
  pts,
  t,
  s,
  protocol,
  transmission,
  security,
  name,
  port,
  sni,
  pubkey,
  pvkey,
  h,
  path,
  fields,
  acceptProxyProtocol,
  headerOnOff
) {
  var pts = pts.toString()
  var t = t.toString()
  var s = s.toString()
  var protocol = protocol.toString()
  var transmission = transmission.toString()
  var security = security.toString()
  var tag = name.toString()
  var port = port.toString()
  var sni = sni.toString()
  var pubkey = pubkey.toString()
  var pvkey = pvkey.toString()
  var h = h.toString()
  var n = '\n'
  var acceptProxyProtocol = acceptProxyProtocol
  var headerOnOff = headerOnOff
  var fields = fields
  var path = path.toString()
  document.getElementById('final').style.display = 'block'
  var final = document.getElementById('final')
  var listen = '"listen": "0.0.0.0",'

  if (h == 1 && fieldCounter > 0 && headerOnOff) {
    if (fields.length > 0) {
      var result = '' // متغیر برای ذخیره نهایی
      var justhosts = ''
      for (
        var k = fields.length + 1 - fields.length - 1;
        k < fields.length;
        k += 2
      ) {
        var key = fields[k].value
        var value = fields[k + 1].value

        // اضافه کردن مقدار template به متغیر result
        result += `"${key}": "${value}"`
        justhosts += `"${value}"`
        // اگر نهایت رشته نیست، یک کاما و یک اینتر (یا خط جدید) اضافه کنید
        if (k < fields.length - 2) {
          result += ',\n'
          justhosts += ','
        }
      }
    }
  }
  if (t == 1) {
    if (h == 0 && headerOnOff == false) {
      var settings = `"tcpSettings": {
                "acceptProxyProtocol": ${acceptProxyProtocol},
                "header": {
                    "type": "none"
                }
            },`
    } else if (h == 1 && headerOnOff == false) {
      var settings = `"tcpSettings": {
                "acceptProxyProtocol":  ${acceptProxyProtocol},
                "header": {
                    "type": "http",
                    "request": {
                        "path": ["${path}"],
                        "User-Agent": [
                            "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/53.0.2785.143 Safari/537.36",
                            "Mozilla/5.0 (iPhone; CPU iPhone OS 10_0_2 like Mac OS X) AppleWebKit/601.1 (KHTML, like Gecko) CriOS/53.0.2785.109 Mobile/14A456 Safari/601.1.46"
                          ],
                          "Accept-Encoding": ["gzip, deflate"],
                          "Connection": ["keep-alive"],
                          "Pragma": "no-cache"
                }
            }},`
    } else {
      var settings = `"tcpSettings": {
                "acceptProxyProtocol":  ${acceptProxyProtocol},
                "header": {
                    "type": "http",
                    "request": {
                        "path": ["${path}"],
                        "headers": {
                            "Host": [${justhosts}] ,
                            "User-Agent": [
                                "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/53.0.2785.143 Safari/537.36",
                                "Mozilla/5.0 (iPhone; CPU iPhone OS 10_0_2 like Mac OS X) AppleWebKit/601.1 (KHTML, like Gecko) CriOS/53.0.2785.109 Mobile/14A456 Safari/601.1.46"
                              ],
                              "Accept-Encoding": ["gzip, deflate"],
                              "Connection": ["keep-alive"],
                              "Pragma": "no-cache"

                    }
                }
            }},`
    }
  } else if (t == 2) {
    if (h == 0 && headerOnOff == false) {
      var settings = `"wsSettings": {
                "acceptProxyProtocol": ${acceptProxyProtocol},
                "path": "${path}",
                "header": {
                    "type": "none"
                }
                },`
    } else if (h == 1 && headerOnOff == false) {
      var settings = `"wsSettings": {
                "acceptProxyProtocol": ${acceptProxyProtocol},
                "path": "${path}",
                "header": {
                    "type": "none"
                }
                },`
    } else {
      var settings = `"wsSettings": {
"acceptProxyProtocol": ${acceptProxyProtocol},
"path": "${path}",
"headers": {
    "Host": [${justhosts}] 
           }
},`
    }
  } else {
    if (s == 0) {
      var settings = `"grpcSettings": {
                "serviceName": "${tag}"
            },`
    } else {
      var settings = `"grpcSettings": {
            "serviceName": "${sni}"
        },`
    }
  }
  if (s == 0) {
    final.value = `{
"tag": "${tag}",
"listen": "0.0.0.0",
"port": ${port},
"protocol": "${protocol}",
"settings": {
"clients": []
},
"streamSettings": {
"network": "${transmission}",
${settings}
"security": "none"
},
"sniffing": {
 "enabled": true,
"destOverride": [
"http",
"tls"
            ]
        }
    },`
  }

  if (s > 0) {
    final.value =
      `{
"tag": "` +
      tag +
      `",
"listen": "0.0.0.0",
"port": ` +
      port +
      `,
"protocol": "` +
      protocol +
      `",
"settings": {
"clients": [],
"decryption": "none"
},
"streamSettings": {
"network": "` +
      transmission +
      `",
` +
      settings +
      `
"security": "` +
      security +
      `",
"tlsSettings": {
    "serverName": "` +
      sni +
      `",
    "certificates": [
        {
            "ocspStapling": 3600,
            "certificateFile": "` +
      pubkey +
      `",
            "keyFile": "` +
      pvkey +
      `"
        }
    ],
    "rejectUnknownSni": false,
    "allowInsecure": false,
    "alpn": ["h2", "http/1.1"],
    "minVersion": "1.2",
    "maxVersion": "1.3",
    "cipherSuites": "TLS_ECDHE_ECDSA_WITH_CHACHA20_POLY1305_SHA256:TLS_ECDHE_RSA_WITH_CHACHA20_POLY1305_SHA256:TLS_ECDHE_ECDSA_WITH_AES_256_GCM_SHA384:TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384:TLS_ECDHE_ECDSA_WITH_AES_128_GCM_SHA256:TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256"
}
}
},`
  }
}

function BuildReality(pts, t, s, protocol, transmission,
  security,
  name,
  port,
  dest,
  ServerNames,
  ShortIds,
  SpiderX,
  PublicKey,
  PrivateKey,
  h,
  path,
  fields,
  acceptProxyProtocol,
  headerOnOff,
  publickeyStatus
) {
  var pts = pts.toString()
  var t = t.toString()
  var s = s.toString()
  var protocol = protocol.toString()
  var transmission = transmission.toString()
  var security = security.toString()
  var tag = name.toString()
  var port = port.toString()
  var dest = dest.toString()
  var ServerNames = ServerNames.toString()
  var ArrayServerNames = ServerNames.split(',')
  var publickeyStatus = publickeyStatus

  // حذف فضاهای اضافی از هر کلمه و افزودن گیومه به اطراف آن
  for (var i = 0; i < ArrayServerNames.length; i++) {
    ArrayServerNames[i] = ArrayServerNames[i].trim()
    if (ArrayServerNames[i].indexOf(' ') === -1) {
      ArrayServerNames[i] = '"' + ArrayServerNames[i] + '"'
    }
  }

  // ایجاد یک رشته نهایی با کاما جداکننده
  var finalServerNames = ArrayServerNames.join(',')

  var ShortIds = ShortIds.toString()
  var SpiderX = SpiderX.toString()
  var PublicKey = PublicKey.toString()
  var PrivateKey = PrivateKey.toString()
  var h = h.toString()
  var acceptProxyProtocol = acceptProxyProtocol
  var headerOnOff = headerOnOff
  var fields = fields
  var path = path.toString()
  document.getElementById('final').style.display = 'block'
  var final = document.getElementById('final')
  if (publickeyStatus) {
    var Pub = `"publicKey": "${PublicKey}",`
  } else {
    Pub = ''
  }
  //حالتی که ریکوئست هدر فعال است
  if (h == 1 && fieldCounter > 0 && headerOnOff) {
    if (fields.length > 0) {
      var result = '' // متغیر برای ذخیره نهایی
      var justhosts = ''
      for (
        var k = fields.length + 1 - fields.length - 1;
        k < fields.length;
        k += 2
      ) {
        var key = fields[k].value
        var value = fields[k + 1].value

        // اضافه کردن مقدار template به متغیر result
        result += `"${key}": "${value}"`
        justhosts += `"${value}"`
        // اگر نهایت رشته نیست، یک کاما و یک اینتر (یا خط جدید) اضافه کنید
        if (k < fields.length - 2) {
          result += ',\n'
          justhosts += ','
        }
      }
    }
  }
  if (t == 1) {
    if (h == 0 && headerOnOff == false) {
      var settings = `"tcpSettings": {
                "acceptProxyProtocol": ${acceptProxyProtocol},
                "header": {
                    "type": "none"
                }
            }},`
    } else if (h == 1 && headerOnOff == false) {
      var settings = `"tcpSettings": {
                "acceptProxyProtocol":  ${acceptProxyProtocol},
                "header": {
                    "type": "http",
                    "request": {
                        "path": ["${path}"],
                        "User-Agent": [
                            "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/53.0.2785.143 Safari/537.36",
                            "Mozilla/5.0 (iPhone; CPU iPhone OS 10_0_2 like Mac OS X) AppleWebKit/601.1 (KHTML, like Gecko) CriOS/53.0.2785.109 Mobile/14A456 Safari/601.1.46"
                          ],
                          "Accept-Encoding": ["gzip, deflate"],
                          "Connection": ["keep-alive"],
                          "Pragma": "no-cache"
                }
            }},`
    } else {
      var settings = `"tcpSettings": {
                "acceptProxyProtocol":  ${acceptProxyProtocol},
                "header": {
                    "type": "http",
                    "request": {
                        "path": ["${path}"],
                        "headers": {
                            "Host": [${justhosts}] ,
                            "User-Agent": [
                                "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/53.0.2785.143 Safari/537.36",
                                "Mozilla/5.0 (iPhone; CPU iPhone OS 10_0_2 like Mac OS X) AppleWebKit/601.1 (KHTML, like Gecko) CriOS/53.0.2785.109 Mobile/14A456 Safari/601.1.46"
                              ],
                              "Accept-Encoding": ["gzip, deflate"],
                              "Connection": ["keep-alive"],
                              "Pragma": "no-cache"

                    }
                }
            }
          
          },`
    }

    final.value = `{
"tag": "${tag}",
"listen": "0.0.0.0",
"port": ${port},
"protocol": "${protocol}",
"settings": {
"clients": [],
"decryption": "none"
},
"streamSettings": {
"network": "tcp",
${settings}
"security": "reality",
"realitySettings": {
"show": false,
"dest": "${dest}",
"xver": 0,
"serverNames": [
${finalServerNames}
],
"privateKey": "${PrivateKey}",
${Pub}
"spiderX": "${SpiderX}",
"shortIds": [
"${ShortIds}"
]
}},
"sniffing": {
"enabled": true,
"destOverride": ["http","tls"]
}
},`

    printTheJSONInPrettyFormat()
  } else if (t == 5) {
    var settings = `"grpcSettings": {
      "serviceName": "${tag}"
    },`

    final.value = `{
"tag": "${tag}",
"listen": "0.0.0.0",
"port": ${port},
"protocol": "${protocol}",
"settings": {
"clients": [],
"decryption": "none"
},
"streamSettings": {
"network": "grpc",
${settings}
"security": "reality",
"realitySettings": {
"show": false,
"dest": "${dest}",
"xver": 0,
"serverNames": [
${finalServerNames}
],
"privateKey": "${PrivateKey}",
${Pub}
"spiderX": "${SpiderX}",
"shortIds": [
"${ShortIds}"
]
}},
"sniffing": {
"enabled": true,
"destOverride": ["http","tls"]
}
},`
  }
}
const final = document.getElementById('final')
const copyButton = document.getElementById('sutton')

copyButton.addEventListener('click', function () {
  // انجام عملیات کپی متن از textarea
  final.select() // انتخاب متن
  document.execCommand('copy') // انجام عملیات کپی

  // دیگر عملیات یا نمایش پیام موفقیت انجام داده شود
})

document.getElementById('youtube').addEventListener('click', function () {
  window.open(
    'https://www.youtube.com/channel/UCDBnd7heT6Gz6QgqtxvtuEw/',
    '_blank'
  )
})

document.getElementById('github').addEventListener('click', function () {
  window.open('https://github.com/azavaxhuman', '_blank')
})

document.getElementById('github1').addEventListener('click', function () {
  window.open('https://github.com/Gozargah/Marzban', '_blank')
})
const button = document.getElementById("random");

function randomize() {
  const randomValue = generateRandomString(4);
  const newValue = randomValue;
  document.getElementById('inboundname').value = newValue;
  protocolDetails();
};

function generateRandomString(length) {
  const charset = "ABCDEFtuvwxyz0123456789";
  let result = "";
  const charsetLength = charset.length;

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charsetLength);
    result += charset.charAt(randomIndex);
  }

  return result;
}