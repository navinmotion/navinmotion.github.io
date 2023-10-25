const posts = [];
const images = [
  'https://lh3.googleusercontent.com/drive-viewer/AK7aPaAR43YJriWOB4CsvfBbK765_atdXwsWidZw_cntewdUvepQUQPNC-_ftGF-ZvxleszZLSKGxdrPKplhCbUsLYBWItxT1A=s1600',
  'https://lh3.googleusercontent.com/drive-viewer/AK7aPaCFUCYcWAafbg0T-9ZnSvssH-ktHKIGrFZCxIfCwcciaikGraNLyPQ238i5rAq2rh5tw5_iqE2nhes72mhWNK_ZirbTMg=s2560',
  'https://lh3.googleusercontent.com/drive-viewer/AK7aPaDSPPzhGNHEQthLo8xPxnJGP0KrWJTRi_yl4FnN40qXI3m9cGQkOeT696IyqSvdw-5KkGiIlOR1oKPqqjTI7ObS-WMXbw=s1600',
  'https://lh3.googleusercontent.com/drive-viewer/AK7aPaDSOUR1IMVqvVG7mGzo_1_CYo0ZtKYaIx_U6YtO-JVO4WRl29MeXoZyUiC-x18q688UJTfNQv7vC-UT5QUFMKig_bbKIA=s2560',
  'https://lh3.googleusercontent.com/drive-viewer/AK7aPaChoB2FyErB14I_A2pmrlRpO47OM9K_CmsafSGpC0y_fpCjO304ggRhHR6N_ziS7127XzSO7gnseKPDxBrOqZx4rkOA9w=s2560',
  'https://lh3.googleusercontent.com/drive-viewer/AK7aPaAPHgDeTyds8VllvWcjrHuDmGCZaVDe1cirtLSXYvP6YPkYM9-alPW7KOzMVkTxry5tLW8YIgLkmpP04nK6-AKwBQLIHw=s1600',
  'https://lh3.googleusercontent.com/drive-viewer/AK7aPaBM1r8EGKAjs7Ejtx8gcqEhDInYlhEHm9nNuSCOwWCuItZQCFS3V60LvZ_rgDc8XDsq-uk1FTYEqbbsSEpXK4ZmFxwEgw=s1600',
  'https://lh3.googleusercontent.com/drive-viewer/AK7aPaAqh-eYJHDuAAy6JeHsZ_FIQYBVsYc9h01_NmoDrxuWlTQzRLto4amZ_CjrmYaiUaazaEU1zFsjrZ5QP_aGyZAB7Rahvw=s1600',
  'https://lh3.googleusercontent.com/drive-viewer/AK7aPaCaWII1J2Zoes8-92lmJGQHgRlwYBLIPCWmLstNuBZntJubdXDJhqim9J0EBZ-JS8oMJYHxbnPCONXFFHm28czr5-k4KA=s2560',
  'https://lh3.googleusercontent.com/drive-viewer/AK7aPaBkTnWjBuaDb4q2jR8ATVmu2DWJKp6Q87B7BjnllrAXc1JvA1U2OToE-QB5tY69HvtIwbr_hpbpf5AANUU27EKoFO6cQQ=s1600',
  'https://lh3.googleusercontent.com/drive-viewer/AK7aPaAUulrbpnDTzNuwnvztmzWohpnNtUsECSJRopk08OQyTEFgZH7kbTYziMnLZi8wllLRDNBG2XNru8XYzu3zMvckT7SJbA=s1600',
];


const postContents = [
  // pop-up info list for image 1
  {
    parameter:'TXT2IMG + HI-RES + CONTROLNET',
    class: 'parameter',
    heading: ['Prompt', 'Negative Prompt', 'Sampler', 'Model', 'CFG scale', 'Strength', 'Steps', 'Clip skip'
      ],
    content: [
        'a beautiful Indian woman wearing saree, looking back, going to temple, UHD, highly detailed,sharp, intricate, professional, masterpiece, cinematic composition, art by Raja Ravi Varma',
        '&lt;baddream&gt;',
        'DMP++ 2M Karras',
        'dreamshaper_v6.31.ckpt',
        '7.5', '1.0', '30', '2'
      ],
    class: 'popup-content',
  },
  
  // pop-up info list for image 2
  {
    parameter:'TXT2IMG',
    class: 'parameter',
    heading: ['Prompt', 'Negative Prompt', 'Sampler', 'Model', 'CFG scale', 'Strength', 'Steps', 'Clip skip'
              ],
    content: [
            'establishing shot of small modern osaka house, pitched roof, trending on pixiv, beautiful gouache painting by hayao miyazaki, by studio ghibli, by atey ghailan, by james jean, trending on artstation, unreal engine 5, cinematic lighting, vivid colours',
            '&lt;bad_prompt&gt;',
            'DMP++ 2M Karras',
            'sd_v1.5_f16.ckpt',
            '10', '1.0', '30', '1'
          ],
    class: 'popup-content',
  },
  
  // pop-up info list for image 3
  {
    parameter:'TXT2IMG + HI-RES',
    class: 'parameter',
    heading: ['Prompt', 'Negative Prompt', 'Sampler', 'Model', 'CFG scale', 'Strength', 'Steps', 'Clip skip'
              ],
    content: [
          'fashion photography portrait of indian girl with blue hair, in lush jungle with flowers, 3d render, cgi, symetrical, octane render, 35mm, bokeh, 9:16, (intricate details:1.12), hdr, (intricate details, hyperdetailed:1.15), (natural skin texture, hyperrealism, soft light, sharp:1.2), detailed, sunlight passing through foliage, india',
          '&lt;baddream&gt;',
          'DPM++ SDE Karras',
          'dreamshaper_v6.31.ckpt',
          '9.0', '1.0', '30', '2'
        ],
    class: 'popup-content',
  },
  
  // pop-up info list for image 4
  {
    parameter:'TXT2IMG',
    class: 'parameter',
    heading: ['Prompt', 'Negative Prompt', 'Sampler', 'Model', 'CFG scale', 'Strength', 'Steps', 'Clip skip'
              ],
    content: [
          'establishing shot of small modern osaka house, pitched roof, trending on pixiv, beautiful gouache painting by hayao miyazaki, by studio ghibli, by atey ghailan, by james jean, trending on artstation, unreal engine 5, cinematic lighting',
          'ugly, tiling, poorly drawn hands, poorly drawn feet, poorly drawn face, out of frame, bad composition, mutation, mutated, extra limbs, extra legs, extra arms, disfigured, deformed, cross-eye, body out of frame, blurry, bad art, bad anatomy, blurred, text, watermark, grainy',
          'DPM++ 2M Karras',
          'sd_v1.5_f16.ckpt',
          '10', '1.0', '30', '2'
        ],
    class: 'popup-content',
  },
  
  // pop-up info list for image 5
  {
    parameter:'TXT2IMG',
    class: 'parameter',
    heading: ['Prompt', 'Negative Prompt', 'Sampler', 'Model', 'CFG scale', 'Strength', 'Steps', 'Clip skip'
              ],
    content: [
          'establishing shot of small modern osaka house, pitched roof, trending on pixiv, beautiful gouache painting by hayao miyazaki, by studio ghibli, by atey ghailan, by james jean, trending on artstation, unreal engine 5, cinematic lighting',
          'ugly, tiling, poorly drawn hands, poorly drawn feet, poorly drawn face, out of frame, bad composition, mutation, mutated, extra limbs, extra legs, extra arms, disfigured, deformed, cross-eye, body out of frame, blurry, bad art, bad anatomy, blurred, text, watermark, grainy',
          'DPM++ 2M Karras',
          'inkpunk_v2_f16.ckpt',
          '11', '1.0', '30', '1'
        ],
    class: 'popup-content',
  },
  
  // pop-up info list for image 6
  {
    parameter:'TXT2IMG + HI-RES + CONTROLNET',
    class: 'parameter',
    heading: ['Prompt', 'Negative Prompt', 'Sampler', 'Model', 'CFG scale', 'Strength', 'Steps', 'Clip skip'
              ],
    content: [
          'a side angle view of an Indian sadhu, looking to sunrise, doing namaskar in a holy river, UHD, highly detailed, sharp, intricate, concept art, professional, masterpiece, unreal engine, vivid colours, bokeh, cinematic composition, by Raja Ravi Varma',
          '&lt;baddream&gt;',
          'DPM++ 2M Karras',
          'dreamshaper_v6.31.ckpt',
          '7.5', '1.0', '25', '1'
        ],
    class: 'popup-content',
  },
  
  // pop-up info list for image 7
  {
    parameter:'TXT2IMG + HI-RES',
    class: 'parameter',
    heading: ['Prompt', 'Negative Prompt', 'Sampler', 'Model', 'CFG scale', 'Strength', 'Steps', 'Clip skip'
              ],
    content: [
          'ghibli style fashion photography portrait of indian girl with blue hair, in lush jungle with flowers, 3d render, cgi, symetrical, octane render, 35mm, bokeh, 9:16, (intricate details:1.12), hdr, (intricate details, hyperdetailed:1.15), (natural skin texture, hyperrealism, soft light, sharp:1.2), detailed, sunlight passing through foliage, india',
          '&lt;baddream&gt;',
          'DPM++ 2M Karras',
          'dreamshaper_v6.31.ckpt',
          '9.0', '1.0', '25', '2'
        ],
    class: 'popup-content',
  },
  
  // pop-up info list for image 8
  {
    parameter:'TXT2IMG',
    class: 'parameter',
    heading: ['Prompt', 'Negative Prompt', 'Sampler', 'Model', 'CFG scale', 'Strength', 'Steps', 'Clip skip'
              ],
    content: [
          'nvinkpunk an epic majestic Indian god shiva, masterpiece, cinematic composition, dramatic scene, beautiful, aesthetic, lighting, concept art, sharp, highly detailed, 8k, trending',
          'ugly, tiling, poorly drawn hands, poorly drawn feet, poorly drawn face, out of frame, bad composition, mutated, extra limbs, extra legs, extra arms, disfigured, deformed, cross-eye, body out of frame, blurry, bad art, bad anatomy, text, watermark, grainy',
          'DPM++ 2M Karras',
          'inkpunk_v2_f16.ckpt',
          '7.5', '1.0', '25', '1'
        ],
    class: 'popup-content',
  },
  
  // pop-up info list for image 9
  {
    parameter:'TXT2IMG',
    class: 'parameter',
    heading: ['Prompt', 'Negative Prompt', 'Sampler', 'Model', 'CFG scale', 'Strength', 'Steps', 'Clip skip'
              ],
    content: [
          'professional oil painting of establishing shot of canal surrounded by verdant blue modern curved rustic greek tiled buildings, professional majestic oil painting by ed blinkey, atey ghailan, studio ghibli, by jeremy mann, greg manchess, antonio moro, trending on artstation, trending on cgsociety, volumetric lighting, dramatic lighting, dawn, water, canoes, refraction',
          'ugly, tiling, poorly drawn hands, poorly drawn feet, poorly drawn face, out of frame, bad composition, mutated, extra limbs, extra legs, extra arms, disfigured, deformed, cross-eye, blurry, bad art, bad anatomy, grainy, text, watermarks, logos',
          'DPM++ 2M Karras',
          'sd_v1.5_f16.ckpt',
          '7.5', '1.0', '25', '1'
        ],
    class: 'popup-content',
  },
  
  // pop-up info list for image 10
  {
    parameter:'TXT2IMG + HI-RES + CONTROLNET',
    class: 'parameter',
    heading: ['Prompt', 'Negative Prompt', 'Sampler', 'Model', 'CFG scale', 'Strength', 'Steps', 'Clip skip'
              ],
    content: [
          'ghibli style a wide shot of Indian boy wearing dhoti kurta, amazed face expression, (Indian village in background:1.2), Cannon 35mm camera, UHD, highly detailed, sharp, intricate, concept art, professional, masterpiece, vivid colours, cinematic composition, by Raja Ravi Varma',
          'ugly, tiling, poorly drawn hands, poorly drawn feet, poorly drawn face, out of frame, bad composition, mutated, extra limbs, extra legs, extra arms, disfigured, deformed, cross-eye, body out of frame, blurry, bad art, bad anatomy, text, watermark, grainy',
          'DPM++ 2M Karras',
          'ghibli_v1_f16.ckpt',
          '7.5', '1.0', '30', '1'
        ],
    class: 'popup-content',
  },
  
  // pop-up info list for image 11
  {
    parameter:'TXT2IMG + HI-RES',
    class: 'parameter',
    heading: ['Prompt', 'Negative Prompt', 'Sampler', 'Model', 'CFG scale', 'Strength', 'Steps', 'Clip skip'
              ],
    content: [
          'A Ghibli style Indian woman, hot, seductive, erotic,athletic body, subtle smile, traditional rural home in background, art by Raja Ravi Varma',
          '&lt;baddream&gt;',
          'DPM++ SDE Karras',
          'dreamshaper_v6.31.ckpt',
          '9.0', '1.0', '30', '2'
        ],
    class: 'popup-content',
  },
  
];

for (let i = 0; i < images.length; i++) {
  let item = {
    id: i + 1, // Adding 1 to start IDs from 1
    image: images[i],
    parameter: postContents[i].parameter,
    heading: postContents[i].heading, // Access heading from the object
    content: postContents[i].content, // Access content from the object
    class: postContents[i].class || '', // Access the CSS class from the object
  };
  posts.push(item);
}