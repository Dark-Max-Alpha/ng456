const Trex = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const {spawnSync} = require('child_process');
const Config = require('../config');
const chalk = require('chalk');
const axios = require('axios');

const Language = require('../language');
const Lang = Language.getString('system_stats');


if (Config.WORKTYPE == 'private') {

    Trex.addrex({pattern: 'bot', fromMe: true,  deleteCommand: false }, (async (message, match) => {
            
            var image = await axios.get ('https://telegra.ph/file/cd6032c65c27e0510ddad.jpg', {responseType: 'arraybuffer'})
       
        await message.client.sendMessage (message.jid, Buffer.from (image.data), MessageType.image, {mimetype: Mimetype.png, caption: `βΉπ₯ π­π±π°π°π»πΏπ·π°π±π°π­   *πππΈ π»π°π½πΊπ° π±π΄ππ π.π° π±πΎπ* π₯βΉ 

π±π°   *Owner & Founder - Achi Fernando ( Achiya )*

π±π°   *Language - NODE JS*

π±π°   *Sponser Team - PEARL Team*

       π’ *πππππππ ππππππ* π’

π *Kasun Ravihara* π
β» *Κα΄α΄ Ι’Κα΄α΄ΚΙͺα΄ α΄α΄κ±ΙͺΙ’ΚΙ΄α΄Κ*

π *Hiruwa* π
β» *Co Owner*

π *Thinura* π
β» *Admin Manger*

           π *α΄α΄α΄ΙͺΙ΄κ±* β’π

| π±π° *Hirusha Rukshan* |
| π±π° *Kasun Ravihara*|
| π±π° *Thinura*    |
| π±π° *Lasi*   |
| π±π° *Mr nima*     |
| π±π° *Praveen jayalath* |
| π±π° *Kindom Zanta*  | 
| π±π° *Hirusha sanjana* |

  https://api.whatsapp.com/message/STKRUWM327GCG1

   π±π° *κ°α΄Κ 24/7 Κα΄Κα΄ α΄κ±Ι’ α΄α΄* π±π°`})

    }));
}
else if (Config.WORKTYPE == 'public') {

    Trex.addrex({pattern: 'bot', fromMe: true,  deleteCommand: false }, (async (message, match) => {

          
            var image = await axios.get ('https://telegra.ph/file/cd6032c65c27e0510ddad.jpg', {responseType: 'arraybuffer'})
        await message.client.sendMessage (message.jid, Buffer.from (image.data), MessageType.image, {mimetype: Mimetype.png, caption: `βΉπ₯ π­π±π°π°π»πΏπ·π°π±π°π­   *πππΈ π»π°π½πΊπ° π±π΄ππ π.π° π±πΎπ* π₯βΉ 

π±π°   *Owner & Founder - Achi Fernando ( Achiya )*

π±π°   *Language - NODE JS*

π±π°   *Sponser Team - PEARL Team*

       π’ *πππππππ ππππππ* π’

π *Kasun Ravihara* π
β» *Κα΄α΄ Ι’Κα΄α΄ΚΙͺα΄ α΄α΄κ±ΙͺΙ’ΚΙ΄α΄Κ*

π *Hiruwa* π
β» *Co Owner*

π *Thinura* π
β» *Admin Manger*

           π *α΄α΄α΄ΙͺΙ΄κ±* β’π

| π±π° *Hirusha Rukshan* |
| π±π° *Kasun Ravihara*|
| π±π° *Thinura*    |
| π±π° *Lasi*   |
| π±π° *Mr nima*     |
| π±π° *Praveen jayalath* |
| π±π° *Kindom Zanta*  | 
| π±π° *Hirusha sanjana* |

  https://api.whatsapp.com/message/STKRUWM327GCG1

   π±π° *κ°α΄Κ 24/7 Κα΄Κα΄ α΄κ±Ι’ α΄α΄* π±π°` })

    }));
  
  Trex.addrex({pattern: 'bot', fromMe: false,  deleteCommand: false }, (async (message, match) => {

          
            var image = await axios.get ('https://telegra.ph/file/cd6032c65c27e0510ddad.jpg', {responseType: 'arraybuffer'})
        await message.client.sendMessage (message.jid, Buffer.from (image.data), MessageType.image, {mimetype: Mimetype.png, caption: `βΉπ₯ π­π±π°π°π»πΏπ·π°π±π°π­   *πππΈ π»π°π½πΊπ° π±π΄ππ π.π° π±πΎπ* π₯βΉ 

π±π°   *Owner & Founder - Achi Fernando ( Achiya )*

π±π°   *Language - NODE JS*

π±π°   *Sponser Team - PEARL Team*

       π’ *πππππππ ππππππ* π’

π *Kasun Ravihara* π
β» *Κα΄α΄ Ι’Κα΄α΄ΚΙͺα΄ α΄α΄κ±ΙͺΙ’ΚΙ΄α΄Κ*

π *Hiruwa* π
β» *Co Owner*

π *Thinura* π
β» *Admin Manger*

           π *α΄α΄α΄ΙͺΙ΄κ±* β’π

| π±π° *Hirusha Rukshan* |
| π±π° *Kasun Ravihara*|
| π±π° *Thinura*    |
| π±π° *Lasi*   |
| π±π° *Mr nima*     |
| π±π° *Praveen jayalath* |
| π±π° *Kindom Zanta*  | 
| π±π° *Hirusha sanjana* |

  https://api.whatsapp.com/message/STKRUWM327GCG1

   π±π° *κ°α΄Κ 24/7 Κα΄Κα΄ α΄κ±Ι’ α΄α΄* π±π°`  ,quoted: message.data})

    }));
}
