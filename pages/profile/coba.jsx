import { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';

export default function PrivatePage(props) {
  const [images, setImages] = useState([]);
  const [imageURLS, setImageURLS] = useState([]);
  const [tag, setTag] = useState(null);

  const uploadImageToClient = event => {
    if (event.target.files && event.target.files[0]) {
      setImages(imageList => [...imageList, event.target.files[0]]);
      setImageURLS(urlList => [...urlList, URL.createObjectURL(event.target.files[0])]);
    }
  };

  const uploadTagToClient = event => {
    if (event.target.value) {
      const i = event.target.value;
      setTag(i);
    }
  };

  const uploadToServer = async event => {
    const body = new FormData();
    images.map((file, index) => {
      body.append(`file${index}`, file);
    });
    body.append('tag', tag);
    const response = await fetch('/api/file', {
      method: 'POST',
      body
    });
  };

  return (
    <div>
      <Head>
        <title>Halo</title>
      </Head>

      <div className="container">
        <div className="row">
          <h4>Select Images</h4>
          <div className="col">
            <input type="file" className="btn btn-outline-success-inverse" onChange={uploadImageToClient} />
            <input type="file" className="btn btn-outline-success-inverse" onChange={uploadImageToClient} />
          </div>
          <div className="col"></div>
          <button className="btn btn-outline-success-inverse" type="submit" onClick={uploadToServer}>
            Send to server
          </button>
          {images.map((file, index) => {
            return (
              <div class="row ">
                <lead>{file.name}</lead>
                <input type="text" onChange={uploadTagToClient} />
                <image src={imageURLS[index]} />
                <Image src={imageURLS[index]} width={300} height={200} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
