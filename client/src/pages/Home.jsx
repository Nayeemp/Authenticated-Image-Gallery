import React from 'react';
import { useSelector } from 'react-redux';
import AddImageForm from '../components/imageGallery/AddImageForm';
import ImageGallery from '../components/imageGallery/ImageGallery';

function Home() {
  const { addOperation } = useSelector((state) => state.operations);

  return (
    <div>
      {addOperation && <AddImageForm />}
      <ImageGallery />
    </div>
  );
}

export default Home;
