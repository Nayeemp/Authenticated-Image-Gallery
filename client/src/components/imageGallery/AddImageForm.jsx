/* eslint-disable import/named */
/* eslint-disable no-unused-vars */
/* eslint-disable no-restricted-syntax */
/* eslint-disable react/jsx-no-duplicate-props */
import React, { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useAddImageMutation } from '../../features/imageGallery/imageGalleryAPI';
import Error from '../Error';

function AddImageForm() {
  const [title, setTitle] = useState('');
  const [image, setImage] = useState();
  const [imageFieldSize, setImageFieldSize] = useState();
  const imageField = useRef();

  const email = useSelector((state) => state.auth.email)

  const [addImage, { isLoading, isError, error }] = useAddImageMutation();
  let content = null;
  if (!isLoading && isError) {
    console.log(error);
    if (error?.data?.message) {
      content = <Error message={error.data.message} />;
    } else {
      content = <Error message="There is an error" />;
    }
  }

  const dispatch = useDispatch();

  const formHandler = async (e) => {
    e.preventDefault();

    if (title && image && (imageFieldSize < 5 * 1024 * 1024)) {
      const formData = new FormData();
      formData.append('title', title);
      formData.append('uploader', email);
      formData.append('image', image);

      // for (const [key, value] of formData) {
      //   console.log(`${key}: ${value}`)
      // }

      addImage(formData);

      imageField.current.value = null;
      setTitle('');
      setImage('');
    }
  }

  const imageFieldHandler = (e) => {
    setImage(e.target.files[0]);
    setImageFieldSize(e.target.files[0].size);
  }

  return (
    <div className="m-2 p-5 border-solid border-2 border-gray-200 rounded-md mt-4">
      <h2 className="font-bold text-lg text-center">Add a Image</h2>
      <form className="max-w-4xl m-auto" onSubmit={formHandler}>
        <input
          type="title"
          placeholder="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          className="max-w-xs w-full p-0.5 m-2 border-solid border-2 border-gray-500 px-3"
        />

        <input
          type="file"
          className="m-2 border-solid border-2 border-gray-500"
          ref={imageField}
          onChange={imageFieldHandler}
          required
        />
        <input
          type="submit"
          className="text-lg bg-black hover:bg-gray-800 text-white px-14 py-0.5 cursor-pointer rounded-sm"
        />
      </form>
      {(imageFieldSize > 5 * 1024 * 1024) && <Error message="image size must be less then 5mb" /> }
      {content }
    </div>
  );
}

export default AddImageForm;
