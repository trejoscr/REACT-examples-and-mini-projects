import { v2 as cloudinary } from 'cloudinary'
import { fileUpload } from "../../src/helpers/fileUpload";

cloudinary.config({
  cloud_name: 'dwcgrqbkt',
  api_key: '883833972192697',
  api_secret: 'aEyRjfAYndzObcmL__UhwJkgKu8',
  secure: true
});

describe('pruebas en fileUpload', () => { 
  
  test('debe de subir el archivo correctamente a cloudinary', async() => { 
    const imageURL = 'https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png';
    const resp = await fetch(imageURL);
    const blob = await resp.blob();
    const file = new File([blob], 'vegeta.png');
    const url = await fileUpload(file);

    expect(typeof url).toBe('string');

    const segments = url.split('/');
    const imageId = segments[segments.length - 1 ].replace('.png', '');
    console.log(imageId);
	
    const cloudResp = await cloudinary.api.delete_resources(['journal/'+imageId], {
      resource_type: 'image'
    });
    //console.log(cloudResp);

    //https://res.cloudinary.com/dwcgrqbkt/image/upload/v1696266062/journal/zggtpdzyn8xlknbhoqpb.png

  });
  
  test('debe de retornar null', async() => { 
    const file = new File([], 'foto.png');
    const url = await fileUpload(file);

    expect(url).toBe(null);
  });

})