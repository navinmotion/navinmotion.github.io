const posts = [];
const images = [
  'https://lh3.googleusercontent.com/drive-viewer/AITFw-xht1mxOqeZYsfsBHiSKIUEXOXysESmA7hCTRKduiTANo8FASY1f8dctZU1dmVGW6yK15Fj2_BFYNwYF4YZ11Y0-2ob4g=s1600',
  'https://lh3.googleusercontent.com/drive-viewer/AITFw-y4c6Jzmyrdne1OLM4FVcCCfn1idFMVeYtxH-yOnrwPJbdju78EqmY9kYI3WpS0Bs4bT8wqYJNhxr1f15mODygjUVnSVg=s2560',
  'https://lh3.googleusercontent.com/drive-viewer/AITFw-yoxKAAojB_sgXwhhQKnl8qI0dlI-OIO6huLyliwegACdGNOQOak68xCrLhSOJ_tyE4u9H22RTjq0U9PP3H9d9C7bQkSQ=s1600',
  'https://lh3.googleusercontent.com/drive-viewer/AITFw-y3e4xb4QWRsOnhVry_zJbIYxIROrsaPDSWTSYRrCVQNpI8I6xewDGiSwloj1R27jrVsQ2e4PwOIrusCRVs0EbS11CU5w=s2560',
  'https://lh3.googleusercontent.com/drive-viewer/AITFw-ytSCvQt9FK1SWkPA9s8hCoDn1vASKQNxZ0x-ETlp39KckaUOWVNIivkcJmAEW1U0HJQZ_Knq5MOGT6ugVDLW9tqqcGww=s2560',
  'https://lh3.googleusercontent.com/drive-viewer/AITFw-zIOGP2XcvpPY84upekVFnWvmDft0lQDUsgVURFEXoBBXNVbNFbp3n96C0xHh4IIjzMf4GyHP4YpZYKTiAAivEgNS1E2A=s1600',
  'https://lh3.googleusercontent.com/drive-viewer/AITFw-xAoGFu-HPtPV0wueygjvo6t8NAJfJ52GzmqDu1YWooCEYlFmuc4DmW1yh4-CSyKgOQbO7ro_EeMXoV3YPp2uw7bkCJBA=s1600',
  'https://lh3.googleusercontent.com/drive-viewer/AITFw-wRhXog1FYxeVd2mXcNaOZ1lJ3mPZWVCb4iLr-W8BlzSda5UWCwLMJ7U6JJ5CGmRcnUDwe-iXsODtgTsdSAv6CXzKRz6g=s1600',
  'https://lh3.googleusercontent.com/drive-viewer/AITFw-yN1iyC-qSEUJLifPa9smQ4br0nCbKBCor52TKpJKKdis6bhh-GqjMsTVwOgDCFqPnUg0heTH8lQnZx39Uv6nCRPzHfzQ=s2560',
  'https://lh3.googleusercontent.com/drive-viewer/AITFw-xwnwf5PHbqk12EAyMBFfb-P7MyeF-OrQM9EqLGJcIJmmQlTBxYN2q16Ds66WJ7mKtQINa0voCH46Rr0fFyEgQ_D2mq8g=s1600',
  'https://lh3.googleusercontent.com/drive-viewer/AITFw-zXSwY-CJq-Fw01CQy_KKSi8ITiZnFbgQwI4qvwGaK9Evkehvw_PThwMDh1jU6Sy5dfqgrB3zjmiMB6RxM1M183T8P1lw=s1600',
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