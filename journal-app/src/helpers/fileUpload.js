export const fileUpload = async(file) => {

  //if (!file) throw new Error('No tenemos ningun archivo a subir');
  if (!file) return null;

  const cloudURL = 'https://api.cloudinary.com/v1_1/dwcgrqbkt/upload';
  const formData = new FormData();
  formData.append('upload_preset', 'react-yournal');
  formData.append('file', file);

  try {

    const resp = await fetch(cloudURL, {
      method: 'POST',
      body: formData
    });

    if (!resp.ok) throw new Error('No se pudo subir imagen');

    const cloudResp = await resp.json();
    return cloudResp.secure_url;

  } catch (error) {
    //throw new Error(error.message);
    return null
  }

}
